import { Link } from "react-router-dom";
import LinkCustom from "../Elements/LinkCustom"
import { dataNavbar } from "../../service/data";

const NavItem = ({ item }) => {
  const hasSub = item.subLinks && item.subLinks.length > 0

  return (
    <div className="relative group/item">
      <Link
        to={item.to}
        className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
      >
        <span>{item.label}</span>
        {item.withArrow && <span className="ml-4">&rarr;</span>}
      </Link>

      {/* Sub-menu Level Selanjutnya */}
      {hasSub && (
        <div className="absolute left-full top-0 hidden group-hover/item:block min-w-[220px] ml-[1px]">
          <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
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
    return <nav className="flex justify-center items-center gap-10 py-3 position-fixed w-full bg-white shadow-xl z-50">
        <img
            src={"https://smkgemanusantara.sch.id/wp-content/uploads/2023/09/cropped-Logo-SMK-Circle-1.png"}
            width={50}
            height={50}
        />
        <LinkCustom to={"/"}>Home</LinkCustom>
        <LinkCustom
            to={"/tentang-kami"}
            subLinks={[
                { to: "/tentang-kami/berita-terkini", label: "Berita Terkini" },
                { to: "/tentang-kami", label: "Profil" },
                { to: "/tentang-kami/sejarah", label: "Sejarah" },
                { to: "/tentang-kami/visi-misi", label: "Visi & Misi" },
                { to: "/tentang-kami/sasaran-mutu", label: "Sasaran Mutu" },
                {
                    to: "#",
                    label: "Struktur",
                    withArrow: true,
                    subLinks: [
                        { to: "/tentang-kami/struktur/kepala-sekolah", label: "Kepala Sekolah" },
                        { to: "/tentang-kami/struktur/struktur-organisasi", label: "Struktur Organisasi" }
                    ]
                }
            ]}
        >
            Tentang Kami &darr;
        </LinkCustom>
        <LinkCustom
            to={"/pembelajaran"}
            subLinks={[
                { to: "#", label: "Kurikulum", withArrow: true },
                { to: "/pembelajaran/fasilitas", label: "Fasilitas", withArrow: true },
                { to: "#", label: "Sumber Daya Manusia", withArrow: true },
                { to: "#", label: "Kegiatan", withArrow: true }
            ]}
        >
            Pembelajaran &darr;
        </LinkCustom>
        {/* <Link
            to={"/layanan"}
            subLinks={[
                { to: "/layanan/legalisir-di-rumah", label: "Legalisir di Rumah" },
                { to: "/layanan/surat-rekomendasi", label: "Surat Rekomendasi" },
                { to: "/layanan/informasi-publik", label: "Informasi Publik", withArrow: true }
            ]}
        >
            Layanan &darr;
        </Link> */}
        <Link
            to={"layanan"}
            className="relative group z-50"
        >
            Layanan &darr;

            {/* Dropdown Level 1 (Muncul ke Bawah) */}
            <div className="absolute left-0 top-full hidden group-hover:block min-w-[200px] pt-2">
                <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                    {dataNavbar.layanan.map((item, index) => (
                    <NavItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </Link>
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
    </nav>
}

export default Navbar