import Image from "next/image"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Image
                        src={"/images/Sadraque-logo.jpg"}
                        alt="Sadraque Auto center"
                        width={1000}
                        height={1000}
                        style={{width: "200px", height: "90px"}}
                    />
                </li>
                <li>Home</li>
                <li>Loja</li>
                <li>Serviços</li>
                <li>Sobre mim</li>
            </ul>
        </div>
    )
}