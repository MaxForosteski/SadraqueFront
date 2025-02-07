import Image from "next/image";
import Navbar from "./components/navbar";
import Intro from "./components/intro";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
    </div>
  );
}
