import { Link } from "react-router-dom"

const NotFound = () => {
    return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Halaman Tidak Ditemukan</h2>
        <p className="text-lg">Maaf, halaman yang Anda cari tidak ada.</p>
        <Link to="/" className="border px-5 py-2 mt-10 rounded transition delay-150 duration-300 hover:text-blue-500">Kembali</Link>
    </div>
}

export default NotFound