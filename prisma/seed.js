import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Създаване на двама админи с еднаква парола "1324"
  await prisma.admin.upsert({
    where: { name: "Damyan Enchev" },
    update: {},
    create: {
      name: "Damyan Enchev",
      password: "1324"
    }
  });

  await prisma.admin.upsert({
    where: { name: "Pavel Panteleev" },
    update: {},
    create: {
      name: "Pavel Panteleev",
      password: "1324"
    }
  });

  console.log("Админите са добавени успешно!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
