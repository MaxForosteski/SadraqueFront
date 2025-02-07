import Image from "next/image"

export default function Intro() {
    return (
        <div className="flex">
            <div className="w-1/2">

            </div>

            <div className="w-1/2 mt-10 carro-intro">
                <Image
                    src={"/images/carro-intro.jpg"}
                    alt="Carro"
                    width={1000}
                    height={1400}
                />
            </div>
        </div>
    )
}