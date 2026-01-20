import { useEffect } from "react"
import { dataVisiMisi } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const VisiMisi = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Visi dan Misi SMK - SMKS Gema Nusantara 2020 - 2024</h1>
        <img
            data-aos="zoom-in"
            className="w-full h-96 object-cover object-top-left"
            src="../WhatsApp Image 2026-01-16 at 8.37.43 AM.jpeg"
            alt="Gambar"
        />
        <div data-aos="fade-up" className="grid grid-cols-2 gap-10 px-20 py-10">
            {dataVisiMisi.map((item) => {
                return <div
                    key={item.id}
                    className="flex flex-col gap-5"
                >
                    <h1 className="text-3xl font-bold text-blue-500">{item.title}</h1>
                    {Array.isArray(item.description) ? (
                        /* Jika array, tampilkan sebagai list (ul) */
                        <ul className="list-disc ml-5 space-y-2">
                            {item.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        /* Jika string, tampilkan sebagai paragraf biasa */
                        <p className="leading-relaxed">
                            {item.description}
                        </p>
                    )}
                </div>
            })}
        </div>
        <Footer />
    </div>
}

export default VisiMisi