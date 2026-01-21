import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const ProfilSDM = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 px-20 py-5">
            <h1 className="text-3xl font-bold">Statistik SDM SMK Gema Nusantara</h1>
            <p>SMK Gema Nusantara didukung oleh sumber daya manusia (SDM) yang kompeten di bidangnya. SDM terdiri dari pendidik dan tenaga kependidikan. Pendidik bertugas melaksanakan fungsi mengajar, dan tenaga kependidikan melaksanakan tugas administrasi dan pelayanan teknis untuk menunjang proses pembelajaran.</p>
        </div>
        <div data-aos="fade-right" className="px-20 pt-10">
            <h1>SDM -----</h1>
            <h2 className="text-3xl font-bold">Pendidik</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-10">
            <h1>SDM -----</h1>
            <h2 className="text-3xl font-bold">Tenaga Kependidikan</h2>
        </div>
        <Footer />
    </div>
}

export default ProfilSDM