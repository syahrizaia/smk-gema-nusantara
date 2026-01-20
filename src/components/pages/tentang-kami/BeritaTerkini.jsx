import { useEffect } from "react"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const BeritaTerkini = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    
    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Berita Terkini</h1>
        <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center h-screen"
        >
            Tidak ada isi
        </div>
        <Footer />
    </>
}

export default BeritaTerkini