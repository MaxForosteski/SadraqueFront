import Image from "next/image";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Services from "./components/services";
import Maplocal from "./components/maplocal";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <Services />
      <Maplocal />
      <a href="https://www.flaticon.com/br" title="whatsapp ícones">Freepik - Flaticon</a>
    </div>
  );
}
