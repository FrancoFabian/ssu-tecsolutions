import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }
  
  // Aquí verificaríamos que el usuario tenga rol de admin
  // Para un ejemplo básico, simplemente mostramos la interfaz de admin
  
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Estudiantes</h2>
          <p className="text-3xl font-bold">248</p>
          <p className="text-sm opacity-80">23 nuevos este mes</p>
        </div>
        
        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Instituciones</h2>
          <p className="text-3xl font-bold">42</p>
          <p className="text-sm opacity-80">5 nuevas este mes</p>
        </div>
        
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Personal</h2>
          <p className="text-3xl font-bold">16</p>
          <p className="text-sm opacity-80">2 nuevos este mes</p>
        </div>
        
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Proyectos Activos</h2>
          <p className="text-3xl font-bold">87</p>
          <p className="text-sm opacity-80">12 nuevos este mes</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Usuarios Recientes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">María González</div>
                        <div className="text-sm text-gray-500">maria@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Estudiante</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Activo</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Carlos Martínez</div>
                        <div className="text-sm text-gray-500">carlos@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Maestro</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Activo</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Laura Pérez</div>
                        <div className="text-sm text-gray-500">laura@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Institución</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
          <div className="flow-root">
            <ul className="-mb-8">
              <li className="mb-4">
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white">📝</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-700">Ana López <span className="font-medium text-gray-900">publicó un nuevo reporte</span></p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time>Hace 3 horas</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white">✓</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-700">Universidad Nacional <span className="font-medium text-gray-900">aprobó un nuevo proyecto</span></p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time>Hace 6 horas</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white">👤</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-700">5 nuevos estudiantes <span className="font-medium text-gray-900">se registraron en la plataforma</span></p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time>Hace 12 horas</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 