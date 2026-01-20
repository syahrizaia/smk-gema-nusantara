import { useEffect } from "react"
import { dataSasaranMutu } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const SasaranMutu = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <h1 className="text-3xl font-bold text-white text-center bg-blue-500 py-5">Sasaran Mutu SMKS - SMK GENUS</h1>
        <div data-aos="fade-up" className="flex flex-col text-xl px-20 py-10">
            <h1 className="bg-blue-500 text-white px-5 py-3 border border-black rounded">Dalam rangka menjamin mutu pendidikan dan mencapai visi serta misi sekolah, SMK Gema Nusantara menetapkan sasaran mutu sebagai berikut:</h1>
            {dataSasaranMutu.map((item) => {
                return <ol
                    key={item.id}
                    className="flex border-x border-b rounded py-2"
                >
                    <li className="px-10">{item.no}</li>
                    <li>{item.content}</li>
                </ol>
            })}
        </div>
        <Footer />
    </>
}

export default SasaranMutu