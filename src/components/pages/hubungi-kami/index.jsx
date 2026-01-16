import { dataHubungiKami } from "../../../service/data"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"

const HubungiKami = () => {
    return <div>
        <Navbar />
        <div className="bg-blue-500 text-white flex flex-col gap-3 text-center px-20 py-5">
            <h1 className="text-3xl font-bold">SMK Gema Nusantara</h1>
            <p>JL. Raya Cibarusah, Warung Bambu, Sindangmulya, Kec. Cibarusah, Kab. Bekasi Prov. Jawa Barat</p>
        </div>
        <div className="grid grid-cols-3 gap-10 px-20">
            {dataHubungiKami.dataSekolah.map((item) => (
                <div key={item.id} className="flex flex-col gap-5 py-5">
                    <h1 className="bg-blue-500 text-white px-5 py-2 rounded w-full">{item.title}</h1>
                    <ul className="px-5">
                        <li>Kepsek: <b>{item.kepsek}</b></li>
                        <li>Operator: <b>{item.operator}</b></li>
                        <li>Akreditasi: <b>{item.akreditasi}</b></li>
                        <li>Kurikulum: <b>{item.kurikulum}</b></li>
                        <li>Waktu: <b>{item.waktu}</b></li>
                    </ul>
                </div>
            ))}
            {dataHubungiKami.identitasSekolah.map((item) => (
                <div key={item.id} className="flex flex-col gap-5 py-5">
                    <h1 className="bg-blue-500 text-white px-5 py-2 rounded w-full">{item.title}</h1>
                    <ul className="px-5">
                        <li><b>NPSN</b>: {item.NPSN}</li>
                        <li><b>Status</b>: {item.status}</li>
                        <li><b>Bentuk Pendidikan</b>: {item.bentukPendidikan}</li>
                        <li><b>Status Kepemilikan</b>: {item.statusKepemilikan}</li>
                        <li><b>SK Pendirian Sekolah</b>: {item.SKPendirianSekolah}</li>
                        <li><b>Tanggal SK Pendirian</b>: {item.tanggalSKPendirian}</li>
                        <li><b>SK Izin Operasional</b>: {item.SKIzinOperasional}</li>
                        <li><b>Tanggal SK Izin Operasional</b>: {item.tanggalSKIzinOperasional}</li>
                    </ul>
                </div>
            ))}
            {dataHubungiKami.kontakUtama.map((item) => (
                <div key={item.id} className="flex flex-col gap-5 py-5">
                    <h1 className="bg-blue-500 text-white px-5 py-2 rounded w-full">{item.title}</h1>
                    <ul className="px-5">
                        <li><b>Alamat</b>: {item.alamat}</li>
                        <li><b>Email</b>: {item.email}</li>
                        <li><b>RT/RW</b>: {item.RTRW}</li>
                        <li><b>Dusun</b>: {item.dusun}</li>
                        <li><b>Desa/Kelurahan</b>: {item.desakelurahan}</li>
                        <li><b>Kecamatan</b>: {item.kecamatan}</li>
                        <li><b>Kabupaten</b>: {item.kabupaten}</li>
                        <li><b>Provinsi</b>: {item.provinsi}</li>
                        <li><b>Kode Pos</b>: {item.kodepos}</li>
                        <li><b>Lintang</b>: {item.lintang}</li>
                        <li><b>Bujur</b>: {item.bujur}</li>
                    </ul>
                </div>
            ))}
        </div>
        <iframe
            className="px-20 py-10 h-screen w-full"
            src={dataHubungiKami.mapLocation}
            width={"100%"}
            height={"100%"}
            allowFullScreen=""
        />
        <Footer />
    </div>
}

export default HubungiKami