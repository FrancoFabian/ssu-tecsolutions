import { PrismaClient } from '../src/generated/prisma';

const db = new PrismaClient();

async function main() {
  await db.user.createMany({
    data: [
      {
        id: 'user4-id',
        clerkId: 'user4-id',
        email: 'francofabianm2@gmail.com',
        role: 'estudiante',
      }
      // Agrega más usuarios si lo necesitas
    ],
    skipDuplicates: true, // Evita errores si ya existen
  });
}

main()
  .then(() => {
    console.log('Usuarios de prueba insertados');
    return db.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    db.$disconnect();
    process.exit(1);
  });