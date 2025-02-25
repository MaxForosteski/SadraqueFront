import Image from "next/image"

export default function Logos() {
    return (
        <>
            <div className="text-black text-4xl flex justify-center mt-10 pl-10">Marcas que atendemos</div>
            <div className="logos-carrossel flex justify-center items-center    m-10">
                <Image
                    src={"/images/audi-logo.png"}
                    alt="audi logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />

                <Image
                    src={"/images/caoa-logo.png"}
                    alt="caoa logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image
                    src={"/images/chevrolet-logo.png"}
                    alt="chevrolet logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image
                    src={"/images/citroen-logo.png"}
                    alt="citroen logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image
                    src={"/images/fiat-logo.png"}
                    alt="fiat logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/ford-logo.png"}
                    alt="ford logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/honda-logo.png"}
                    alt="honda logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/hyundai-logo.png"}
                    alt="hyundai logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/kia-logo.png"}
                    alt="kia logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/nissan-logo.png"}
                    alt="nissan logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/peugeot-logo.png"}
                    alt="peugeot logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/renault-logo.png"}
                    alt="renault logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/toyota-logo.png"}
                    alt="toyota logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
                <Image 
                    src={"/images/volkswagen-logo.png"}
                    alt="volkswagen logo"
                    width={250}
                    height={200}
                    style={{width:"15%", height:"15%"}}
                />
            </div>
        </>
    )
}