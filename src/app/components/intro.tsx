"use client"

import Head from "next/head";
import Image from "next/image"
import React, { useEffect } from "react"


export default function Intro() {
    const [indexImage, setIndexImage] = React.useState(0);
    const [ImageSrc, setImageSrc] = React.useState("/images/carro-intro.jpg");
    const [isFadingOut, setIsFadingOut] = React.useState(false); // Estado de animação

    useEffect(() => {
        const ImageLoop = setInterval(() => {
            // Inicia a animação de saída
            setIsFadingOut(true);

            setTimeout(() => {
                // Troca a imagem após o fade-out
                setIndexImage((prevIndex) => (prevIndex + 1) % 3);

                setImageSrc(() => {
                    if (indexImage === 0) return "/images/carro-intro2.jpg";
                    if (indexImage === 1) return "/images/carro-intro3.jpg";
                    return "/images/carro-intro.jpg";
                });

                // Espera um pequeno tempo antes de voltar a opacidade
                setTimeout(() => setIsFadingOut(false), 500);
            }, 500); // Tempo de fade-out antes de trocar a imagem
        }, 5000);

        return () => clearInterval(ImageLoop);
    }, [indexImage])
    return (
        <>
            <Head>
                <link rel="preload" as="image" href="/images/carro-intro.jpg" />
                <link rel="preload" as="image" href="/images/carro-intro2.jpg" />
                <link rel="preload" as="image" href="/images/carro-intro3.jpg" />
            </Head>
            <div id="home" className="flex intro">
                <div className="mt-10 text-intro">
                    <h1 className="mb-10 text-6xl intro-title name-highlight">Sadraque Auto Center</h1>
                    <p className="text-xl intro-desc">Manutenção, reparos e peças sob demanda com <span className="text-highlight">atendimento de confiança</span>. </p>
                    <p className="text-xl mb-10 intro-desc">Possuimos baterias <span className="text-highlight">Moura, Zetta, Pioneiro, entre outras</span>.</p>
                    <div className="whatsapp-button">
                        <a className="button-contato-intro" href="#"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
                    </div>
                </div>
                <div className="carro-intro">

                    <Image
                        src={ImageSrc}
                        alt="Carro"
                        className={`img-carro-intro transition-opacity duration-300 ${isFadingOut ? "opacity-0" : "opacity-15"}`}
                        width={2550}
                        height={2550}
                        priority={true}
                    />
                </div>
            </div>
        </>
    )
}