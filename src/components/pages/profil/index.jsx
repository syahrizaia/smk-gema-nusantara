import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"
import TotalNews from "../../Layouts/TotalNews"

const data = [
    {
        id: 1,
        title: "",
        content: "Sekolah Menengah Kejuruan – SMK Gema Nusantara adalah sekolah vokasi yang berdiri sejak tahun 2015 di bawah naungan Yayasan Al-Fath Nusantara. SMK Gema Nusantara berlokasi di Kecamatan Cibarusah, Kabupaten Bekasi, Jawa Barat, dan memiliki dua konsentrasi keahlian unggulan: Teknik Kendaraan Ringan serta Manajemen Perkantoran. Sejak awal berdiri, SMK Gema Nusantara berkomitmen menyelenggarakan pendidikan kejuruan berbasis Teaching Factory dengan dukungan kelas industri hasil kerja sama bersama perusahaan nasional dan multinasional, seperti Mitsubishi Motors Krama Yudha Indonesia (MMKI), Musashi Auto Parts, dan mitra strategis lainnya. Hingga kini, SMK Gema Nusantara telah meluluskan ribuan siswa yang tersebar di berbagai perusahaan manufaktur, otomotif, serta lembaga pendidikan tinggi baik di dalam maupun luar negeri. Berkat sinergi antara sekolah, industri, orang tua, dan masyarakat, SMK Gema Nusantara terus tumbuh menjadi sekolah rujukan di wilayah Bekasi dan Jawa Barat.",
        media: "https://www.youtube.com/watch?v=11FNqgxhBWs"
    },
    {
        id: 2,
        title: "KURIKULUM",
        content: "Dalam rangka mencetak lulusan yang kompeten dan siap kerja, SMK Gema Nusantara melaksanakan proses pembelajaran dengan menerapkan kurikulum terintegrasi antara Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemdikbudristek), kebutuhan dunia kerja dan industri, serta Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Selain itu, kurikulum juga mengacu pada standar mutu internasional dan validasi langsung dari mitra industri. Hal ini menjadikan SMK Gema Nusantara menghasilkan lulusan dengan tingkat keterserapan tinggi baik di dunia kerja maupun di perguruan tinggi. Sejak tahun 2015, SMK Gema Nusantara telah menerapkan model pembelajaran Teaching Factory, yaitu pembelajaran berbasis produksi/jasa yang mengacu pada standar dan prosedur industri serta dilaksanakan dalam atmosfer kerja nyata. Dengan Teaching Factory, siswa berlatih menyelesaikan pekerjaan riil sesuai standar industri, sehingga terbentuk kompetensi teknis, manajerial, dan soft skills yang dibutuhkan oleh dunia kerja. Mulai tahun pelajaran 2018–2019, SMK Gema Nusantara juga mengembangkan bentuk penyelenggaraan Sistem Ganda, yaitu pendidikan kejuruan yang memadukan proses belajar di sekolah dengan pengalaman kerja langsung di perusahaan mitra. Program ini memungkinkan siswa menguasai keahlian yang diperoleh melalui praktik nyata pada lingkungan industri secara sistematik dan sinkron.",
        media: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil2.jpg"
    },
    {
        id: 3,
        title: "SARANA DAN PRASARANA",
        content: "Proses pembelajaran di SMK Gema Nusantara didukung oleh sarana dan prasarana yang lengkap dan memadai, meliputi: Laboratorium Teknik Kendaraan Ringan (Engine, Sasis, dan Kelistrikan), Laboratorium Manajemen Perkantoran dan Komputer, Laboratorium Bahasa, Laboratorium Teaching Factory (Bengkel Otomotif & Administrasi), Perpustakaan dengan koleksi buku dan referensi digital, Ruang teori yang nyaman dan ber-AC, Ruang rapat serta ruang praktik administrasi modern, Tempat ibadah (Mushola), Lapangan olahraga, Area parkir yang luas dan aman. Selain itu, SMK Gema Nusantara terus berupaya mengembangkan fasilitas berbasis teknologi terkini untuk mendukung pembelajaran berbasis industri, termasuk penerapan sistem digital learning dan simulasi komputer. Fasilitas-fasilitas tersebut didukung oleh tenaga pendidik dan tenaga kependidikan yang kompeten, serta kerjasama aktif dengan mitra industri, sehingga pembelajaran berlangsung relevan, efektif, dan sesuai standar kerja nyata.",
        media: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil3.jpg"
    },
    {
        id: 4,
        title: "KERJASAMA DAN KEMITRAAN",
        content: "SMK Gema Nusantara telah menjalin kerjasama dengan berbagai perusahaan nasional maupun multinasional, terutama di sektor otomotif, manufaktur, dan administrasi perkantoran. Kemitraan ini dilakukan untuk memperkuat link and match antara sekolah dan dunia usaha/dunia industri (DUDI), sehingga pembelajaran lebih relevan dengan kebutuhan kerja nyata. Bentuk kerjasama dan kemitraan yang dijalankan antara lain: Praktik Kerja Industri (Prakerin) bagi seluruh siswa. Kelas Industri bersama Mitsubishi Motors Krama Yudha Indonesia (MMKI) dan Musashi Auto Parts. Guru Tamu/Expert Day dari praktisi industri. Kunjungan Industri ke perusahaan mitra. Penempatan Kerja Lulusan melalui Bursa Kerja Khusus (BKK) sekolah. Beasiswa & Program Pengembangan Karir dari perusahaan mitra. Kemitraan ini membuktikan bahwa SMK Gema Nusantara berkomitmen untuk mencetak lulusan yang kompeten, berkarakter, serta siap bekerja di dunia industri maupun melanjutkan studi ke jenjang yang lebih tinggi.",
        media: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil41.jpg"
    },
    {
        id: 5,
        title: "KEGIATAN KESISWAAAN",
        content: "Kegiatan kesiswaan di SMK Gema Nusantara dirancang untuk memberikan pembekalan dan pengalaman bermasyarakat, berorganisasi, serta melatih kepemimpinan seluruh siswa. Kegiatan ini difasilitasi melalui Organisasi Siswa Intra Sekolah (OSIS), ekstrakurikuler, dan kegiatan kesiswaan lainnya yang menjadi wadah pengembangan diri. Selain itu, siswa juga didukung untuk mengikuti berbagai pelatihan motivasi dan pengembangan diri, seperti Achievement Motivation Training (AMT), yang bertujuan meningkatkan semangat belajar, prestasi, dan kesiapan menghadapi dunia kerja maupun dunia usaha. Untuk mengembangkan bakat, minat, dan potensi siswa, SMK Gema Nusantara menyelenggarakan berbagai kegiatan ekstrakurikuler yang terbagi dalam bidang: Olahraga (futsal, basket, voli, pencak silat, dan lainnya), Seni & Budaya (paduan suara, tari, band, teater, desain grafis), Kepanduan & Bela Negara (Pramuka, Paskibra), Keterampilan & Kewirausahaan (jurnalistik, multimedia, kewirausahaan muda). Melalui kegiatan ini, siswa tidak hanya mengasah kemampuan akademik, tetapi juga membangun karakter, kedisiplinan, kepemimpinan, serta keterampilan sosial yang penting untuk sukses di masa depan.",
        media: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil5.jpg"
    },
    {
        id: 6,
        title: "TUPOKSI SEKOLAH",
        content: "Berdasarkan Peraturan Pemerintah Nomor 29 Tahun 1990 tentang Pendidikan Menengah Kejuruan serta Peraturan Menteri Pendidikan dan Kebudayaan terkait tugas pokok dan fungsi satuan pendidikan, SMK Gema Nusantara mempunyai tugas utama menyelenggarakan pendidikan kejuruan untuk mempersiapkan peserta didik agar memiliki keterampilan, pengetahuan, dan sikap profesional sesuai kebutuhan dunia kerja dan dunia industri. Dalam melaksanakan tugas tersebut, SMK Gema Nusantara menyelenggarakan fungsi: Penyusunan rencana dan program pendidikan serta pengajaran yang sesuai dengan kurikulum nasional dan kebutuhan industri. Pelaksanaan pendidikan dan pengajaran di dalam maupun di luar sekolah, termasuk praktik kerja industri (Prakerin) dan kegiatan berbasis Teaching Factory. Pelaksanaan kerja sama pendidikan dan pengajaran dengan dunia usaha, dunia industri, serta perguruan tinggi mitra. Pelaksanaan urusan tata usaha dan rumah tangga sekolah, untuk menjamin kelancaran administrasi dan layanan pendidikan.",
        media: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil6.jpg"
    }
]

const Profil = () => {
    return <div>
        <Navbar />
        <h1 className="text-3xl text-white text-center bg-blue-500 py-10">Profil Singkat SMK Gema Nusantara</h1>
        {data.map((item) => (
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