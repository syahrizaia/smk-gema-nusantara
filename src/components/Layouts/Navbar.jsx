import { useState } from "react";
import { Link } from "react-router-dom";
import LinkCustom from "../Elements/LinkCustom"
import { dataNavbar } from "../../service/data";

const NavItem = ({ item }) => {
  const hasSub = item.subLinks && item.subLinks.length > 0

  return (
    <div className="relative group/item w-full">
      <Link
        to={item.to}
        className="flex justify-between items-center px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap w-full"
      >
        <span>{item.label}</span>
        {item.withArrow && <span className="ml-4">&rarr;</span>}
      </Link>

      {/* Sub-menu Level Selanjutnya */}
      {hasSub && (
        <div className="md:absolute md:left-full md:top-0 hidden group-hover/item:block min-w-[220px] ml-[1px] w-full md:w-auto">
          <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2 ml-4 md:ml-0">
            {item.subLinks.map((sub, index) => (
              <NavItem key={index} item={sub} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <header className="fixed w-full z-50">
        <nav className="flex justify-between items-center px-10 py-3 bg-white shadow-xl">
            <Link to="/">
                <img alt="SMK Gema Nusantara" loading="lazy"
                    src={"https://smkgemanusantara.sch.id/wp-content/uploads/2023/09/cropped-Logo-SMK-Circle-1.png"}
                    width={50}
                    height={50}
                />
            </Link>

            {/* Hamburger Button */}
            <button className="md:hidden block text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            {/* Nav Links */}
            <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-xl md:shadow-none items-start md:items-center gap-2 md:gap-10 p-5 md:p-0 transition-all duration-300`}>
                <LinkCustom to={"/"}>Home</LinkCustom>
                <div className="relative group z-50 w-full md:w-auto">
                    <LinkCustom to={"/tentang-kami"}>Tentang Kami &darr;</LinkCustom>
                    <div className="md:absolute left-0 top-full hidden group-hover:block min-w-[200px] pt-2 w-full md:w-auto">
                        <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                            {dataNavbar.tentangKami.map((item, index) => (
                            <NavItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative group z-50 w-full md:w-auto">
                    <LinkCustom to={"/pembelajaran"}>Pembelajaran &darr;</LinkCustom>
                    <div className="md:absolute left-0 top-full hidden group-hover:block min-w-[200px] pt-2 w-full md:w-auto">
                        <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                            {dataNavbar.pembelajaran.map((item, index) => (
                            <NavItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative group z-50 w-full md:w-auto">
                    <LinkCustom to={"/layanan"}>Layanan &darr;</LinkCustom>
                    <div className="md:absolute left-0 top-full hidden group-hover:block min-w-[200px] pt-2 w-full md:w-auto">
                        <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                            {dataNavbar.layanan.map((item, index) => (
                            <NavItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <LinkCustom
                    to={"/prestasi"}
                    subLinks={[
                        { to: "/prestasi/prestasi-sekolah", label: "Prestasi Sekolah" },
                        { to: "/prestasi/prestasi-guru", label: "Prestasi Guru" },
                        { to: "/prestasi/prestasi-siswa", label: "Prestasi Siswa" },
                        { to: "/prestasi/bintang-belajar", label: "Bintang Belajar" }
                    ]}
                >
                    Prestasi &darr;
                </LinkCustom>
                <LinkCustom
                    to={"/lulusan"}
                    subLinks={[
                        { to: "/lulusan/keterserapan-lulusan", label: "Keterserapan Lulusan" },
                        { to: "/lulusan/industri-mitra", label: "Industri Mitra" }
                    ]}
                >
                    Lulusan &darr;
                </LinkCustom>
                <LinkCustom to={"/hubungi-kami"}>Hubungi Kami</LinkCustom>
            </div>
        </nav>
    </header>
}

export default Navbar;
