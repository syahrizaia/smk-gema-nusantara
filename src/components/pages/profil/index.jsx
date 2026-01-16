import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import TotalNews from "../../Layouts/TotalNews"
import { dataProfil } from "../../../service/data"

const Profil = () => {
    return <div>
        <Navbar />
        <h1 className="text-3xl text-white text-center bg-blue-500 py-10">Profil Singkat SMK Gema Nusantara</h1>
        {dataProfil.dataContent.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 px-20 py-10">
                <h1 className="text-3xl font-bold mb-5">{item.title}</h1>
                <div className="flex gap-5">
                    <p>{item.content}</p>
                    {item.media && (
                        <div className="mt-5">
                            <iframe width="560" height="315" src={item.media} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    )}
                </div>
            </div>
        ))}
        <TotalNews />
        <Footer />
    </div>
}

export default Profil