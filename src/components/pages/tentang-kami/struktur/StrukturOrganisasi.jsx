import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const orgUnits = [
  {
    title: "Yayasan Al-Fath Nusantara",
    lead: "Badan Penyelenggara Pendidikan",
    role: "Pengarah Kebijakan Strategis",
    icon: "fas fa-landmark",
    color: "amber",
  },
  {
    title: "Kepala Sekolah",
    lead: "Gumilang Agung Laksono, S.E.",
    role: "Penanggung Jawab Utama Satuan Pendidikan",
    icon: "fas fa-user-tie",
    color: "cyan",
  },
  {
    title: "Komite Sekolah & Industri",
    lead: "Perwakilan Industri & Wali Murid",
    role: "Pengawas Mutu & Kemitraan DUDI",
    icon: "fas fa-handshake",
    color: "blue",
  },
  {
    title: "Waka Kurikulum",
    lead: "Bidang Akademik & Pembelajaran",
    role: "Implementasi Kurikulum Terpadu & SKKNI",
    icon: "fas fa-book-bookmark",
    color: "cyan",
  },
  {
    title: "Waka Kesiswaan",
    lead: "Bidang Pembinaan Karakter",
    role: "Pengembangan Disiplin, OSIS & Ekstrakurikuler",
    icon: "fas fa-users-gear",
    color: "cyan",
  },
  {
    title: "Waka Hubinmas & BKK",
    lead: "Bidang Hubungan Industri & Kerja",
    role: "Prakerin, Magang DUDI, & LPK Jepang",
    icon: "fas fa-briefcase",
    color: "cyan",
  },
  {
    title: "Waka Sarana & Prasarana",
    lead: "Bidang Infrastruktur & TEFA",
    role: "Laboratorium, Bengkel Otomotif & Digital Office",
    icon: "fas fa-screwdriver-wrench",
    color: "cyan",
  },
  {
    title: "Ketua Program Keahlian TKR",
    lead: "Teknik Kendaraan Ringan",
    role: "Bengkel Otomotif & Kelas Industri MMKI",
    icon: "fas fa-car",
    color: "emerald",
  },
  {
    title: "Ketua Program Keahlian MP",
    lead: "Manajemen Perkantoran",
    role: "Laboratorium Komputer & Simulasi Administrasi",
    icon: "fas fa-building",
    color: "emerald",
  },
  {
    title: "Kepala Tata Usaha",
    lead: "Bagian Administrasi & Layanan",
    role: "Layanan Persuratan, Kearsipan, & PPID",
    icon: "fas fa-folder-open",
    color: "blue",
  },
];

const StrukturOrganisasi = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const chartImg =
    "https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-21.53.13.jpeg";

  return (
    <PageLayout
      badge="TATA KELOLA SEKOLAH"
      badgeVariant="default"
      title="Struktur Organisasi"
      gradientText="SMK Gema Nusantara"
      subtitle="Bagan kepengurusan dan garis koordinasi kepemimpinan sekolah dalam mewujudkan manajemen vokasi yang transparan, akuntabel, dan profesional."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Struktur Organisasi" },
      ]}
    >
      <div className="flex flex-col gap-10">
        {/* Interactive Org Chart Visual Card */}
        <div className="liquid-glass-card liquid-sheen p-6 sm:p-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center max-w-2xl mb-8">
            <span className="liquid-badge text-xs mb-2">DIAGRAM RESMI</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Bagan Struktur Kepengurusan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Klik gambar bagan di bawah ini untuk memperbesar diagram struktur organisasi resmi SMK Gema Nusantara.
            </p>
          </div>

          <div
            onClick={() => setModalOpen(true)}
            className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer group relative bg-slate-900"
          >
            <img
              loading="lazy"
              src={chartImg}
              alt="Diagram Struktur Organisasi SMK Gema Nusantara"
              className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="liquid-btn-primary !text-xs !py-2 !px-4 pointer-events-none">
                <i className="fas fa-search-plus mr-1.5"></i> Perbesar Bagan
              </span>
            </div>
          </div>
        </div>

        {/* Structured Unit Grid */}
        <div className="liquid-glass-card p-8 sm:p-10 text-left">
          <div className="flex items-center gap-2 mb-8">
            <span className="liquid-badge text-xs">UNIT KERJA</span>
            <h3 className="text-2xl font-black text-white">
              Garis Koordinasi & Jabatan Fungsional
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {orgUnits.map((unit, idx) => (
              <div
                key={idx}
                className="liquid-glass p-5 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-sm group-hover:scale-110 transition-transform">
                      <i className={unit.icon}></i>
                    </div>
                    <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                      Unit {idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {unit.title}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-300/90 mt-1">
                    {unit.lead}
                  </p>
                  <p className="mt-2 text-xs text-slate-300/80 leading-relaxed">
                    {unit.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full liquid-glass-elevated rounded-3xl p-4 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2">
              <span className="text-sm font-bold text-white">
                Bagan Struktur Organisasi SMK Gema Nusantara
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="w-full max-h-[80vh] overflow-auto rounded-2xl bg-white p-2">
              <img
                src={chartImg}
                alt="Struktur Organisasi Full"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default StrukturOrganisasi;