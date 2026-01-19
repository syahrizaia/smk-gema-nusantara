import { useEffect } from "react"
import { dataPembelajaran } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const Pembelajaran = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    
    return <>
        <Navbar />
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold py-5 w-full bg-blue-500 text-white">
                Kurikulum di SMK - SMAK Gema Nusantara
            </h1>
            {dataPembelajaran?.dataImage?.map((item) => (
                <img data-aos="zoom-in" src={item.src} key={item.id} />
            ))}
        </div>
        <Footer />
    </>
}

export default Pembelajaran