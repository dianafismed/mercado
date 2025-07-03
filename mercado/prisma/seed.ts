import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        //id: 1,
        title: "Produto 1",
        price: 29.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 1",
      },
      {
        //id: 2,
        title: "Produto 2",
        price: 49.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 2",
      },
      {
        //id: 3,
        title: "Produto 3",
        price: 19.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 3",
      },
      {
        //id: 4,
        title: "Produto 4",
        price: 39.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 4",
      },
      {
        //id: 5,
        title: "Produto 5",
        price: 24.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 5",
      },
      {
        //id: 6,
        title: "Produto 6",
        price: 59.99,
        image: "https://via.placeholder.com/150",
        location: "Localização 6",
      },
    ]
  })
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