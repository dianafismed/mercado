import Image from "next/image";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <Header/>
        <Navbar/>
      </header>
      
    </div>
  );
}
