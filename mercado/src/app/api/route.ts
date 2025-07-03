interface Product {
  id: number
  title: string
  price: number
  image: string
  location: string
};

export function GET() {
  const products: Product[] = [];
  return Response.json(products); 
  }

