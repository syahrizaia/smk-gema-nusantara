import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Pembelajaran = lazy(() => import('./components/pages/pembelajaran/index.jsx'))
const Layanan = lazy(() => import('./components/pages/layanan/index.jsx'))
const Prestasi = lazy(() => import('./components/pages/prestasi/index.jsx'))
const Lulusan = lazy(() => import('./components/pages/lulusan/index.jsx'))
const HubungiKami = lazy(() => import('./components/pages/hubungi-kami/index.jsx'))
const NotFound = lazy(() => import('./components/pages/NotFound.jsx'))
const TentangKami = lazy(() => import('./components/pages/tentang-kami/index.jsx'))
const BeritaTerkini = lazy(() => import('./components/pages/tentang-kami/BeritaTerkini.jsx'))
const Sejarah = lazy(() => import('./components/pages/tentang-kami/Sejarah.jsx'))
const VisiMisi = lazy(() => import('./components/pages/tentang-kami/VisiMisi.jsx'))
const SasaranMutu = lazy(() => import('./components/pages/tentang-kami/SasaranMutu.jsx'))
const KepalaSekolah = lazy(() => import('./components/pages/tentang-kami/struktur/KepalaSekolah.jsx'))
const JadwalPembelajaran = lazy(() => import('./components/pages/pembelajaran/kurikulum/JadwalPembelajaran.jsx'))
const StrukturKurikulum = lazy(() => import('./components/pages/pembelajaran/kurikulum/StrukturKurikulum.jsx'))
const FasilitasLaboratorium = lazy(() => import('./components/pages/pembelajaran/fasilitas/FasilitasLaboratorium.jsx'))
const StatistikSDM = lazy(() => import('./components/pages/pembelajaran/sumber-daya-manusia/StatistikSDM.jsx'))
const KegiatanTahunan = lazy(() => import('./components/pages/pembelajaran/kegiatan/KegiatanTahunan.jsx'))
const OrganisasiSiswa = lazy(() => import('./components/pages/pembelajaran/kegiatan/OrganisasiSiswa.jsx'))
const EkstrakurikulerSiswa = lazy(() => import('./components/pages/pembelajaran/kegiatan/EkstrakurikulerSiswa.jsx'))
const LegalisirDiRumah = lazy(() => import('./components/pages/layanan/LegalisirDiRumah.jsx'))
const SuratRekomendasi = lazy(() => import('./components/pages/layanan/SuratRekomendasi.jsx'))
const PermohonanInformasiPublik = lazy(() => import('./components/pages/layanan/informasi-publik/PermohonanInformasiPublik.jsx'))
const PPID = lazy(() => import('./components/pages/layanan/informasi-publik/laporan-laporan/PPID.jsx'))
const SurveiKepuasanPelanggan = lazy(() => import('./components/pages/layanan/informasi-publik/SurveiKepuasanPelanggan.jsx'))
const JenisInformasi = lazy(() => import('./components/pages/layanan/informasi-publik/JenisInformasi.jsx'))
const TataUsaha = lazy(() => import('./components/pages/layanan/informasi-publik/laporan-laporan/TataUsaha.jsx'))
const ResponPelanggan = lazy(() => import('./components/pages/layanan/informasi-publik/laporan-laporan/ResponPelanggan.jsx'))
const PrestasiGuru = lazy(() => import('./components/pages/prestasi/PrestasiGuru.jsx'))
const PrestasiSekolah = lazy(() => import('./components/pages/prestasi/PrestasiSekolah.jsx'))
const PrestasiSiswa = lazy(() => import('./components/pages/prestasi/PrestasiSiswa.jsx'))
const BintangBelajar = lazy(() => import('./components/pages/prestasi/BintangBelajar.jsx'))
const KeterserapanLulusan = lazy(() => import('./components/pages/lulusan/KeterserapanLulusan.jsx'))
const IndustriMitra = lazy(() => import('./components/pages/lulusan/IndustriMitra.jsx'))
const StrukturOrganisasi = lazy(() => import('./components/pages/tentang-kami/struktur/StrukturOrganisasi.jsx'))
const FasilitasPenunjang = lazy(() => import('./components/pages/pembelajaran/fasilitas/FasilitasPenunjang.jsx'))
const ProfilSDM = lazy(() => import('./components/pages/pembelajaran/sumber-daya-manusia/ProfilSDM.jsx'))
const InformasiPublik = lazy(() => import('./components/pages/layanan/informasi-publik/index.jsx'))
const LaporanLaporan = lazy(() => import('./components/pages/layanan/informasi-publik/laporan-laporan/index.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/tentang-kami',
    element: <TentangKami />,
  },
  {
    path: '/tentang-kami/berita-terkini',
    element: <BeritaTerkini />,
  },
  {
    path: '/tentang-kami/sejarah',
    element: <Sejarah />,
  },
  {
    path: '/tentang-kami/visi-misi',
    element: <VisiMisi />,
  },
  {
    path: '/tentang-kami/sasaran-mutu',
    element: <SasaranMutu />,
  },
  {
    path: '/tentang-kami/struktur/kepala-sekolah',
    element: <KepalaSekolah />,
  },
  {
    path: '/tentang-kami/struktur/struktur-organisasi',
    element: <StrukturOrganisasi />,
  },
  {
    path: '/pembelajaran',
    element: <Pembelajaran />,
  },
  {
    path: '/pembelajaran/kurikulum/jadwal-pembelajaran',
    element: <JadwalPembelajaran />,
  },
  {
    path: '/pembelajaran/kurikulum/struktur-kurikulum',
    element: <StrukturKurikulum />,
  },
  {
    path: '/pembelajaran/fasilitas/fasilitas-laboratorium',
    element: <FasilitasLaboratorium />,
  },
  {
    path: '/pembelajaran/fasilitas/fasilitas-penunjang',
    element: <FasilitasPenunjang />,
  },
  {
    path: '/pembelajaran/sumber-daya-manusia/statistik-sdm',
    element: <StatistikSDM />,
  },
  {
    path: '/pembelajaran/sumber-daya-manusia/profil-sdm',
    element: <ProfilSDM />,
  },
  {
    path: '/pembelajaran/kegiatan/kegiatan-tahunan',
    element: <KegiatanTahunan />,
  },
  {
    path: '/pembelajaran/kegiatan/ekstrakurikuler-siswa',
    element: <EkstrakurikulerSiswa />,
  },
  {
    path: '/pembelajaran/kegiatan/organisasi-siswa',
    element: <OrganisasiSiswa />,
  },
  {
    path: '/layanan',
    element: <Layanan />,
  },
  {
    path: '/layanan/legalisir-di-rumah',
    element: <LegalisirDiRumah />,
  },
  {
    path: '/layanan/surat-rekomendasi',
    element: <SuratRekomendasi />,
  },
  {
    path: '/layanan/informasi-publik',
    element: <InformasiPublik />,
  },
  {
    path: '/layanan/informasi-publik/permohonan-informasi-publik',
    element: <PermohonanInformasiPublik />,
  },
  {
    path: '/layanan/informasi-publik/jenis-informasi',
    element: <JenisInformasi />,
  },
  {
    path: '/layanan/informasi-publik/laporan-laporan',
    element: <LaporanLaporan />,
  },
  {
    path: '/layanan/informasi-publik/laporan-laporan/tata-usaha',
    element: <TataUsaha />,
  },
  {
    path: '/layanan/informasi-publik/laporan-laporan/respon-pelanggan',
    element: <ResponPelanggan />,
  },
  {
    path: '/layanan/informasi-publik/laporan-laporan/ppid',
    element: <PPID />,
  },
  {
    path: '/layanan/informasi-publik/survei-kepuasan-pelanggan',
    element: <SurveiKepuasanPelanggan />,
  },
  {
    path: '/prestasi',
    element: <Prestasi />,
  },
  {
    path: '/prestasi/prestasi-sekolah',
    element: <PrestasiSekolah />,
  },
  {
    path: '/prestasi/prestasi-guru',
    element: <PrestasiGuru />,
  },
  {
    path: '/prestasi/prestasi-siswa',
    element: <PrestasiSiswa />,
  },
  {
    path: '/prestasi/bintang-belajar',
    element: <BintangBelajar />,
  },
  {
    path: '/lulusan',
    element: <Lulusan />,
  },
  {
    path: '/lulusan/keterserapan-lulusan',
    element: <KeterserapanLulusan />,
  },
  {
    path: '/lulusan/industri-mitra',
    element: <IndustriMitra />,
  },
  {
    path: '/hubungi-kami',
    element: <HubungiKami />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
