import Image from "next/image"

export default function Intro() {
    return (
        <div id="home" className="flex intro">
            <div className="mt-10 text-intro">
                <h1 className="mb-10 text-4xl intro-title"><span className="text-highlight">Sadraque Auto Center</span> – Cuidado e Qualidade para Seu Carro!</h1>
                <p className="text-2xl mb-10 intro-desc">Manutenção, reparos e peças sob demanda com <span className="text-highlight">atendimento de confiança</span>. Tudo para manter <span className="text-highlight">seu carro seguro</span> e em <span className="text-highlight">perfeito estado</span>.</p>
                <div className="whatsapp-button">
                    <a className="button-contato-intro" href="#"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
                </div>
            </div>
            <div className="carro-intro">

                <Image
                    src={"/images/carro-intro.jpg"}
                    alt="Carro"
                    className="img-carro-intro"
                    width={2550}
                    height={2550}
                />
                <Image
                    src={"/images/carro-intro2.jpg"}
                    alt="Carro2"
                    className="img-carro-intro"
                    width={2550}
                    height={2550}
                />
                <Image
                    src={"/images/carro-intro3.jpg"}
                    alt="Carro3"
                    className="img-carro-intro"
                    width={2550}
                    height={2550}
                />
            </div>
        </div>
    )
}