import { clerkMiddleware } from '@clerk/nextjs/server'

// Esta configuración especifica qué rutas son públicas (accesibles sin autenticación)
// y qué rutas requieren autenticación
export default clerkMiddleware()

export const config = {
  matcher: [
    // Patrón básico que excluye archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}