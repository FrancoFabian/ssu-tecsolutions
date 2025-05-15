

/* ==========================================================================
   ENUMS (tipos enumerados)
   ========================================================================== */

CREATE TYPE service_status   AS ENUM ('PENDIENTE','ACTIVO','FINALIZADO','CANCELADO');
CREATE TYPE plan_status      AS ENUM ('PENDIENTE','APROBADO','RECHAZADO');
CREATE TYPE document_type    AS ENUM ('CARTA_PRESENTACION','CARTA_ACEPTACION',
                                      'CARTA_TERMINACION','CONSTANCIA_LIBERACION');
CREATE TYPE report_type      AS ENUM ('MENSUAL','BIMESTRAL','FINAL');
CREATE TYPE report_status    AS ENUM ('ENVIADO','VALIDADO','RECHAZADO');
CREATE TYPE incident_status  AS ENUM ('ABIERTA','EN_PROCESO','RESUELTA','CERRADA');
CREATE TYPE task_status      AS ENUM ('PENDIENTE','ENTREGADA','REVISADA');

/* ==========================================================================
   USUARIOS (mapeo con Clerk)
   ========================================================================== */

CREATE TABLE users (
    id           TEXT PRIMARY KEY,          -- Id de Clerk (p.ej. 'user_abc123')
    email        TEXT  NOT NULL UNIQUE,
    role         TEXT  NOT NULL CHECK (role IN
                 ('estudiante','institucion','maestro',
                  'director','secretaria','admin')),
    created_at   TIMESTAMPTZ DEFAULT now(),
    updated_at   TIMESTAMPTZ DEFAULT now()
);

/* ==========================================================================
   ESTUDIANTES
   ========================================================================== */

CREATE TABLE students (
    id                   TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    matricula            VARCHAR(20) UNIQUE NOT NULL,
    carrera              VARCHAR(150)      NOT NULL,
    creditos_aprobados   SMALLINT          NOT NULL CHECK (creditos_aprobados >= 0),
    creditos_totales     SMALLINT          NOT NULL CHECK (creditos_totales  > 0),
    porcentaje_creditos  NUMERIC(5,2) GENERATED ALWAYS AS
                         (creditos_aprobados::NUMERIC * 100 / creditos_totales) STORED
);

/* ==========================================================================
   INSTITUCIONES RECEPTORAS
   ========================================================================== */

CREATE TABLE institutions (
    id                SERIAL PRIMARY KEY,
    nombre            TEXT NOT NULL,
    ciudad            TEXT NOT NULL,
    estado            TEXT NOT NULL,
    direccion         TEXT,
    contacto_nombre   TEXT,
    contacto_email    TEXT NOT NULL,
    contacto_telefono TEXT,
    incentivo_desc    TEXT,                -- apoyo económico/descripción
    verificada        BOOLEAN DEFAULT FALSE,
    admin_user_id     TEXT    NOT NULL REFERENCES users(id) ON DELETE SET NULL,
    created_at        TIMESTAMPTZ DEFAULT now(),
    updated_at        TIMESTAMPTZ DEFAULT now()
);

/* ==========================================================================
   ASIGNACIONES DE SERVICIO SOCIAL
   ========================================================================== */

CREATE TABLE service_assignments (
    id                    SERIAL PRIMARY KEY,
    student_id            TEXT    NOT NULL REFERENCES students(id)      ON DELETE CASCADE,
    institution_id        INTEGER NOT NULL REFERENCES institutions(id)  ON DELETE CASCADE,
    start_date            DATE,
    planned_end_date      DATE,
    end_date              DATE,
    total_hours_required  SMALLINT NOT NULL DEFAULT 600,
    hours_completed       SMALLINT NOT NULL DEFAULT 0,
    estado                service_status NOT NULL DEFAULT 'PENDIENTE',
    created_at            TIMESTAMPTZ DEFAULT now(),
    updated_at            TIMESTAMPTZ DEFAULT now(),
    -- Un alumno solo puede tener un servicio social PENDIENTE/ACTIVO a la vez
    CONSTRAINT uniq_active_assignment
      UNIQUE (student_id, estado) WHERE (estado IN ('PENDIENTE','ACTIVO'))
);

/* ==========================================================================
   PLANES DE TRABAJO
   ========================================================================== */

CREATE TABLE work_plans (
    id            SERIAL PRIMARY KEY,
    assignment_id INTEGER NOT NULL REFERENCES service_assignments(id) ON DELETE CASCADE,
    contenido     JSONB   NOT NULL,       -- estructura libre u objeto detallado
    status        plan_status NOT NULL DEFAULT 'PENDIENTE',
    approved_by   TEXT REFERENCES users(id),
    approved_at   TIMESTAMPTZ,
    created_at    TIMESTAMPTZ DEFAULT now(),
    updated_at    TIMESTAMPTZ DEFAULT now()
);

/* ==========================================================================
   DOCUMENTOS FIRMADOS
   ========================================================================== */

CREATE TABLE documents (
    id            SERIAL PRIMARY KEY,
    assignment_id INTEGER NOT NULL REFERENCES service_assignments(id) ON DELETE CASCADE,
    tipo          document_type NOT NULL,
    file_path     TEXT NOT NULL,          -- ruta en storage (S3/Supabase/etc.)
    signed_by     TEXT REFERENCES users(id),
    signed_at     TIMESTAMPTZ,
    created_at    TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT uniq_doc_per_assignment UNIQUE (assignment_id, tipo)
);

/* ==========================================================================
   REPORTES PERIÓDICOS
   ========================================================================== */

CREATE TABLE reports (
    id            SERIAL PRIMARY KEY,
    assignment_id INTEGER NOT NULL REFERENCES service_assignments(id) ON DELETE CASCADE,
    tipo          report_type   NOT NULL,
    periodo_inicio DATE         NOT NULL,
    periodo_fin    DATE         NOT NULL,
    horas          SMALLINT     NOT NULL CHECK (horas >= 0),
    descripcion    TEXT,
    status         report_status NOT NULL DEFAULT 'ENVIADO',
    validated_by   TEXT REFERENCES users(id),   -- normalmente user de institución
    validated_at   TIMESTAMPTZ,
    file_path      TEXT,                        -- PDF consolidado opcional
    created_at     TIMESTAMPTZ DEFAULT now(),
    updated_at     TIMESTAMPTZ DEFAULT now()
);

/* ==========================================================================
   REGISTRO FINO DE HORAS (opcional)
   ========================================================================== */

CREATE TABLE hours_log (
    id            SERIAL PRIMARY KEY,
    assignment_id INTEGER NOT NULL REFERENCES service_assignments(id) ON DELETE CASCADE,
    date_worked   DATE     NOT NULL,
    horas         SMALLINT NOT NULL CHECK (horas > 0),
    description   TEXT,
    validated     BOOLEAN  DEFAULT FALSE
);

/* ==========================================================================
   INCIDENCIAS Y MENSAJERÍA
   ========================================================================== */

CREATE TABLE incidents (
    id              SERIAL PRIMARY KEY,
    assignment_id   INTEGER REFERENCES service_assignments(id) ON DELETE CASCADE,
    reported_by     TEXT    NOT NULL REFERENCES users(id),
    reported_at     TIMESTAMPTZ DEFAULT now(),
    tipo            TEXT    NOT NULL,
    descripcion     TEXT    NOT NULL,
    estado          incident_status NOT NULL DEFAULT 'ABIERTA',
    resolved_by     TEXT REFERENCES users(id),
    resolved_at     TIMESTAMPTZ,
    resolution_notes TEXT
);

CREATE TABLE incident_messages (
    id            SERIAL PRIMARY KEY,
    incident_id   INTEGER NOT NULL REFERENCES incidents(id) ON DELETE CASCADE,
    sender_id     TEXT    NOT NULL REFERENCES users(id),
    message       TEXT    NOT NULL,
    sent_at       TIMESTAMPTZ DEFAULT now()
);

/* ==========================================================================
   TAREAS / ENTREGABLES INTERMEDIOS
   ========================================================================== */

CREATE TABLE tasks (
    id              SERIAL PRIMARY KEY,
    assignment_id   INTEGER NOT NULL REFERENCES service_assignments(id) ON DELETE CASCADE,
    titulo          TEXT NOT NULL,
    descripcion     TEXT,
    fecha_limite    DATE NOT NULL,
    status          task_status NOT NULL DEFAULT 'PENDIENTE',
    entregada_at    TIMESTAMPTZ,
    attachment_path TEXT,
    reviewed_by     TEXT REFERENCES users(id),
    review_notes    TEXT
);

/* ==========================================================================
   ÍNDICES AUXILIARES
   ========================================================================== */

CREATE INDEX idx_assign_by_student  ON service_assignments(student_id);
CREATE INDEX idx_reports_assignment ON reports(assignment_id);
CREATE INDEX idx_plans_assignment   ON work_plans(assignment_id);
CREATE INDEX idx_hours_assignment   ON hours_log(assignment_id);
CREATE INDEX idx_docs_assignment    ON documents(assignment_id);
CREATE INDEX idx_incid_assignment   ON incidents(assignment_id);

/* ==========================================================================
   ¡Esquema listo!
   ========================================================================== */

-- Atajo para leer fácilmente el rol del claim
CREATE OR REPLACE FUNCTION current_role()
RETURNS text
LANGUAGE sql
STABLE
AS $$
  SELECT coalesce( (current_setting('request.jwt.claim', true)::json ->> 'role'), '' );
$$;








----------------------------------------------------------------------
-- USERS (sólo administradores pueden leer todos)
----------------------------------------------------------------------

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "self or admin"
ON users
FOR SELECT
USING (
  id = auth.uid()                        -- dueño
  OR current_role() = 'admin'            -- super-usuario
);

----------------------------------------------------------------------
-- STUDENTS
----------------------------------------------------------------------

ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "student can read own profile"
ON students
FOR SELECT USING (id = auth.uid() OR current_role() = 'admin');

----------------------------------------------------------------------
-- INSTITUTIONS
----------------------------------------------------------------------

ALTER TABLE institutions ENABLE ROW LEVEL SECURITY;

-- El responsable de la institución y admins pueden leerla
CREATE POLICY "institution admin or global admin"
ON institutions
FOR SELECT
USING (admin_user_id = auth.uid() OR current_role() = 'admin');

----------------------------------------------------------------------
-- SERVICE_ASSIGNMENTS
----------------------------------------------------------------------

ALTER TABLE service_assignments ENABLE ROW LEVEL SECURITY;

-- ① El alumno ve su asignación
CREATE POLICY "student sees own assignment"
ON service_assignments
FOR SELECT
USING (student_id = auth.uid());

-- ② La institución ve asignaciones que le pertenecen
CREATE POLICY "institution sees own assignees"
ON service_assignments
FOR SELECT
USING (
  institution_id IN (
    SELECT id FROM institutions
    WHERE admin_user_id = auth.uid()
  )
);

-- ③ Maestros/directores (rol = maestro|director) ven las de su facultad
--     …simplificado: aquí se deja pasar por rol, filtrado detallado en la app
CREATE POLICY "academic staff read"
ON service_assignments
FOR SELECT
USING (current_role() IN ('maestro','director','admin'));

----------------------------------------------------------------------
-- WORK_PLANS  (aplica lógica análoga)
----------------------------------------------------------------------

ALTER TABLE work_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "student or institution or staff can read plan"
ON work_plans
FOR SELECT
USING (
      -- dueño
      assignment_id IN (
        SELECT id FROM service_assignments
        WHERE student_id = auth.uid())
  OR  -- institución
      assignment_id IN (
        SELECT sa.id
        FROM service_assignments sa
        JOIN institutions i ON sa.institution_id = i.id
        WHERE i.admin_user_id = auth.uid())
  OR current_role() IN ('maestro','director','admin')
);

----------------------------------------------------------------------
-- REPORTS
----------------------------------------------------------------------

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "student sees own reports"
ON reports
FOR SELECT
USING (
  assignment_id IN (
    SELECT id FROM service_assignments
    WHERE student_id = auth.uid())
  OR current_role() = 'admin'
);

----------------------------------------------------------------------
-- HOURS_LOG
----------------------------------------------------------------------

ALTER TABLE hours_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "student inserts own hours"
ON hours_log
FOR INSERT
WITH CHECK (
  assignment_id IN (
    SELECT id FROM service_assignments
    WHERE student_id = auth.uid())
);

CREATE POLICY "student reads own hours"
ON hours_log
FOR SELECT
USING (
  assignment_id IN (
    SELECT id FROM service_assignments
    WHERE student_id = auth.uid())
  OR current_role() = 'admin'
);







-- 1. Función que recalcula el total validado para una asignación
CREATE OR REPLACE FUNCTION recalc_hours_completed(p_assignment int)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE service_assignments sa
  SET hours_completed = COALESCE((
        SELECT SUM(horas)
        FROM hours_log
        WHERE assignment_id = p_assignment
          AND validated = true     -- sólo horas confirmadas
      ),0)
  WHERE sa.id = p_assignment;
END;
$$;

-- 2. Trigger AFTER INSERT / UPDATE / DELETE en hours_log
CREATE OR REPLACE FUNCTION trg_hours_log()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  -- Para INSERT y UPDATE usamos NEW; para DELETE usamos OLD
  PERFORM recalc_hours_completed( COALESCE(NEW.assignment_id, OLD.assignment_id) );
  RETURN NEW;
END;
$$;

-- 3. Asignar el trigger
DROP TRIGGER IF EXISTS trg_hours_log_iud ON hours_log;
CREATE TRIGGER trg_hours_log_iud
AFTER INSERT OR UPDATE OR DELETE ON hours_log
FOR EACH ROW
EXECUTE FUNCTION trg_hours_log();

----------------------------------------------------------------------
-- OPCIONAL: al VALIDAR un REPORTE sumar su bloque de horas
----------------------------------------------------------------------

CREATE OR REPLACE FUNCTION trg_report_validate()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.status = 'VALIDADO' AND OLD.status <> 'VALIDADO' THEN
    -- añade horas declaradas en el reporte
    UPDATE service_assignments
    SET hours_completed = hours_completed + NEW.horas
    WHERE id = NEW.assignment_id;
  ELSIF NEW.status <> 'VALIDADO' AND OLD.status = 'VALIDADO' THEN
    -- restar si se revierte la validación
    UPDATE service_assignments
    SET hours_completed = hours_completed - OLD.horas
    WHERE id = OLD.assignment_id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_reports_status ON reports;
CREATE TRIGGER trg_reports_status
AFTER UPDATE ON reports
FOR EACH ROW
EXECUTE FUNCTION trg_report_validate();

-- 1. Función que recalcula el total validado para una asignación
CREATE OR REPLACE FUNCTION recalc_hours_completed(p_assignment int)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE service_assignments sa
  SET hours_completed = COALESCE((
        SELECT SUM(horas)
        FROM hours_log
        WHERE assignment_id = p_assignment
          AND validated = true     -- sólo horas confirmadas
      ),0)
  WHERE sa.id = p_assignment;
END;
$$;

-- 2. Trigger AFTER INSERT / UPDATE / DELETE en hours_log
CREATE OR REPLACE FUNCTION trg_hours_log()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  -- Para INSERT y UPDATE usamos NEW; para DELETE usamos OLD
  PERFORM recalc_hours_completed( COALESCE(NEW.assignment_id, OLD.assignment_id) );
  RETURN NEW;
END;
$$;

-- 3. Asignar el trigger
DROP TRIGGER IF EXISTS trg_hours_log_iud ON hours_log;
CREATE TRIGGER trg_hours_log_iud
AFTER INSERT OR UPDATE OR DELETE ON hours_log
FOR EACH ROW
EXECUTE FUNCTION trg_hours_log();

----------------------------------------------------------------------
-- OPCIONAL: al VALIDAR un REPORTE sumar su bloque de horas
----------------------------------------------------------------------

CREATE OR REPLACE FUNCTION trg_report_validate()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.status = 'VALIDADO' AND OLD.status <> 'VALIDADO' THEN
    -- añade horas declaradas en el reporte
    UPDATE service_assignments
    SET hours_completed = hours_completed + NEW.horas
    WHERE id = NEW.assignment_id;
  ELSIF NEW.status <> 'VALIDADO' AND OLD.status = 'VALIDADO' THEN
    -- restar si se revierte la validación
    UPDATE service_assignments
    SET hours_completed = hours_completed - OLD.horas
    WHERE id = OLD.assignment_id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_reports_status ON reports;
CREATE TRIGGER trg_reports_status
AFTER UPDATE ON reports
FOR EACH ROW
EXECUTE FUNCTION trg_report_validate();

