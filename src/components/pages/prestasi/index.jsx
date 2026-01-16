import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import { dataPrestasi } from "../../../service/data"

const Prestasi = () => {
    return <>
        <Navbar />
        <h1 className="text-3xl text-center font-bold py-5 text-white bg-blue-500">Prestasi SMK GEMA NUSANTARA</h1>
        <div className="flex flex-col items-center gap-3 py-5">
            <h1 className="text-xl">PRESTASI</h1>
            <h2 className="text-4xl font-bold pb-5 text-blue-500">SEKOLAH</h2>
            <table className="border border-black shadow-lg">
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