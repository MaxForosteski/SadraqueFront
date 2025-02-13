import Image from "next/image";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Services from "./components/services";
import Maplocal from "./components/maplocal";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <Services />
      <div className="mt-10">
        <div className="bg-grad-black flex justify-between">
          <div className="w-1/2">
          <Aboutus/>
          </div>
          <div className="w-1/2">
            <Maplocal />
          </div>
        </div>


      </div>

      <Footer/>
    </div>
  );
}
