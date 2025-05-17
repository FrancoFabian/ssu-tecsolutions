import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col items-center justify-center text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Plataforma de Servicio Social Universitario
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Tu portal para gestionar eficientemente los servicios sociales universitarios
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <SignedOut>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
              <SignInButton mode="modal">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition">
                  Iniciar Sesión
                </button>
              </SignInButton>
              
              <SignUpButton mode="modal">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                  Registrarse
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
              <Link href="/me">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition">
                  Mi Perfil
                </button>
              </Link>
              
              <Link href="/students">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                  Portal Estudiante
                </button>
              </Link>
            </div>
          </SignedIn>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Para Estudiantes</h3>
          <p className="text-white/80">
            Gestiona tus horas de servicio, envía reportes y mantente al día con tus asignaciones.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Para Instituciones</h3>
          <p className="text-white/80">
            Publica oportunidades, supervisa estudiantes y administra planes de trabajo.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Para Staff</h3>
          <p className="text-white/80">
            Valida reportes, aprueba horas y gestiona la experiencia de servicio social.
          </p>
        </div>
      </div>
    </div>
  );
}
