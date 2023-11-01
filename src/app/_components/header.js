import Link from "next/link"
// import Logo from "../../../public/img/logo.svg"
import Navigate from "./navigate"
import Image from "next/image"

const Header = () => {

    return (
        <header className="header">
        <div className="contenedor barra">
            <Link href='/'> 
                <Image src='/img/logo.svg' width={20} height={20} alt="Logo Guitarla" className="logo" />
            </Link>
            <Navigate/>
            </div>
        </header>
    )
}

export default Header
