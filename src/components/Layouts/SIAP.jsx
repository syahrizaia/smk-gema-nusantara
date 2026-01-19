import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { Link } from "react-router-dom"

const SIAP = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div className="flex flex-col justify-center gap-5 px-20 py-10">
        <div
         data-aos="fade-up"
            className="flex flex-col justify-center gap-2"
        >
            <h1>SIAP -----</h1>
            <h2 className="text-3xl">Sistem Integrasi Aplikasi</h2>
        </div>
        <div
            data-aos="zoom-in"
            className="grid grid-cols-4 gap-5"
        >
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Buku Pribadi Digital</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Jarvis GENUS</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Perpus Khazanah Analitika</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">GENUS Open Championship</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">KHS Online</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Gadget Assisted Exam</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">LSP P-1 GENUS</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Praktik Kimia Terpadu - 2</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Pelaporan Gratifikasi</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Benturan Kepentingan</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Respon Pelanggan</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Whistle Blowing System</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Legalisir di Rumah (LDR)</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Surat Rekomendasi</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Carrier Development Center</Link>
            <Link className="px-5 py-5 rounded border border-gray-200 transition delay-150 duration-300 hover:text-blue-500 hover:border-blue-500" to="/not-found">Praktik Kerja Industri</Link>
        </div>
    </div>
}

export default SIAP