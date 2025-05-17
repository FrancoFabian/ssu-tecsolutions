import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function StudentsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }
  
  // Aquí normalmente verificaríamos el rol del usuario
  // Ya que estamos integrando con Prisma, esto se haría con una consulta a la base de datos
  
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Portal de Estudiantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Progreso de Créditos</h2>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full" 
                style={{ width: '67%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>0 horas</span>
              <span>480 horas</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Horas acumuladas:</p>
              <p className="text-2xl font-bold">320</p>
            </div>
            <div>
              <p className="text-gray-600">Horas restantes:</p>
              <p className="text-2xl font-bold">160</p>
            </div>
            <div>
              <p className="text-gray-600">Porcentaje:</p>
              <p className="text-2xl font-bold">67%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Acciones Rápidas</h2>
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Solicitar Servicio
            </button>
            <button className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Enviar Reporte Mensual
            </button>
            <button className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Descargar Carta de Liberación
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Asignaciones Activas</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institución</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proyecto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horas Asignadas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Inicio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Centro Comunitario "Nueva Esperanza"</td>
                  <td className="px-6 py-4 whitespace-nowrap">Apoyo educativo a niños</td>
                  <td className="px-6 py-4 whitespace-nowrap">240 horas</td>
                  <td className="px-6 py-4 whitespace-nowrap">15/02/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      En progreso
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Hospital General</td>
                  <td className="px-6 py-4 whitespace-nowrap">Asistencia administrativa</td>
                  <td className="px-6 py-4 whitespace-nowrap">120 horas</td>
                  <td className="px-6 py-4 whitespace-nowrap">10/03/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Por iniciar
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Reportes Mensuales</h2>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Nuevo Reporte
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proyecto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horas Reportadas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Envío</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Abril 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Centro Comunitario "Nueva Esperanza"</td>
                  <td className="px-6 py-4 whitespace-nowrap">40 horas</td>
                  <td className="px-6 py-4 whitespace-nowrap">30/04/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprobado
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <button>Ver</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Marzo 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Centro Comunitario "Nueva Esperanza"</td>
                  <td className="px-6 py-4 whitespace-nowrap">40 horas</td>
                  <td className="px-6 py-4 whitespace-nowrap">31/03/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprobado
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <button>Ver</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Febrero 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Centro Comunitario "Nueva Esperanza"</td>
                  <td className="px-6 py-4 whitespace-nowrap">40 horas</td>
                  <td className="px-6 py-4 whitespace-nowrap">28/02/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprobado
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <button>Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 