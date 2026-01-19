import LinkCustom from "../Elements/LinkCustom"

const Navbar = () => {
    return <nav className="flex justify-center items-center gap-16 py-3 position-fixed w-full bg-white shadow-xl z-50">
        <img
            src={"https://smkgemanusantara.sch.id/wp-content/uploads/2023/09/cropped-Logo-SMK-Circle-1.png"}
            width={50}
            height={50}
        />
        <LinkCustom to={"/"}>Home</LinkCustom>
        <LinkCustom
            to={"/profil"}
            subLinks={[
                // { to: "/profil/berita-terkini", label: "Berita Terkini" },
                // { to: "/profil", label: "Profil" },
                // { to: "/profil/sejarah", label: "Sejarah" },
                // { to: "/profil/visi-misi", label: "Visi & Misi" },
                // { to: "/profil/sasaran-mutu", label: "Sasaran Mutu" },
                // { to: "/profil/struktur", label: "Struktur", withArrow: true }
                { to: "/not-found", label: "Berita Terkini" },
                { to: "/not-found", label: "Profil" },
                { to: "/not-found", label: "Sejarah" },
                { to: "/not-found", label: "Visi & Misi" },
                { to: "/not-found", label: "Sasaran Mutu" },
                { to: "/not-found", label: "Struktur", withArrow: true }
            ]}
        >
            Tentang Kami &darr;
        </LinkCustom>
        <LinkCustom
            to={"/pembelajaran"}
            subLinks={[
                // { to: "/pembelajaran/kurikulum", label: "Kurikulum", withArrow: true },
                // { to: "/pembelajaran/fasilitas", label: "Fasilitas", withArrow: true },
                // { to: "/pembelajaran/sumber-daya-manusia", label: "Sumber Daya Manusia", withArrow: true },
                // { to: "/pembelajaran/kegiatan", label: "Kegiatan", withArrow: true }
                { to: "/not-found", label: "Kurikulum", withArrow: true },
                { to: "/not-found", label: "Fasilitas", withArrow: true },
                { to: "/not-found", label: "Sumber Daya Manusia", withArrow: true },
                { to: "/not-found", label: "Kegiatan", withArrow: true }
            ]}
        >
            Pembelajaran &darr;
        </LinkCustom>
        <LinkCustom
            to={"/layanan"}
            subLinks={[
                // { to: "/layanan/legalisir-di-rumah", label: "Legalisir di Rumah" },
                // { to: "/layanan/surat-rekomendasi", label: "Surat Rekomendasi" },
                // { to: "/layanan/informasi-publik", label: "Informasi Publik", withArrow: true }
                { to: "/not-found", label: "Legalisir di Rumah" },
                { to: "/not-found", label: "Surat Rekomendasi" },
                { to: "/not-found", label: "Informasi Publik", withArrow: true }
            ]}
        >
            Layanan &darr;
        </LinkCustom>
        <LinkCustom
            to={"/prestasi"}
            subLinks={[
                // { to: "/prestasi/prestasi-sekolah", label: "Prestasi Sekolah" },
                // { to: "/prestasi/prestasi-guru", label: "Prestasi Guru" },
                // { to: "/prestasi/prestasi-siswa", label: "Prestasi Siswa" },
                // { to: "/prestasi/bintang-belajar", label: "Bintang Belajar" }
                { to: "/not-found", label: "Prestasi Sekolah" },
                { to: "/not-found", label: "Prestasi Guru" },
                { to: "/not-found", label: "Prestasi Siswa" },
                { to: "/not-found", label: "Bintang Belajar" }
            ]}
        >
            Prestasi &darr;
        </LinkCustom>
        <LinkCustom
            to={"/lulusan"}
            subLinks={[
                // { to: "/lulusan/keterserapan-lulusan", label: "Keterserapan Lulusan" },
                // { to: "/lulusan/industri-mitra", label: "Industri Mitra" }
                { to: "/not-found", label: "Keterserapan Lulusan" },
                { to: "/not-found", label: "Industri Mitra" }
            ]}
        >
            Lulusan &darr;
        </LinkCustom>
        <LinkCustom to={"/hubungi-kami"}>Hubungi Kami</LinkCustom>
    </nav>
}

export default Navbar