import LinkCustom from "../Elements/LinkCustom"

const SIAP = () => {
    return <div className="flex flex-col justify-center gap-5 px-20 py-10">
        <div className="flex flex-col justify-center gap-2">
            <h1>SIAP -----</h1>
            <h2 className="text-3xl">Sistem Integrasi Aplikasi</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
            <LinkCustom to="/buku-pribadi-digital">Buku Pribadi Digital</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Jarvis GENUS</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Perpus Khazanah Analitika</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">GENUS Open Championship</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">KHS Online</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Gadget Assisted Exam</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">LSP P-1 GENUS</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Praktik Kimia Terpadu - 2</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Pelaporan Gratifikasi</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Benturan Kepentingan</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Respon Pelanggan</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Whistle Blowing System</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Legalisir di Rumah (LDR)</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Surat Rekomendasi</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Carrier Development Center</LinkCustom>
            <LinkCustom to="/buku-pribadi-digital">Praktik Kerja Industri</LinkCustom>
        </div>
    </div>
}

export default SIAP