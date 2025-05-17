import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { db } from '@/lib/db';

// Este webhook recibe eventos de Clerk y actualiza la base de datos
export async function POST(req: Request) {
  // Obtener las cabeceras de la solicitud
  const headersList = await headers();
  const svix_id = headersList.get('svix-id') || '';
  const svix_timestamp = headersList.get('svix-timestamp') || '';
  const svix_signature = headersList.get('svix-signature') || '';

  // Validar que tenemos todas las cabeceras necesarias
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Cabeceras de webhook faltantes', {
      status: 400
    });
  }

  // Obtener el cuerpo de la solicitud
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Validar la firma del webhook con la clave secreta
  // La variable CLERK_WEBHOOK_SECRET debe estar definida en el entorno
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    return new Response('Error: Clerk webhook secret no configurado', {
      status: 500
    });
  }

  // Validar la firma del webhook
  const svixHeaders = {
    'svix-id': svix_id,
    'svix-timestamp': svix_timestamp,
    'svix-signature': svix_signature
  };
  
  let event: WebhookEvent;
  
  try {
    const wh = new Webhook(webhookSecret);
    event = wh.verify(body, svixHeaders) as WebhookEvent;
  } catch (err) {
    console.error('Error al verificar webhook:', err);
    return new Response('Error al verificar webhook', {
      status: 400
    });
  }

  // Procesar el evento recibido
  const eventType = event.type;

  // Gestionar los diferentes tipos de eventos
  try {
    switch (eventType) {
      // Evento de creación de usuario
      case 'user.created': {
        const { id, email_addresses } = event.data;
        const emailObject = email_addresses && email_addresses[0];
        const email = emailObject ? emailObject.email_address : '';
        
        // Guardar el usuario en la base de datos
        await db.user.create({
          data: {
            id,
            clerkId: id,
            email: email,
            role: 'estudiante', // Rol por defecto
          }
        });
        
        break;
      }
      
      // Evento de actualización de usuario
      case 'user.updated': {
        const { id, email_addresses } = event.data;
        const emailObject = email_addresses && email_addresses[0];
        const email = emailObject ? emailObject.email_address : '';
        
        // Actualizar el usuario en la base de datos
        await db.user.update({
          where: { clerkId: id },
          data: {
            email: email,
          }
        });
        
        break;
      }
      
      // Evento de eliminación de usuario
      case 'user.deleted': {
        const { id } = event.data;
        
        // Eliminar el usuario de la base de datos
        await db.user.delete({
          where: { clerkId: id }
        });
        
        break;
      }
    }
    
    return new Response('Webhook procesado correctamente', { status: 200 });
  } catch (error) {
    console.error('Error al procesar webhook:', error);
    return new Response('Error al procesar el evento', { status: 500 });
  }
} 