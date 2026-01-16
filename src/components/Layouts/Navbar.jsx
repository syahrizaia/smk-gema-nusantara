import { Link } from "react-router-dom"
import LinkCustom from "../Elements/LinkCustom"

const Navbar = () => {
    return <nav className="flex justify-center items-center gap-16 py-3 position-fixed w-full bg-white shadow-xl z-10">
        <img
            src={"https://smkgemanusantara.sch.id/wp-content/uploads/2023/09/cropped-Logo-SMK-Circle-1.png"}
            width={50}
            height={50}
        />
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