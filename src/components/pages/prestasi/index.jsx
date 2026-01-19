import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import { dataPrestasi } from "../../../service/data"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css';

const Prestasi = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <Navbar />
        <h1 className="text-3xl text-center font-bold py-5 text-white bg-blue-500">Prestasi SMK GEMA NUSANTARA</h1>
        <div className="flex flex-col items-center gap-3 py-5">
            <h1 data-aos="fade-down" className="text-xl">PRESTASI</h1>
            <h2 data-aos="fade-down" className="text-4xl font-bold pb-5 text-blue-500">SEKOLAH</h2>
            <table
                data-aos="fade-up"
                className="border border-black shadow-lg"
            >
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="border px-10 py-4 border-x-transparent">No</th>
                        <th className="border px-20 py-3 border-x-transparent">Prestasi yang Diterima</th>
                        <th className="border px-10 py-3 border-x-transparent">Tahun</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPrestasi.tableBody.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-10 py-3 border-x-transparent">{item.no}</td>
                            <td className="border px-20 py-3 border-x-transparent">{item.achievementsAchieved}</td>
                            <td className="border px-10 py-3 border-x-transparent">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
    </>
}

export default Prestasi