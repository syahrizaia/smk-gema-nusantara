import { useEffect } from "react"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const Layanan = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <div className="flex flex-col gap-3 text-center text-white bg-blue-500 py-5">
            <h1 className="text-3xl font-bold">Kurikulum di SMK Gema Nusantara</h1>
            <p>Kurikulum yang diterapkan di SMK Gema Nusantara mengintegrasikan antara kurikulum 2013, Vapro Internasional, dan SKKNI.</p>
        </div>
        <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center h-screen"
        >
            Tidak ada isi
        </div>
        <Footer />
    </>
}

export default Layanan