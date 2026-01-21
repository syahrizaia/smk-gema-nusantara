import { useEffect } from "react"
import { dataStatistikSDM } from "../../../../service/data"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const StatistikSDM = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 px-20 py-5">
            <h1 className="text-3xl font-bold">Statistik SDM SMK Gema Nusantara</h1>
            <p>SMK Gema Nusantara didukung oleh sumber daya manusia (SDM) yang kompeten di bidangnya. SDM terdiri dari pendidik dan tenaga kependidikan. Pendidik bertugas melaksanakan fungsi mengajar, dan tenaga kependidikan melaksanakan tugas administrasi dan pelayanan teknis untuk menunjang proses pembelajaran.</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 px-20 py-10">
            {dataStatistikSDM.map((item) => {
                return <div key={item.id} data-aos="zoom-in" className="overflow-hidden">
                    <img
                        className="object-cover transition-transform delay-150 duration-300 ease-in-out hover:scale-125"
                        src={item.image}
                        alt=""
                    />
                </div>
            })}
        </div>
        <Footer />
    </div>
}

export default StatistikSDM