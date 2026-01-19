import { useEffect } from "react"
import { dataLulusan } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const Lulusan = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <div className="bg-blue-500 text-white flex flex-col gap-5 text-center px-20 py-5">
            <h1 className="text-3xl font-bold">Keterserapan Lulusan SMK Gema Nusantara</h1>
            <p>Lulusan yang dihasilkan oleh SMK Gema Nusntara memiliki tingkat keterserapan yang tinggi dengan masa tunggu rata-rata kurang dari 6 bulan dan tersebar di berbagai perusahaan baik itu dalam negeri ataupun luar negeri.</p>
        </div>
        {dataLulusan.dataContent.map((item) => (
            <div className="flex flex-col px-40 py-5" key={item.id}>
                <img data-aos="zoom-in" src={item.image1} alt={item.title} />
                <h1 data-aos="fade-right" className="text-3xl">{item.title}</h1>
                <img data-aos="zoom-in" src={item.image2} alt={item.title} />
            </div>
        ))}
        <Footer />
    </>
}

export default Lulusan