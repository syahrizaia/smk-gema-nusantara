import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"

const KepalaSekolah = () => {
    return <>
        <Navbar />
        <div className="flex flex-col gap-3 text-center text-white bg-blue-500 py-5">
            <h1 className="text-3xl font-bold">Kepala Sekolah</h1>
        </div>
        <Footer />
    </>
}

export default KepalaSekolah