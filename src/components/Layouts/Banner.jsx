import { Link } from "react-router-dom"
import LinkCustom from "../Elements/LinkCustom"

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
        <LinkCustom to="https://www.youtube.com/embed/DgtJ2uv5p_E">Tonton Profil SMK GEMA NUSANTARA</LinkCustom>
    </div>
}

export default Banner