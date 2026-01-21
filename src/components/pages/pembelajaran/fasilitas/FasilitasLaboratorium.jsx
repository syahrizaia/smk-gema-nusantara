import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const FasilitasLaboratorium = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 py-5">
            <h1 className="text-3xl font-bold">Laboratorium Pembelajaran SMK Gema Nusantara</h1>
            <p>Laboratorium pembelajaran yang dimiliki oleh SMK Gema Nusantara menunjang ketercapaian kompetensi siswa khususnya dalam bidang kimia analisis.</p>
        </div>
        <div data-aos="fade-right" className="px-20 pt-10">
            <h1>LABORATORIUM -----</h1>
            <h2 className="text-3xl font-bold">Kelas X</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-10">
            <h1>LABORATORIUM -----</h1>
            <h2 className="text-3xl font-bold">Kelas XI</h2>
        </div>
        <div data-aos="fade-right" className="px-20 pb-10">
            <h1>LABORATORIUM -----</h1>
            <h2 className="text-3xl font-bold">Kelas XII</h2>
        </div>
        <Footer />
    </div>
}

export default FasilitasLaboratorium