'use client';

import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full px-4 pt-6 flex justify-between items-center">
      {/*Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        <Image
          src='/img/logo.png' alt='Logo do Mercado' width={180} height={180}
        />
      </Link>

      {/*Navigation Links */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 p-2 bg-white text-black"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py- ">
          <Search size={20} />
        </button>
      </div>

      {/*Sign Button*/}
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">
        Assine++
      </button>
    </div>
  );
}