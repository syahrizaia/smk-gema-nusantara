import { useEffect } from "react"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import ThePrincipals from "../../Layouts/ThePrincipals"
import TotalNews from "../../Layouts/TotalNews"
import Aos from "aos"
import 'aos/dist/aos.css';

const Sejarah = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Sejarah SMK - SMKS Gema Nusantara</h1>
        <div className="grid grid-cols-2 gap-10 px-20 py-10">
            <div data-aos="fade-right">
                <img
                    className="transition-transform delay-150 duration-300 hover:scale-110"
                    src="https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/IMG_20220810_161211-scaled-1-2048x942.jpg"
                    alt="Gambar"
                />
            </div>
            <p data-aos="fade-left">
                SMK Gema Nusantara berdiri pada tahun 2015 di bawah naungan Yayasan Al-Fath Nusantara. Kehadiran sekolah ini dilatarbelakangi oleh kebutuhan masyarakat Bekasi dan sekitarnya akan pendidikan vokasi yang relevan dengan perkembangan industri, khususnya di bidang otomotif dan manajemen perkantoran.
                <br /><br />
                Sejak awal berdirinya, SMK Gema Nusantara memegang visi “Your Future Begins Here” dengan misi mencetak lulusan yang unggul, berkarakter, dan siap bersaing di tingkat nasional maupun internasional.
                <br /><br />
                Dengan dukungan fasilitas yang terus berkembang dan kemitraan bersama berbagai perusahaan, termasuk Mitsubishi Motors Krama Yudha Indonesia (MMKI), Musashi Auto Parts, serta mitra strategis lainnya, SMK Gema Nusantara berhasil menjadi salah satu sekolah rujukan vokasi di Kabupaten Bekasi.
                <br /><br />
                Hingga kini, sekolah ini telah meluluskan ratusan siswa yang tersebar di dunia kerja maupun melanjutkan pendidikan ke perguruan tinggi, sekaligus menjadi bagian dari upaya mewujudkan Generasi Emas 2045 melalui pendidikan vokasi berkualitas.
            </p>
        </div>
        <TotalNews />
        <ThePrincipals />
        <Footer />
    </div>
}

export default Sejarah