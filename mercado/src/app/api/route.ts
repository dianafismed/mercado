import { PrismaClient } from "../../../generated/prisma"

export async function GET() {

  const prisma = new PrismaClient();
  const products = await prisma.product.findMany()

  return Response.json(products); 

  }

