import { Link } from "react-router-dom"

const quickLink = [
    {
        id: 1,
        title: "Tautan Penting",
        link: ["Galeri Kegiatan", "Informasi Publik", "Manajemen Sekolah", "SMM ISO/Standar Mutu"]
    },
    {
        id: 2,
        title: "Zona Integritas",
        link: ["Respon Pelanggan", "Pengaduan Masyarakat", "Pelaporan Gratifikasi", "Transparansi & Akuntabilitas"]
    },
    {
        id: 3,
        title: "Layanan",
        link: ["Legalisir", "Surat Rekomendasi", "Informasi Publik", "Survei Kepuasan"]
    },
    {
        id: 4,
        title: "Sertifikat & Standar",
        link: ["Sertifikasi Pendidikan Vokasi", "Akreditasi \"A\" BAN-SM"]
    }
]

const Footer = () => {
    return <footer>
        <div className="bg-blue-200 flex justify-around items-start px-20 py-10">
            <div className="grid grid-rows-3 gap-2 w-4/12">
                <h1 className="text-xl font-bold">SMK Gema Nusantara</h1>
                <p>Jl. Raya Cibarusah, Warung Bambu, Sindangmulya, Kec. Cibarusah, Kab. Bekasi, Prov. Jawa Barat</p>
                <p>Phone: (021)22154328 <br /> Email: mail@smkgemanusantara.sch.id</p>
            </div>
            {quickLink.map((item) => (
                <div key={item.id} className="flex flex-col items-start gap-5">
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <div className="flex flex-col gap-1">
                        {item.link.map((link, id) => (
                            <Link key={id} to="#" className="text-black transition delay-150 duration-300 hover:text-blue-500">{link}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <p className="bg-blue-500 text-white text-center py-5">
            Copyright &copy; 2026 SMK Gema Nusantara. All rights reserved.
        </p>
    </footer>
}

export default Footer