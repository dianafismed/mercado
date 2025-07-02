'use client';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
};

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

export function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-base font-medium text-gray-800 mb-1">{product.title}</h3>
              <p className="text-lg font-bold text-black mb-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">{product.location}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}