import Image from "next/image"

export default function Intro() {
    return (
        <div id="home" className="flex intro">
            

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