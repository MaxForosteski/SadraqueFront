import Image from "next/image"

export default function Intro() {
    return (
        <div className="flex">
            <div className="w-1/2 mt-10 ml-10 mr-5 text-intro">
                <h2 className="mb-10"><span className="text-highlight">Sadraque Auto Center</span> – Cuidado e Qualidade para Seu Carro!</h2>
                <p >Manutenção, reparos e peças sob demanda com <span className="text-highlight">atendimento de confiança</span>. Tudo para manter <span className="text-highlight">seu carro seguro</span> e em <span className="text-highlight">perfeito estado</span>.</p>
            </div>

            <div className="w-1/2 mt-10 carro-intro">
                <Image
                    src={"/images/carro-intro.jpg"}
                    alt="Carro"
                    width={450}
                    height={450}
                    style={{ borderRadius: "10%" }}
                />
            </div>
        </div>
    )
}