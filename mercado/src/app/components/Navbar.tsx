// components/Header.tsx
'use client';

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <ul className="flex justify-center gap-6">
          <li>
            <Link href="/categorias" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Categorias
            </Link>
          </li>
          <li>
            <Link href="/ofertas" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Ofertas
            </Link>
          </li>
          <li>
            <Link href="/cupons" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Cupons
            </Link>
          </li>
          <li>
            <Link href="/supermercado" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Supermercado
            </Link>
          </li>
          <li>
            <Link href="/moda" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Moda
            </Link>
          </li>
          <li>
            <Link href="/mercado-play" className="text-md text-gray-700 hover:text-gray-500 transitiion0">
              Mercado Play
            </Link>
          </li>
          <li>
            <Link href="/vender" className="text-md text-gray-700 hover:text-gray-500 transitiion">
              Vender
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}