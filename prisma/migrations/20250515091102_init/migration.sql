-- CreateEnum
CREATE TYPE "service_status" AS ENUM ('PENDIENTE', 'ACTIVO', 'FINALIZADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "plan_status" AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO');

-- CreateEnum
CREATE TYPE "document_type" AS ENUM ('CARTA_PRESENTACION', 'CARTA_ACEPTACION', 'CARTA_TERMINACION', 'CONSTANCIA_LIBERACION');

-- CreateEnum
CREATE TYPE "report_type" AS ENUM ('MENSUAL', 'BIMESTRAL', 'FINAL');

-- CreateEnum
CREATE TYPE "report_status" AS ENUM ('ENVIADO', 'VALIDADO', 'RECHAZADO');

-- CreateEnum
CREATE TYPE "incident_status" AS ENUM ('ABIERTA', 'EN_PROCESO', 'RESUELTA', 'CERRADA');

-- CreateEnum
CREATE TYPE "task_status" AS ENUM ('PENDIENTE', 'ENTREGADA', 'REVISADA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "matricula" VARCHAR(20) NOT NULL,
    "carrera" TEXT NOT NULL,
    "creditos_aprobados" INTEGER NOT NULL,
    "creditos_totales" INTEGER NOT NULL,
    "porcentaje_creditos" DOUBLE PRECISION,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "direccion" TEXT,
    "contacto_nombre" TEXT,
    "contacto_email" TEXT NOT NULL,
    "contacto_telefono" TEXT,
    "incentivo_desc" TEXT,
    "verificada" BOOLEAN NOT NULL DEFAULT false,
    "admin_user_id" TEXT NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_assignments" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "institution_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3),
    "planned_end_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "total_hours_required" INTEGER NOT NULL DEFAULT 600,
    "hours_completed" INTEGER NOT NULL DEFAULT 0,
    "estado" "service_status" NOT NULL DEFAULT 'PENDIENTE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_plans" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "contenido" JSONB NOT NULL,
    "status" "plan_status" NOT NULL DEFAULT 'PENDIENTE',
    "approved_by" TEXT,
    "approved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "tipo" "document_type" NOT NULL,
    "file_path" TEXT NOT NULL,
    "signed_by" TEXT,
    "signed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "tipo" "report_type" NOT NULL,
    "periodo_inicio" TIMESTAMP(3) NOT NULL,
    "periodo_fin" TIMESTAMP(3) NOT NULL,
    "horas" INTEGER NOT NULL,
    "descripcion" TEXT,
    "status" "report_status" NOT NULL DEFAULT 'ENVIADO',
    "validated_by" TEXT,
    "validated_at" TIMESTAMP(3),
    "file_path" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hours_log" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "date_worked" TIMESTAMP(3) NOT NULL,
    "horas" INTEGER NOT NULL,
    "description" TEXT,
    "validated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "hours_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER,
    "reported_by" TEXT NOT NULL,
    "reported_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" "incident_status" NOT NULL DEFAULT 'ABIERTA',
    "resolved_by" TEXT,
    "resolved_at" TIMESTAMP(3),
    "resolution_notes" TEXT,

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_messages" (
    "id" SERIAL NOT NULL,
    "incident_id" INTEGER NOT NULL,
    "sender_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incident_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_limite" TIMESTAMP(3) NOT NULL,
    "status" "task_status" NOT NULL DEFAULT 'PENDIENTE',
    "entregada_at" TIMESTAMP(3),
    "attachment_path" TEXT,
    "reviewed_by" TEXT,
    "review_notes" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_matricula_key" ON "students"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "service_assignments_student_id_estado_key" ON "service_assignments"("student_id", "estado");

-- CreateIndex
CREATE UNIQUE INDEX "documents_assignment_id_tipo_key" ON "documents"("assignment_id", "tipo");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutions" ADD CONSTRAINT "institutions_admin_user_id_fkey" FOREIGN KEY ("admin_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignments" ADD CONSTRAINT "service_assignments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_assignments" ADD CONSTRAINT "service_assignments_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_plans" ADD CONSTRAINT "work_plans_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_signed_by_fkey" FOREIGN KEY ("signed_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_validated_by_fkey" FOREIGN KEY ("validated_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hours_log" ADD CONSTRAINT "hours_log_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_reported_by_fkey" FOREIGN KEY ("reported_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_resolved_by_fkey" FOREIGN KEY ("resolved_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_messages" ADD CONSTRAINT "incident_messages_incident_id_fkey" FOREIGN KEY ("incident_id") REFERENCES "incidents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_messages" ADD CONSTRAINT "incident_messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "service_assignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_reviewed_by_fkey" FOREIGN KEY ("reviewed_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
