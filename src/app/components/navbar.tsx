
import Image from "next/image"


export default function Navbar({ isMobile }: { isMobile: boolean }) {

    return (
        <div className="navbar text-xl">
            <ul>
                <Image
                    src={"/images/Sadraque-logo.jpg"}
                    alt="Sadraque Auto center"
                    width={1000}
                    height={1000}
                    style={{ width: "200px", height: "90px" }}
                />
                {isMobile ? <></> :
                    <>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobrenos">Sobre nós</a></li>
                    </>
                }
            </ul>
        </div>
    )
}