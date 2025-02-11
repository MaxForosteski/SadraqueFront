import Image from "next/image";
import Navbar from "./components/navbar";
import Intro from "./components/intro";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <a href="https://www.flaticon.com/br" title="whatsapp ícones">Freepik - Flaticon</a>
    </div>
  );
}
