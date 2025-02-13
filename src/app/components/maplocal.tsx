"use client"

import { useEffect } from "react"

export default function Maplocal() {
    useEffect(() => {
        const mapa: HTMLDivElement | null = document.getElementById("mapa") as HTMLDivElement | null;
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: { isIntersecting: boolean }) => {
                if (entry.isIntersecting && mapa) {
                    mapa.classList.add("visible")
                }
            }
            )
        }, { threshold: 0.1 })
        if (mapa) {
            observer.observe(mapa)
        }

    }, [])
    return (
        <div className="maplocal text-highlight">
            <h1 className="text-3xl m-10 text-center">Mapa</h1>
            <div className="m-10 rounded-xl flex justify-center">
                <iframe id="mapa" className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.685694248753!2d-51.55715749999999!3d-27.008490599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e6c9b312a4f755%3A0xe0e0918273b6482f!2sSadraque%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1739447326058!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: "5px solid var(--primary)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}