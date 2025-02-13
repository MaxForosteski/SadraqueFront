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
      <div className="mt-10">
        <div className="bg-grad-black">
          <div className="w-1/2">
          </div>
          <div className="w-1/2">
            <Maplocal />
          </div>
        </div>


      </div>

      <a href="https://www.flaticon.com/br" title="whatsapp ícones">Freepik - Flaticon</a>
    </div>
  );
}
