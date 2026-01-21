import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const EkstrakurikulerSiswa = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 px-20 py-5">
            <h1 className="text-3xl font-bold">Ekstrakurikuler Siswa SMK Gema Nusantara</h1>
            <p>Selain kegiatan intrakurikuler dan kokurikuler, SMK Gema Nusantara juga memberikan wadah kepada siswa untuk menyalurkan bakat dan minat dalam kegiatan ekstrakurikuler.</p>
        </div>
        <div data-aos="fade-right" className="px-20 pt-10 pb-5">
            <h1>EKSKUL -----</h1>
            <h2 className="text-3xl font-bold">Bidang Pendidikan</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-5">
            <h1>EKSKUL -----</h1>
            <h2 className="text-3xl font-bold">Bidang Olahraga</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-5">
            <h1>EKSKUL -----</h1>
            <h2 className="text-3xl font-bold">Bidang Kesenian</h2>
        </div>
        <div data-aos="fade-right" className="px-20 py-10 pt-5">
            <h1>EKSKUL -----</h1>
            <h2 className="text-3xl font-bold">Bidang Kepanduan</h2>
        </div>
        <Footer />
    </div>
}

export default EkstrakurikulerSiswa