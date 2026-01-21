import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pembelajaran from './components/pages/pembelajaran/index.jsx'
import Layanan from './components/pages/layanan/index.jsx'
import Prestasi from './components/pages/prestasi/index.jsx'
import Lulusan from './components/pages/lulusan/index.jsx'
import HubungiKami from './components/pages/hubungi-kami/index.jsx'
import NotFound from './components/pages/NotFound.jsx'
import TentangKami from './components/pages/tentang-kami/index.jsx'
import BeritaTerkini from './components/pages/tentang-kami/BeritaTerkini.jsx'
import Sejarah from './components/pages/tentang-kami/Sejarah.jsx'
import VisiMisi from './components/pages/tentang-kami/VisiMisi.jsx'
import SasaranMutu from './components/pages/tentang-kami/SasaranMutu.jsx'
import KepalaSekolah from './components/pages/tentang-kami/struktur/KepalaSekolah.jsx'
import JadwalPembelajaran from './components/pages/pembelajaran/kurikulum/JadwalPembelajaran.jsx'
import StrukturKurikulum from './components/pages/pembelajaran/kurikulum/StrukturKurikulum.jsx'
import FasilitasLaboratorium from './components/pages/pembelajaran/fasilitas/FasilitasLaboratorium.jsx'
import StatistikSDM from './components/pages/pembelajaran/sumber-daya-manusia/StatistikSDM.jsx'
import KegiatanTahunan from './components/pages/pembelajaran/kegiatan/KegiatanTahunan.jsx'
import OrganisasiSiswa from './components/pages/pembelajaran/kegiatan/OrganisasiSiswa.jsx'
import EkstrakurikulerSiswa from './components/pages/pembelajaran/kegiatan/EkstrakurikulerSiswa.jsx'
import LegalisirDiRumah from './components/pages/layanan/LegalisirDiRumah.jsx'
import SuratRekomendasi from './components/pages/layanan/SuratRekomendasi.jsx'
import PermohonanInformasiPublik from './components/pages/layanan/informasi-publik/PermohonanInformasiPublik.jsx'
import PPID from './components/pages/layanan/informasi-publik/laporan-laporan/PPID.jsx'
import SurveiKepuasanPelanggan from './components/pages/layanan/informasi-publik/SurveiKepuasanPelanggan.jsx'
import JenisInformasi from './components/pages/layanan/informasi-publik/JenisInformasi.jsx'
import TataUsaha from './components/pages/layanan/informasi-publik/laporan-laporan/TataUsaha.jsx'
import ResponPelanggan from './components/pages/layanan/informasi-publik/laporan-laporan/ResponPelanggan.jsx'
import PrestasiGuru from './components/pages/prestasi/PrestasiGuru.jsx'
import PrestasiSekolah from './components/pages/prestasi/PrestasiSekolah.jsx'
import PrestasiSiswa from './components/pages/prestasi/PrestasiSiswa.jsx'
import BintangBelajar from './components/pages/prestasi/BintangBelajar.jsx'
import KeterserapanLulusan from './components/pages/lulusan/KeterserapanLulusan.jsx'
import IndustriMitra from './components/pages/lulusan/IndustriMitra.jsx'
import StrukturOrganisasi from './components/pages/tentang-kami/struktur/StrukturOrganisasi.jsx'
import FasilitasPenunjang from './components/pages/pembelajaran/fasilitas/FasilitasPenunjang.jsx'
import ProfilSDM from './components/pages/pembelajaran/sumber-daya-manusia/ProfilSDM.jsx'
import InformasiPublik from './components/pages/layanan/informasi-publik/index.jsx'
import LaporanLaporan from './components/pages/layanan/informasi-publik/laporan-laporan/index.jsx'

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
    <RouterProvider router={router} />
  </StrictMode>,
)
