export type Roles = 'admin' | 'estudiante' | 'institucion' | 'maestro' | 'director' | 'secretaria';

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
} 