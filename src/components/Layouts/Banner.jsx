import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { Link } from "react-router-dom"

const BannerTitle = ({ children }) => {
    return <h1 className="text-5xl font-bold">{children}</h1>
}

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div className="flex flex-col justify-center gap-5 h-screen">
        <img
            className="w-full h-full mx-auto bg-cover bg-center relative"
            src={"../WhatsApp Image 2026-01-16 at 8.37.43 AM.jpeg"}
        />
        <div className="absolute top-19 -bottom-19 inset-0 bg-black opacity-50"></div>
        <div
            data-aos="zoom-in"
            className="absolute flex flex-col gap-5 px-40 text-white"
        >
            <div className="flex gap-5">
                <img
                    src="https://smkgemanusantara.sch.id/wp-content/uploads/elementor/thumbs/SMK-Bisa-Hebat-150x150-1-q6xu6slyj94b4euyhw7nzya0ubk56lvcw5su30xrd6.png"
                    alt=""
                    width={60}
                    height={60}
                />
                <img
                    src="https://smkgemanusantara.sch.id/wp-content/uploads/elementor/thumbs/Logo-SMK-Circle-1-qcs0l2z5y2w064roj3flq7mi26i1nifl2wt3il54ui.png"
                    alt=""
                    width={60}
                    height={60}
                />
            </div>
            <BannerTitle>SMKS PUSAT KEUNGGULAN</BannerTitle>
            <BannerTitle>GEMA NUSANTARA</BannerTitle>
            <h2 className="text-2xl">Mencetak lulusan SMK yang unggul, terampil, berkarakter, mandiri, dan siap kerja.</h2>
            <p className="text-2xl">#yourfuturebeginshere</p>
            <Link
                className="border rounded-4xl px-6 py-3 bg-transparent transition delay-150 duration-300 hover:bg-blue-500 w-fit"
                to="https://www.youtube.com/embed/DgtJ2uv5p_E"
            >
                Tonton Profil SMK GEMA NUSANTARA
            </Link>
        </div>
    </div>
}

export default Banner