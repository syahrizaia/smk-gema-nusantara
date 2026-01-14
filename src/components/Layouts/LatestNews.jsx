import { Link } from "react-router-dom"
import CardCustom from "../Elements/CardCustom"
import TotalNews from "./TotalNews"

const data = [
    {
        id: 1,
        title: "Kurikulum Terintegrasi",
        description: "Mengintegrasikan kurikulum Kemendikbud, SKKNI, serta standar industri (Mitsubishi, Musashi, dan mitra lainnya), yang divalidasi oleh dunia usaha dan dunia industri sehingga pembelajaran lebih relevan dengan kebutuhan nyata."
    },
    {
        id: 2,
        title: "Laboratorium Lengkap",
        description: "Memiliki laboratorium modern dan ruang praktik Teaching Factory yang menunjang pembelajaran berbasis produksi/layanan, sehingga siswa terbiasa dengan suasana kerja industri sejak di bangku sekolah."
    },
    {
        id: 3,
        title: "Keterserapan Lulusan Tinggi",
        description: "Lulusan dibekali kompetensi unggul, kemampuan bahasa, serta budaya kerja profesional, sehingga cepat terserap di perusahaan mitra maupun siap melanjutkan ke perguruan tinggi."
    }
]

const LatestNews = () => {
    return <div className="flex flex-col justify-center gap-2 bg-white">
        <div className="flex flex-col justify-center gap-2 px-20 py-5">
            <h1>Berita Terkini -----</h1>
            <h2 className="text-3xl">SMK GENUS</h2>
        </div>
        <TotalNews />
        <div className="grid grid-cols-4 items-center gap-5 px-20 py-10">
            <div className="flex flex-col gap-5 border rounded-lg shadow-md p-5 text-center bg-blue-500 text-white">
                <h1 className="text-2xl font-bold">Kenapa Harus SMK GEMA NUSANTARA?</h1>
                <p>SMK Gema Nusantara merupakan Sekolah Menengah Kejuruan swasta yang berdiri sejak tahun 2015 di bawah naungan Yayasan Al-Fath Nusantara. Dengan kurikulum terintegrasi, fasilitas praktik lengkap, dan kemitraan strategis dengan dunia usaha dan industri.</p>
                <Link
                    className="border-0 rounded-4xl px-5 py-2 bg-blue-900 transition delay-150 duration-300 hover:bg-white hover:text-blue-900 w-fit"
                    to="/tentang-kami"
                >
                    Selengkapnya
                </Link>
            </div>
            {data.map((item, id) => {
                return <CardCustom key={id} title={item.title} description={item.description} />
            })}
        </div>
    </div>
}

export default LatestNews