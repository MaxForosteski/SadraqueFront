"use client"

import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Services from "./components/services";
import Maplocal from "./components/maplocal";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Logos from "./components/logos";
import { useState , useEffect } from "react";
import ServicesMobile from "./components/servicesMobile";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isNotebook, setIsNotebook] = useState(false)
    useEffect(()=>{
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        }

        const checkNotebook = () => {
          setIsNotebook(window.innerWidth < 1192 && window.innerWidth >= 768);
        }

        checkMobile();
        checkNotebook();

        window.addEventListener("resize",checkNotebook);
        window.addEventListener("resize", checkMobile);

        return () => { 
          window.removeEventListener("resize", checkMobile);
          window.removeEventListener("resize", checkNotebook);
        }
    },[])
  return (
    <div className="main">
      <Navbar isMobile = {isMobile} />
      <Intro isMobile = {isMobile}/>
      <Logos ReactiveFlags = {{isMobile,isNotebook}} />
      {isMobile?<ServicesMobile/>:<Services />}
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
