import { Link } from "react-router-dom"

const BannerTitle = ({ children }) => {
    return <h1 className="text-5xl font-bold">{children}</h1>
}

const Banner = () => {
    return <div className="flex flex-col justify-center gap-5 px-20 py-10 h-screen">
        {/* <Image src={logo} /> */}
        <BannerTitle>SMKS PUSAT KEUNGGULAN</BannerTitle>
        <BannerTitle>GEMA NUSANTARA</BannerTitle>
        <h2 className="text-2xl">Mencetak lulusan SMK yang unggul, terampil, berkarakter, mandiri, dan siap kerja.</h2>
        <p className="text-2xl">#yourfuturebeginshere</p>
        <Link
            className="border-0 rounded-4xl px-6 py-3 bg-blue-200 text-black transition delay-150 duration-300 hover:bg-blue-500 hover:text-white w-fit"
            to="https://www.youtube.com/embed/DgtJ2uv5p_E"
        >
            Tonton Profil SMK GEMA NUSANTARA
        </Link>
    </div>
}

export default Banner