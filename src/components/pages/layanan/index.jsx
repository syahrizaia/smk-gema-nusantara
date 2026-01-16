import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"

const Layanan = () => {
    return <>
        <Navbar />
        <div className="flex flex-col gap-3 text-center text-white bg-blue-500 py-5">
            <h1 className="text-3xl font-bold">Kurikulum di SMK Gema Nusantara</h1>
            <p>Kurikulum yang diterapkan di SMK Gema Nusantara mengintegrasikan antara kurikulum 2013, Vapro Internasional, dan SKKNI.</p>
        </div>
        <div className="flex flex-col justify-center items-center h-screen">
            Tidak ada isi
        </div>
        <Footer />
    </>
}

export default Layanan