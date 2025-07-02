import Image from "next/image";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {ProductGrid} from "./components/ProductGrid";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <Header/>
        <Navbar/>
      </header>
      <main>
        <ProductGrid/>
      </main>
    </div>
  );
}
