import { Link } from "react-router-dom"
import LinkCustom from "../Elements/LinkCustom"

const Navbar = () => {
    return <nav className="flex justify-center items-center gap-10 p-5 position-fixed w-full bg-white shadow-md z-10">
        {/* <Image src={logo} /> */}
        <LinkCustom to={"/"}>Home</LinkCustom>
        <LinkCustom to={"/profil"}>Tentang Kami</LinkCustom>
        <LinkCustom to={"/pembelajaran"}>Pembelajaran</LinkCustom>
        <LinkCustom to={"/layanan"}>Layanan</LinkCustom>
        <LinkCustom to={"/prestasi"}>Prestasi</LinkCustom>
        <LinkCustom to={"/lulusan"}>Lulusan</LinkCustom>
        <LinkCustom to={"/hubungi-kami"}>Hubungi Kami</LinkCustom>
    </nav>
}

export default Navbar