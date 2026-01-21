import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const StrukturKurikulum = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-center text-white bg-blue-500 py-5">Struktur Kurikulum di SMK GEMA NUSANTARA</h1>
        <div className="flex flex-col gap-10 px-20 py-10">
            <h1 data-aos="fade-down" className="text-center text-2xl text-blue-500">----- KURIKULUM -----</h1>
            <div data-aos="fade-right">
                <h1>KELOMPOK -----</h1>
                <h2 className="text-3xl font-bold">Mata Pelajaran Umum</h2>
            </div>
            <div data-aos="fade-right">
                <h1>KELOMPOK -----</h1>
                <h2 className="text-3xl font-bold">Mata Pelajaran Kejuruan</h2>
            </div>
            <hr data-aos="fade-right" className="text-blue-500" />
            <div data-aos="fade-right">
                <h1>KELOMPOK -----</h1>
                <h2 className="text-3xl font-bold">Mata Pelajaran Umum</h2>
            </div>
            <div data-aos="fade-right">
                <h1>KELOMPOK -----</h1>
                <h2 className="text-3xl font-bold">Mata Pelajaran Kejuruan</h2>
            </div>
        </div>
        <Footer />
    </div>
}

export default StrukturKurikulum