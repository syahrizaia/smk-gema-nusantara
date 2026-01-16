import { dataPembelajaran } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"

const Pembelajaran = () => {
    return <div>
        <Navbar />
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold py-5 w-full bg-blue-500 text-white">
                Kurikulum di SMK - SMAK Gema Nusantara
            </h1>
            {dataPembelajaran?.dataImage?.map((item) => (
                <img src={item.src} key={item.id} />
            ))}
        </div>
        <Footer />
    </div>
}

export default Pembelajaran