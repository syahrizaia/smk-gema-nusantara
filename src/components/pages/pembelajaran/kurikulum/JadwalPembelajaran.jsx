import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const JadwalPembelajaran = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-center text-white bg-blue-500 py-5">Jadwal Pembelajaran SMK Gema Nusantara</h1>
        <div data-aos="fade-right" className="px-20 pt-10">
            <h1>JADWAL PELAJARAN -----</h1>
            <h2 className="text-3xl font-bold">Kelas X</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-10">
            <h1>JADWAL PELAJARAN -----</h1>
            <h2 className="text-3xl font-bold">Kelas XI</h2>
        </div>
        <div data-aos="fade-right" className="px-20 pb-10">
            <h1>JADWAL PELAJARAN -----</h1>
            <h2 className="text-3xl font-bold">Kelas XII</h2>
        </div>
        <Footer />
    </>
}

export default JadwalPembelajaran