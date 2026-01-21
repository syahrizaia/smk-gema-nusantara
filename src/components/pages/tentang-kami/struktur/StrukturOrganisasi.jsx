import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const StrukturOrganisasi = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Struktur Organisasi SMK Gema Nusantara</h1>
        <div
            data-aos="fade-up"
            className="flex justify-center items-center px-20 py-20"
        >
            <img
                src="https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-21.53.13.jpeg"
                alt=""
            />
        </div>
        <Footer />
    </div>
}

export default StrukturOrganisasi