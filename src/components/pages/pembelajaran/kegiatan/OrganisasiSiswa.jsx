import { useEffect } from "react"
import Footer from "../../../Layouts/Footer"
import Navbar from "../../../Layouts/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css';

const OrganisasiSiswa = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <div>
        <Navbar />
        <div className="flex flex-col gap-5 text-center text-white bg-blue-500 px-20 py-5">
            <h1 className="text-3xl font-bold">Persatuan Pelajar SMK Gema Nusantara</h1>
            <p>Persatuan Pelajar merupakan Organisasi Siswa Intra Sekolah (OSIS) yang dimiliki oleh SMK Gema Nusantara.</p>
        </div>
        <div className="flex flex-col gap-10 px-20 py-10">
            <img
                data-aos="zoom-in"
                className="w-1/2 rounded"
                src="https://smkgemanusantara.sch.id/wp-content/plugins/elementor/assets/images/placeholder.png"
                alt=""
            />
            <h1 data-aos="fade-right" className="text-2xl">Belajar Chemistry Sambil Berorganisasi</h1>
            <p data-aos="fade-right">
                Persatuan Pelajar merupakan Organisasi Siswa Intra Sekolah (OSIS) yang dimiliki oleh SMK Gema Nusantara. Persatuan Pelajar yang lebih dikenal sebagai PP merupakan suatu wadah untuk mengakomodir kegiatan siswa dan sebagai jembatan siswa dengan sekolah, dimana organisasi ini berada dibawah bidang Kesiswaan. Organisasi ini juga organisasi siswa tertinggi di sekolah. Persatuan Pelajar memiliki tujuan untuk meningkatkan dan menjadikan siswa-siswi SMK Gema Nusantara yang beriman, berprestasi, kompetitif dan berjiwa sosial, serta berfungsi sebagai wadah aspirasi bagi siswa-siswi di bidang akademik maupun non akademik.
                <br /><br />
                Kepengurusan PP sendiri akan berganti setiap tahunnya dan pengurus merupakan perwakilan para siswa terpilih yang ketuanya dipilih dengan cara voting oleh para siswa SMK Gema Nusantara. Para pengurus persatuan pelajar dituntut untuk menjadi pendengar yang baik juga pengambil keputusan nan cerdas. Pandangan yang objektif dan integritas yang tinggi harus dipelihara oleh para pengurus untuk tercapainya musyawarah mufakat. Tentunya keaktifan berorganisasi tidak boleh mempengaruhi performa akademis seorang pelajar, hal ini telah dibuktikan oleh banyaknya pengurus PP SMK Gema Nusantara yang tetap berprestasi meski aktif berorganisasi.
            </p>
        </div>
        <Footer />
    </div>
}

export default OrganisasiSiswa