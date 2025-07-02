// components/Header.tsx
'use client';

import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-amber-300 shadow-md p-4 flex justify-between items-center">
      {/*Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        <Image
          src='/img/logo.png' alt='Logo do Mercado'
        />
      </Link>

      {/*Navigation Links */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
        />
        <button className="p-2 bg-blue-500 text-white rounded">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}