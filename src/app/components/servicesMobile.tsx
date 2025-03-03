"use client"

import Image from "next/image"
import React, { useEffect } from "react"

export default function ServicesMobile() {
    useEffect(() => {
        const services: HTMLDivElement | null = document.getElementById("services") as HTMLDivElement | null
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: { isIntersecting: boolean }) => {
                if (entry.isIntersecting && services) {
                    services.classList.add("visivel");
                }
            })
        }, { threshold: 0.1 })
        if (services) {
            observer.observe(services)
        }

    }, []);

    return (
        <div id="servicos" className="services text-black text-4xl">
            <h1 className="text-5xl mt-10 text-center">Serviços</h1>

            <div className="flex justify-center mt-10" id="services">
                <div className="w-11/12">
                    <div className="maintenance-group">
                        <div
                            id="maintenance"
                            className="maintenance flex p-10 rounded-3xl bg-gray flex-col items-center text-center text-xl"
                        >

                            <Image src={"/images/maintenance.png"} alt="Manutenção" width={100} height={100} />
                            <h3 className="font-bold mt-5">Manutenção Completa</h3>
                            <p className="mt-5">Motor, câmbio e injeção eletrônica.</p>
                        </div>
                    </div>

                    <div className="security-group  mt-10">
                        <div
                            className="security flex rounded-3xl p-10 bg-gray flex-col bg-gray items-center text-center text-xl"
                        >
                            <Image src={"/images/escudo.png"} alt="Escudo" width={100} height={100} />
                            <h3 className="font-bold mt-5">Segurança e Conforto</h3>
                            <p className="mt-5">Freios, suspensão e direção.</p>
                        </div>
                    </div>

                    <div className="revision-group mt-10">
                        <div className="revision flex p-10 rounded-3xl bg-gray flex-col bg-gray items-center text-center text-xl"
                        >
                            <Image src={"/images/chave-inglesa.png"} alt="chave inglesa" width={100} height={100} />
                            <h3 className="font-bold mt-5">Troca de Óleo e Revisões</h3>
                            <p className="mt-5">Mais desempenho e durabilidade.</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <a className="button-contato-intro flex justify-center" href="https://wa.me/5549999012693"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
            </div>
        </div>
    )
}