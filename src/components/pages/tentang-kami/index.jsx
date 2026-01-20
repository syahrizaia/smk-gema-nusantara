import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import TotalNews from "../../Layouts/TotalNews"
import { dataProfil } from "../../../service/data"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css';

const TentangKami = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Profil Singkat SMK Gema Nusantara</h1>
        {dataProfil.dataContent.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 px-20 py-10">
                <h1
                    data-aos="fade-down"
                    className="text-3xl font-bold mb-5"
                >
                    {item.title}
                </h1>
                <div className="flex gap-5">
                    <p data-aos="fade-right">{item.content}</p>
                    {item.media && (
                        <div>
                            <iframe
                                data-aos="fade-left"
                                className="rounded"
                                width="560"
                                height="315"
                                src={item.media}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen 
                            />
                        </div>
                    )}
                </div>
            </div>
        ))}
        <TotalNews />
        <Footer />
    </>
}

export default TentangKami