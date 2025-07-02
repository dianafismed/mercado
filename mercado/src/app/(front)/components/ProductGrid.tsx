'use client';

import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
};

export function ProductGrid() {
  
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(data) && data.length > 0 &&
        data.map((product) => (
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