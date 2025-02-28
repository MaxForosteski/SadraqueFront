import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Services from "./components/services";
import Maplocal from "./components/maplocal";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Logos from "./components/logos";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <Logos />
      <Services />
      <div className="mt-10">
        <div className="bg-grad-black flex flex-col justify-between">
          <Aboutus />
          <Maplocal />
        </div>
      </div>
      <Footer />
    </div>
  );
}
