import Image from "next/image"

export default function Navbar() {
    return (
        <div className="navbar text-xl">
            <ul>
                    <Image
                        src={"/images/Sadraque-logo.jpg"}
                        alt="Sadraque Auto center"
                        width={1000}
                        height={1000}
                        style={{width: "200px", height: "90px"}}
                    />
                <li><a href="#">Home</a></li>
                <li><a href="#">Loja</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre nós</a></li>
            </ul>
        </div>
    )
}