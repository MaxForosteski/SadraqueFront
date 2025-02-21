"use client"

import Image from "next/image"
import React, { useEffect } from "react"

export default function Services() {
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

    }, [])
    const maintenance_popup: HTMLDivElement | null = document.getElementById("maintenance-popup") as HTMLDivElement | null;

    function OnMouseMaintenance(event: React.MouseEvent<HTMLDivElement>) {
        if (maintenance_popup) {
            maintenance_popup.classList.add("visible")
        }
    }
    const OutMouseMaintenance = (event: React.MouseEvent<HTMLDivElement>) => {
        if (maintenance_popup) {
            maintenance_popup.classList.remove("visible")
        }
    }

    return (
        <div id="servicos" className="services text-black text-4xl">
            <h1 className="pl-10 mt-10">Serviços</h1>

            <div className="flex justify-center" id="services">
                <div className="w-10/12 p-5 flex justify-center mt-10 rounded-3xl">
                    <div className="maintenance-group">
                        <div id="maintenance" onMouseEnter={OnMouseMaintenance} onMouseLeave={OutMouseMaintenance} className="maintenance flex p-10 rounded-s-3xl bg-gray flex-col items-center text-center text-xl">
                            <Image src={"/images/maintenance.png"} alt="Manutenção" width={100} height={100} />
                            <h3 className="font-bold mt-5">Manutenção Completa</h3>
                            <p className="mt-5">Motor, câmbio e injeção eletrônica.</p>
                        </div>
                        <div id="maintenance-popup" className="maintenance-popup">
                            <p>testesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>


                    <div className="security flex p-10 bg-gray flex-col bg-gray items-center text-center text-xl">
                        <Image src={"/images/escudo.png"} alt="Escudo" width={100} height={100} />
                        <h3 className="font-bold mt-5">Segurança e Conforto</h3>
                        <p className="mt-5">Freios, suspensão e direção.</p>
                    </div>

                    <div className="revision flex p-10 rounded-e-3xl bg-gray flex-col bg-gray items-center text-center text-xl">
                        <Image src={"/images/chave-inglesa.png"} alt="chave inglesa" width={100} height={100} />
                        <h3 className="font-bold mt-5">Troca de Óleo e Revisões</h3>
                        <p className="mt-5">Mais desempenho e durabilidade.</p>
                    </div>

                </div>
            </div>



        </div>
    )
}