import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const FasilitasPenunjang = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    
    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 py-5">
            <h1 className="text-3xl font-bold">Fasilitas Penunjang SMK Gema Nusantara</h1>
            <p>Selain laboratorium pembelajaran, SMK Gema Nusantara memiliki fasilitas - fasilitas lain yang menunjang keberhasilan pembelajaran.</p>
        </div>
        <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center h-screen"
        >
            Tidak ada isi
        </div>
        <Footer />
    </div>
}

export default FasilitasPenunjang