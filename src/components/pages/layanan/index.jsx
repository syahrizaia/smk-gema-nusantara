import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";

const serviceList = [
  {
    title: "Legalisir Di Rumah (LDR)",
    desc: "Layanan permohonan legalisir ijazah dan transkrip nilai secara online dengan pengiriman langsung ke alamat alumni.",
    icon: "fas fa-house-laptop",
    to: "/layanan/legalisir-di-rumah",
    badge: "Layanan Unggulan",
    color: "cyan",
  },
  {
    title: "Surat Rekomendasi",
    desc: "Pengajuan surat rekomendasi resmi kepala sekolah untuk melamar pekerjaan di industri mitra atau melanjutkan ke perguruan tinggi.",
    icon: "fas fa-file-signature",
    to: "/layanan/surat-rekomendasi",
    badge: "Alumni & Siswa",
    color: "blue",
  },
  {
    title: "Informasi Publik & PPID",
    desc: "Portal keterbukaan informasi publik dan akuntabilitas penyelenggaraan pendidikan kejuruan sesuai UU KIP No. 14 Tahun 2008.",
    icon: "fas fa-bullhorn",
    to: "/layanan/informasi-publik",
    badge: "Transparansi",
    color: "amber",
  },
  {
    title: "Survei Kepuasan Pelanggan",
    desc: "Instrumen penilaian mutu layanan sekolah dari sudut pandang siswa, orang tua murid, dan mitra dunia industri (DUDI).",
    icon: "fas fa-star-half-stroke",
    to: "/layanan/informasi-publik/survei-kepuasan-pelanggan",
    badge: "Evaluasi Mutu",
    color: "emerald",
  },
  {
    title: "Respon & Pengaduan Pelanggan",
    desc: "Kanal pengaduan, masukan konstruktif, dan pelacakan tindak lanjut aspirasi masyarakat terhadap layanan pendidikan.",
    icon: "fas fa-comments",
    to: "/layanan/informasi-publik/laporan-laporan/respon-pelanggan",
    badge: "Zona Integritas",
    color: "cyan",
  },
  {
    title: "Layanan Tata Usaha & Kearsipan",
    desc: "Pengurusan administrasi persuratan, mutasi siswa, permohonan surat keterangan aktif, dan arsip digital sekolah.",
    icon: "fas fa-folder-tree",
    to: "/layanan/informasi-publik/laporan-laporan/tata-usaha",
    badge: "Administrasi",
    color: "blue",
  },
];

const serviceSteps = [
  { step: "01", title: "Ajukan Permohonan", desc: "Pilih jenis layanan dan lengkapi formulir online serta lampiran dokumen yang diperlukan." },
  { step: "02", title: "Verifikasi Berkas", desc: "Petugas Tata Usaha memvalidasi keabsahan data siswa/alumni dalam database Dapodik." },
  { step: "03", title: "Penerbitan Dokumen", desc: "Dokumen diproses, ditandatangani secara basah atau elektronik, dan distempel resmi." },
  { step: "04", title: "Pengambilan / Kirim", desc: "Dokumen dapat diambil langsung di loket TU atau dikirim via kurir ekspedisi ke rumah." },
];

const Layanan = () => {
  return (
    <PageLayout
      badge="PUSAT LAYANAN TERPADU"
      badgeVariant="cyan"
      title="Pusat Layanan"
      gradientText="& Administrasi Sekolah"
      subtitle="Memberikan kemudahan akses pelayanan administratif bagi siswa, orang tua, alumni, dan mitra industri secara cepat, transparan, dan akuntabel."
      breadcrumbs={[{ label: "Layanan" }]}
    >
      <div className="flex flex-col gap-12 text-left">
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((svc, idx) => (
            <Link
              key={idx}
              to={svc.to}
              className="liquid-glass-card liquid-sheen p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={svc.icon}></i>
                  </div>
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                <span>Buka Formulir / Detail</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>

        {/* SOP Layanan Step Bar */}
        <div className="liquid-glass-card p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="liquid-badge text-xs mb-2">STANDAR OPERASIONAL PROSEDUR</span>
            <h3 className="text-2xl font-black text-white">
              Alur Pelayanan Ramah & Cepat
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Proses administrasi dirancang efisien dengan estimasi penyelesaian 1–3 hari kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSteps.map((s, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-cyan-400/80 mb-2 block font-mono">
                    {s.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Layanan;