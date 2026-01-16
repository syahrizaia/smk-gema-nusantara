import { dataLulusan } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"

const Lulusan = () => {
    return <div>
        <Navbar />
        <div className="bg-blue-500 text-white flex flex-col gap-5 text-center px-20 py-5">
            <h1 className="text-3xl font-bold">Keterserapan Lulusan SMK Gema Nusantara</h1>
            <p>Lulusan yang dihasilkan oleh SMK Gema Nusntara memiliki tingkat keterserapan yang tinggi dengan masa tunggu rata-rata kurang dari 6 bulan dan tersebar di berbagai perusahaan baik itu dalam negeri ataupun luar negeri.</p>
        </div>
        {dataLulusan.dataContent.map((item) => (
            <div className="flex flex-col px-40 py-5" key={item.id}>
                <img src={item.image1} alt={item.title} />
                <h1 className="text-3xl">{item.title}</h1>
                <img src={item.image2} alt={item.title} />
            </div>
        ))}
        <Footer />
    </div>
}

export default Lulusan