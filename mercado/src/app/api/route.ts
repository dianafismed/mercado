interface Product {
  id: number
  title: string
  price: number
  image: string
  location: string
};

export function GET() {
  const products: Product[] = [
  {
    id: 1,
    title: "Produto 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 1",
  },
  {
    id: 2,
    title: "Produto 2",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 2",
  },
  {
    id: 3,
    title: "Produto 3",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 3",
  },
  {
    id: 4,
    title: "Produto 4",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 4",
  },
  {
    id: 5,
    title: "Produto 5",
    price: 24.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 5",
  },
  {
    id: 6,
    title: "Produto 6",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    location: "Localização 6",
  },
];
  return Response.json(products); 
  }

