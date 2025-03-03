import Image from "next/image"

export default function AboutusMobile() {
    return (
        <div id="sobrenos" className="aboutus m-10 ">
            <div className="">
                <div className="flex flex-col justify-around m-10">
                    <h1 className="text-7xl text-highlight text-center">Sobre nós</h1>
                    <div className="flex justify-center justify-around">
                        <p className="aboutus-desc text-2xl flex items-center text-justify mt-10">Aqui cuidamos do seu veículo com qualidade e dedicação, oferecendo atendimento confiável e eficiente. Nosso compromisso é garantir sua segurança e a de todos os passageiros.</p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <a className="button-contato-intro flex justify-center" href="#"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
                </div>

                <div className="flex mt-10 flex-col justify-around">

                    <div className="email bg-neutral-800 rounded-3xl p-5 m-5 flex flex-col items-center">
                        <Image
                            src={"/images/email.png"}
                            alt="Local"
                            width={75}
                            height={75}
                            className="bg-neutral-100 rounded-xl p-1"
                        />
                        <div className="items-center flex text-3xl mt-5">
                            <p className="name-highlight">Email</p>
                        </div>
                        <p className="text-white text-xl mt-5 flex justify-center">Example@gmail.com</p>
                    </div>


                    <div className="phonenumber bg-neutral-800 rounded-3xl p-5 m-5 flex flex-col items-center">
                        <Image
                            src={"/images/telefone.png"}
                            alt="Local"
                            width={75}
                            height={75}
                            className="bg-neutral-100 rounded-xl p-1"
                        />
                        <div className="items-center flex text-3xl">
                            <p className="name-highlight mt-5">Telefone</p>
                        </div>
                        <p className="text-white text-xl mt-5 flex justify-center">(49) 99901-2693</p>
                    </div>


                    <div className="localization bg-neutral-800 rounded-3xl p-5 m-5 flex flex-col items-center">
                        <Image
                            src={"/images/local.png"}
                            alt="Local"
                            width={75}
                            height={75}
                            className="bg-neutral-100 rounded-xl p-1"
                        />
                        <div className="items-center flex text-3xl">
                            <p className="name-highlight mt-5">Localização</p>
                        </div>
                        <p className="text-white text-xl mt-5 flex text-justify justify-center">Av. da Independência, 744 - Barracao - Centro, Água Doce - SC, 89654-000</p>
                    </div>
                </div>


            </div>



            <div className="mt-10 flex justify-center">
                <a className="button-contato-intro flex justify-center" href="#"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
            </div>
        </div >
    )
}