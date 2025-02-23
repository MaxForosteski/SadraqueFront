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

    }, []);
    
    return (
        <div id="servicos" className="services text-black text-4xl">
            <h1 className="pl-10 text-5xl mt-10">Serviços</h1>

            <div className="flex justify-center" id="services">
                <div className="w-10/12 p-5 flex justify-center mt-10 rounded-3xl">
                    <div className="maintenance-group">
                        <div
                            id="maintenance"
                            onMouseEnter={() => { document.getElementById("maintenance-popup")?.classList.add("visible"); }}
                            onMouseLeave={() => { document.getElementById("maintenance-popup")?.classList.remove("visible"); }}
                            className="maintenance flex p-10 rounded-s-3xl bg-gray flex-col items-center text-center text-xl"
                        >

                            <Image src={"/images/maintenance.png"} alt="Manutenção" width={100} height={100} />
                            <h3 className="font-bold mt-5">Manutenção Completa</h3>
                            <p className="mt-5">Motor, câmbio e injeção eletrônica.</p>
                        </div>
                        <div id="maintenance-popup" className="maintenance-popup text-xl">
                            <p>Manutenção Geral 🚗🔧</p>
                            <p>Inclui:</p>
                            <p>✅ Revisão e manutenção do motor</p>
                            <p>✅ Verificação e ajuste da caixa de câmbio</p>
                            <p>✅ Limpeza completa: bicos injetores, radiador e linha de combustível</p>
                            <p>✅ Troca de mangueiras (água e combustível)</p>
                            <p>✅ Substituição da bateria</p>
                            <p>✅ Troca das correias do motor</p>
                            <p>E muito mais!</p>
                        </div>
                    </div>

                    <div className="security-group">
                        <div
                            className="security flex p-10 bg-gray flex-col bg-gray items-center text-center text-xl"
                            onMouseEnter={() => { document.getElementById("security-popup")?.classList.add("visible"); }}
                            onMouseLeave={() => { document.getElementById("security-popup")?.classList.remove("visible"); }}
                        >
                            <Image src={"/images/escudo.png"} alt="Escudo" width={100} height={100} />
                            <h3 className="font-bold mt-5">Segurança e Conforto</h3>
                            <p className="mt-5">Freios, suspensão e direção.</p>
                        </div>
                        <div id="security-popup" className="security-popup text-xl">
                            <p>Segurança e Conforto para o Seu Veículo 🚗💨</p>

                            <p>✔ Revisão completa das linhas hidráulicas de freio</p>
                            <p>✔ Inspeção e troca de lonas, pastilhas e discos de freio</p>
                            <p>✔ Avaliação da suspensão: pivôs, terminais, coxins, bandejas e buchas</p>
                            <p>✔ Verificação da direção: elétrica, hidráulica e mecânica</p>
                            <p>✔ Desobstrução dos dutos de ar para melhor ventilação</p>
                            <p>✔ E muito mais!</p>

                            <p>📅 Agende já a sua revisão e dirija com segurança!</p>
                        </div>
                    </div>

                    <div className="revision-group">
                        <div className="revision flex p-10 rounded-e-3xl bg-gray flex-col bg-gray items-center text-center text-xl"
                            onMouseEnter={() => { document.getElementById("revision-popup")?.classList.add("visible"); }}
                            onMouseLeave={() => { document.getElementById("revision-popup")?.classList.remove("visible"); }}
                        >
                            <Image src={"/images/chave-inglesa.png"} alt="chave inglesa" width={100} height={100} />
                            <h3 className="font-bold mt-5">Troca de Óleo e Revisões</h3>
                            <p className="mt-5">Mais desempenho e durabilidade.</p>
                        </div>

                        <div className="revision-popup text-xl" id="revision-popup">
                            <p>Troca de Óleo, Fluidos e Revisões Completa! 🚗💨</p>

                            <p>✅ Troca de óleo: motor, câmbio e direção</p>
                            <p>✅ Substituição dos fluidos: freio e arrefecimento (radiador)</p>
                            <p>✅ Troca de filtros: óleo, combustível, ar do motor e ar-condicionado</p>
                            <p>✅ Revisão completa de velas e cabos de vela</p>
                            <p>✅ E muito mais!</p>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}