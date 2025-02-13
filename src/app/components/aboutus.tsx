import Image from "next/image"

export default function Aboutus() {
    return (
        <div className="aboutus m-10">
            <h1 className="text-3xl m-10 text-highlight">Sobre nós</h1>
            <p className="aboutus-desc text-xl">Na Sadraque Auto Center, cuidamos do seu veículo com qualidade e dedicação, garantindo um atendimento confiável e eficiente.

                Nosso compromisso é garantir que você dirija com segurança e tranquilidade.

                Conte com a Sadraque Auto Center para manter seu carro sempre em ótimo estado!</p>

            <div className="localization">
                <div className="flex direction-row">
                    <Image
                        src={"/images/local.png"}
                        alt="Local"
                        width={50}
                        height={50}
                        className="bg-neutral-100 rounded-xl m-10"
                    />
                    <div className="items-center flex text-xl">
                        <p className="text-highlight">Localização</p>
                    </div>

                </div>
                <p className="text-white text-xl ml-20">Av. da Independência, 744 - Barracao - Centro, Água Doce - SC, 89654-000</p>
            </div>


            <div className="email">
                <div className="flex direction-row">
                    <Image
                        src={"/images/email.png"}
                        alt="Local"
                        width={50}
                        height={50}
                        className="bg-neutral-100 rounded-xl m-10"
                    />
                    <div className="items-center flex text-xl">
                        <p className="text-highlight">Email</p>
                    </div>

                </div>
                <p className="text-white text-xl ml-20">Example@gmail.com</p>
            </div>
            <div className="phonenumber">
                <div className="flex direction-row">
                    <Image
                        src={"/images/telefone.png"}
                        alt="Local"
                        width={50}
                        height={50}
                        className="bg-neutral-100 rounded-xl m-10"
                    />
                    <div className="items-center flex text-xl">
                        <p className="text-highlight">Telefone</p>
                    </div>

                </div>
                <p className="text-white text-xl ml-20">(49) 99901-2693</p>
            </div>

            <div className="whatsapp-button w-5/12 mt-10">
                <a className="button-contato-intro" href="#"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
            </div>
        </div>
    )
}