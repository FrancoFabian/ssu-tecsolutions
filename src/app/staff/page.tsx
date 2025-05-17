import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function StaffPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }
  
  // Aquí verificaríamos el rol del usuario (maestro, director, secretaria)
  
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Portal de Staff</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Pendientes</h2>
          <div className="space-y-4">
            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">Plan de Trabajo</h3>
                <span className="text-yellow-600 text-sm">Pendiente</span>
              </div>
              <p className="text-sm text-gray-600">Instituto Tecnológico de Monterrey</p>
              <div className="mt-2 flex justify-end">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                  Revisar
                </button>
              </div>
            </div>
            
            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">Reporte Mensual</h3>
                <span className="text-yellow-600 text-sm">Pendiente</span>
              </div>
              <p className="text-sm text-gray-600">Ana García Pérez (A01234567)</p>
              <div className="mt-2 flex justify-end">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                  Revisar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Estadísticas</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Reportes Validados</span>
                <span>24/30</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Planes Aprobados</span>
                <span>12/15</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Incidencias Resueltas</span>
                <span>5/8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '62.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Acciones Rápidas</h2>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Validar Reporte
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Aprobar Plan de Trabajo
            </button>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
              Generar Constancia
            </button>
            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
              Ver Incidencias
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 md:col-span-3">
          <h2 className="text-xl font-semibold mb-3">Validación de Reportes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matrícula</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institución</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ana García Pérez</td>
                  <td className="px-6 py-4 whitespace-nowrap">A01234567</td>
                  <td className="px-6 py-4 whitespace-nowrap">Escuela Primaria Benito Juárez</td>
                  <td className="px-6 py-4 whitespace-nowrap">Mensual</td>
                  <td className="px-6 py-4 whitespace-nowrap">40</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pendiente
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200 mr-2">
                      Validar
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
                      Rechazar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Carlos Mendoza Ruiz</td>
                  <td className="px-6 py-4 whitespace-nowrap">A01876543</td>
                  <td className="px-6 py-4 whitespace-nowrap">Hospital General</td>
                  <td className="px-6 py-4 whitespace-nowrap">Bimestral</td>
                  <td className="px-6 py-4 whitespace-nowrap">80</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pendiente
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200 mr-2">
                      Validar
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
                      Rechazar
                    </button>
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