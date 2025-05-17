"use client";

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ href, icon, label, isActive, onClick }: SidebarLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`flex items-center p-3 rounded-lg hover:bg-blue-50 transition ${
        isActive ? "bg-blue-100 text-blue-700" : "text-gray-700"
      }`}
      onClick={onClick}
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { isLoaded, userId } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Determinar links según el rol (esto podría obtenerse de un hook o context)
  // En un caso real, obtendrías el rol desde Clerk o tu base de datos
  // Para este ejemplo, haremos una lógica basada en la URL
  let role = "estudiante"; // Valor por defecto
  
  if (pathname?.startsWith("/admin")) {
    role = "admin";
  } else if (pathname?.startsWith("/institutions")) {
    role = "institucion";
  } else if (pathname?.startsWith("/staff")) {
    role = "staff";
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Si no hay usuario, no mostramos el layout
  if (!isLoaded || !userId) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (versión móvil con overlay cuando está abierto) */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-blue-600">SSU Platform</h1>
          </div>
          
          <div className="overflow-y-auto flex-grow p-4 space-y-2">
            {/* Links comunes para todos los roles */}
            <SidebarLink
              href="/"
              icon="🏠"
              label="Inicio"
              isActive={pathname === "/"}
            />
            
            <SidebarLink
              href="/me"
              icon="👤"
              label="Mi Perfil"
              isActive={pathname === "/me"}
            />
            
            {/* Links específicos por rol */}
            {role === "estudiante" && (
              <>
                <div className="mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Estudiante</div>
                <SidebarLink
                  href="/students"
                  icon="📚"
                  label="Portal Estudiante"
                  isActive={pathname === "/students"}
                />
                <SidebarLink
                  href="/students/reportes"
                  icon="📝"
                  label="Mis Reportes"
                  isActive={pathname === "/students/reportes"}
                />
                <SidebarLink
                  href="/students/solicitudes"
                  icon="🔍"
                  label="Solicitudes"
                  isActive={pathname === "/students/solicitudes"}
                />
              </>
            )}
            
            {role === "institucion" && (
              <>
                <div className="mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Institución</div>
                <SidebarLink
                  href="/institutions"
                  icon="🏢"
                  label="Panel Institución"
                  isActive={pathname === "/institutions"}
                />
                <SidebarLink
                  href="/institutions/proyectos"
                  icon="📋"
                  label="Proyectos"
                  isActive={pathname === "/institutions/proyectos"}
                />
                <SidebarLink
                  href="/institutions/estudiantes"
                  icon="👥"
                  label="Estudiantes"
                  isActive={pathname === "/institutions/estudiantes"}
                />
              </>
            )}
            
            {role === "staff" && (
              <>
                <div className="mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Personal</div>
                <SidebarLink
                  href="/staff"
                  icon="👨‍💼"
                  label="Panel Staff"
                  isActive={pathname === "/staff"}
                />
                <SidebarLink
                  href="/staff/reportes"
                  icon="📊"
                  label="Validar Reportes"
                  isActive={pathname === "/staff/reportes"}
                />
                <SidebarLink
                  href="/staff/aprobaciones"
                  icon="✅"
                  label="Aprobaciones"
                  isActive={pathname === "/staff/aprobaciones"}
                />
              </>
            )}
            
            {role === "admin" && (
              <>
                <div className="mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase">Administración</div>
                <SidebarLink
                  href="/admin"
                  icon="🔧"
                  label="Panel Admin"
                  isActive={pathname === "/admin"}
                />
                <SidebarLink
                  href="/admin/usuarios"
                  icon="👥"
                  label="Usuarios"
                  isActive={pathname === "/admin/usuarios"}
                />
                <SidebarLink
                  href="/admin/instituciones"
                  icon="🏢"
                  label="Instituciones"
                  isActive={pathname === "/admin/instituciones"}
                />
                <SidebarLink
                  href="/admin/configuracion"
                  icon="⚙️"
                  label="Configuración"
                  isActive={pathname === "/admin/configuracion"}
                />
              </>
            )}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserButton afterSignOutUrl="/" />
                <div className="text-sm">
                  <div className="font-medium">Mi Cuenta</div>
                  <div className="text-gray-500 text-xs capitalize">{role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay para móvil cuando el sidebar está abierto */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <button 
              className="p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
              onClick={toggleSidebar}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2 md:hidden">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </header>
        
        {/* Contenido */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 