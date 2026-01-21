import { useEffect } from "react"
import { dataKegiatanTahunan } from "../../../../service/data"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const KegiatanTahunan = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Kegiatan Tahunan SMK Gema Nusantara</h1>
        <div className="grid grid-cols-3 gap-5 px-20 py-10">
            {dataKegiatanTahunan.map((item) => {
                return <img
                    data-aos="zoom-in"
                    key={item.id}
                    src={item.image}
                    alt=""
                />
            })}
        </div>
        <Footer />
    </>
}

export default KegiatanTahunan