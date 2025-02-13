"use client"

import Image from "next/image"
import { list } from "postcss"
import { useEffect } from "react"

export default function Services() {
    useEffect(() => {
        const services: any = document.getElementById("services")
        const observer = new IntersectionObserver((entries: any) => {
            entries.forEach((entry: { isIntersecting: boolean }) => {
                if (entry.isIntersecting) {
                    services.classList.add("visivel");
                }
            })
        }, { threshold: 0.1 })
        observer.observe(services)
    }, [])
    return (
        <div id="servicos" className="services text-black text-4xl">
            <h1 className="pl-10 mt-10">Serviços</h1>

            <div className="flex justify-center " id="services">
                <div className="w-10/12 p-5 flex justify-between bg-gray mt-10 rounded-3xl">
                    <div className="maintenance flex flex-col items-center text-center text-xl m-10">
                        <Image src={"/images/maintenance.png"} alt="Manutenção" width={100} height={100} />
                        <h3 className="font-bold mt-5">Manutenção Completa</h3>
                        <p className="mt-5">Motor, câmbio e injeção eletrônica.</p>
                    </div>
                    <div className="security flex flex-col items-center text-center text-xl m-10">
                        <Image src={"/images/escudo.png"} alt="Escudo" width={100} height={100} />
                        <h3 className="font-bold mt-5">Segurança e Conforto</h3>
                        <p className="mt-5">Freios, suspensão e direção.</p>
                    </div>
                    <div className="revision flex flex-col items-center text-center text-xl m-10">
                        <Image src={"/images/chave-inglesa.png"} alt="chave inglesa" width={100} height={100} />
                        <h3 className="font-bold mt-5">Troca de Óleo e Revisões</h3>
                        <p className="mt-5">Mais desempenho e durabilidade.</p>
                    </div>
                </div>
            </div>



        </div>
    )
}