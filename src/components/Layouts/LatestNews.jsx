import { Link } from "react-router-dom"
import CardCustom from "../Elements/CardCustom"
import TotalNews from "./TotalNews"
import { dataApp } from "../../service/data"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css';

const LatestNews = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div className="flex flex-col justify-center gap-2 bg-white">
        <div
            data-aos="fade-up"
            className="flex flex-col justify-center gap-2 px-20 py-5"
        >
            <h1>Berita Terkini -----</h1>
            <h2 className="text-3xl">SMK GENUS</h2>
        </div>
        <TotalNews />
        <div
            data-aos="fade-up"
            className="grid grid-cols-4 items-center gap-5 px-20 py-10"
        >
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
            {dataApp.card.map((item, id) => {
                return <CardCustom key={id} title={item.title} description={item.description} />
            })}
        </div>
    </div>
}

export default LatestNews