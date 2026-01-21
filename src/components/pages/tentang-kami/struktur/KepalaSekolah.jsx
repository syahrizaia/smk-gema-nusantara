import { useEffect } from "react"
import { dataHeadmaster } from "../../../../service/data"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const KepalaSekolah = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const headmasterById = dataHeadmaster.find((item) => item.id === 2)

    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Profil Kepala SMK Gema Nusantara</h1>
        <div className="flex flex-col md:flex-row gap-10 px-20 py-10">
                {/* Foto & Media Sosial */}
                <div
                    data-aos="fade-right"
                    className="flex flex-col items-center gap-5 w-full md:w-1/3"
                >
                    <img src={headmasterById.photo} alt={headmasterById.name} className="rounded-xl" />
                    <h1 className="text-center text-3xl font-bold">{headmasterById.name}</h1>
                    <p className="text-blue-600 font-semibold mb-4">{headmasterById.position}</p>
                    <div className="flex items-center justify-center gap-5 mt-4">
                        {headmasterById.socialMedia.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 transition duration-300 hover:bg-blue-500 hover:text-white shadow-sm"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Konten Detail */}
                <div
                    data-aos="fade-left"
                    className="w-full md:w-2/3"
                >
                    <p className="italic text-3xl text-gray-500 mb-6">{headmasterById.motto}</p>

                    {/* Mapping Content (Latar Belakang, Visi, dll) */}
                    {headmasterById.content.map((section, idx) => (
                        <div key={idx} className="mb-6">
                            <h1 className="font-bold text-lg border-b-2 border-blue-500 inline-block mb-2">
                                {section.title}
                            </h1>
                            
                            {Array.isArray(section.description) ? (
                                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                                    {section.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700">{section.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        <Footer />
    </>
}

export default KepalaSekolah