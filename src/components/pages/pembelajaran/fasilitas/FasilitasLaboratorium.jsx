import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const labList = [
  {
    id: 1,
    title: "Laboratorium Engine & Injeksi Otomotif (TKR)",
    jurusan: "Teknik Kendaraan Ringan",
    icon: "fas fa-car-battery",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil2.jpg",
    specs: [
      "Mesin Toyota & Mitsubishi Live Engine Stand",
      "EFI Diagnostic Scanner OBD-II Autel & Launch",
      "Fuel Injector Ultrasonic Cleaner & Tester",
      "Cutaway Engine Demonstrator 4-Tak",
    ],
    desc: "Tempat siswa menguasai overhaul mesin, sistem bahan bakar injeksi elektronik, penyetelan katup, dan analisis kode kerusakan (DTC) secara presisi.",
  },
  {
    id: 2,
    title: "Bengkel Teaching Factory (TEFA) Servis Mobil",
    jurusan: "Teknik Kendaraan Ringan",
    icon: "fas fa-wrench",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil41.jpg",
    specs: [
      "2-Post Car Lift Hidrolik 4 Ton",
      "Wheel Alignment 3D & Dynamic Wheel Balancer",
      "Automatic Tyre Changer & Nitrogen Generator",
      "Air Compressor Heavy Duty & Pit Standar MMKI",
    ],
    desc: "Bengkel produksi yang melayani servis nyata kendaraan roda empat, melatih budaya kerja 5S pabrik dan kecepatan kerja mekanik profesional.",
  },
  {
    id: 3,
    title: "Laboratorium Sasis & Kelistrikan Otomotif",
    jurusan: "Teknik Kendaraan Ringan",
    icon: "fas fa-bolt",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/School-Musashi-Olympic-2.0-Measuring-Competition-7-1024x1024.jpg",
    specs: [
      "Electrical Wiring Trainer Simulator Full Body",
      "ABS & Brake System Hydraulic Bench",
      "Mikrometer Digital Mitutoyo 0.001mm",
      "Oscilloscope Otomotif & Multitester Digital",
    ],
    desc: "Fasilitas pelatihan kelistrikan bodi, sistem pendingin kabin (AC mobil), sensor-sensor keselamatan, serta lomba presisi Musashi Olympic.",
  },
  {
    id: 4,
    title: "Laboratorium Komputer & Otomasi Kantor (MP)",
    jurusan: "Manajemen Perkantoran",
    icon: "fas fa-desktop",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil3.jpg",
    specs: [
      "40 Unit PC Intel Core i5 dengan SSD & RAM 16GB",
      "Jaringan LAN Gigabit & Internet Fiber-Optic 200 Mbps",
      "Software Administrasi Perkantoran & ERP Suite",
      "High-Speed Document Scanner & Thermal Printer",
    ],
    desc: "Laboratorium komputer mutakhir untuk melatih kecepatan pengetikan 10 jari, pengolahan spreadsheet keuangan, dan kearsipan berbasis cloud.",
  },
  {
    id: 5,
    title: "Laboratorium Simulasi Kantor Modern Eksekutif",
    jurusan: "Manajemen Perkantoran",
    icon: "fas fa-briefcase",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil5.jpg",
    specs: [
      "Layout Meja Resepsionis & Ruang Direksi",
      "Telepon PABX Multi-line & Intercom System",
      "Mesin Penghancur Kertas & Filing Cabinet Mobile",
      "Smart Interactive Display untuk Rapat Presentasi",
    ],
    desc: "Ruang simulasi yang menyerupai kantor korporat sungguhan, melatih etika komunikasi telepon, tata naskah dinas, dan keprotokolan acara resmi.",
  },
  {
    id: 6,
    title: "Laboratorium Bahasa & Multimedia Vokasi",
    jurusan: "Umum & Karir Global",
    icon: "fas fa-headphones-simple",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil6.jpg",
    specs: [
      "Master Console Audio-Visual Interaktif",
      "Headset Noise-Cancelling untuk 40 Siswa",
      "Modul Bahasa Jepang Vokasi (LPK Jepang)",
      "Software Persiapan Tes TOEIC Internasional",
    ],
    desc: "Mempersiapkan kemahiran bahasa asing (Inggris & Jepang) bagi calon peserta magang industri luar negeri dan beasiswa internasional.",
  },
];

const FasilitasLaboratorium = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  return (
    <PageLayout
      badge="SARANA PRAKTIK TEFA"
      badgeVariant="cyan"
      title="Laboratorium & Bengkel"
      gradientText="Teaching Factory"
      subtitle="Ruang praktik berstandar industri nyata yang dilengkapi instrumen presisi tinggi untuk membentuk kompetensi teknis siswa sejak di bangku sekolah."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Fasilitas", to: "/pembelajaran" },
        { label: "Laboratorium" },
      ]}
    >
      <div className="flex flex-col gap-8 text-left">
        {/* Grid of Laboratories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labList.map((lab) => (
            <div
              key={lab.id}
              onClick={() => setSelectedLab(lab)}
              className="liquid-glass-card liquid-sheen overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="liquid-badge text-[10px] !py-0.5 !px-2 bg-slate-900/80">
                      {lab.jurusan}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-base mb-3 group-hover:scale-110 transition-transform">
                    <i className={lab.icon}></i>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {lab.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {lab.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                <span>Spesifikasi & Alat</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lab Modal Detail */}
      {selectedLab && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedLab(null)}
        >
          <div
            className="relative max-w-2xl w-full liquid-glass-elevated rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="liquid-badge text-xs">{selectedLab.jurusan}</span>
              <button
                onClick={() => setSelectedLab(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <img
                src={selectedLab.image}
                alt={selectedLab.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white mb-2">
                {selectedLab.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {selectedLab.desc}
              </p>

              <div className="liquid-glass p-5 rounded-2xl border border-white/15">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
                  Peralatan & Instrumen Utama:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {selectedLab.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <i className="fas fa-check text-cyan-400 text-xs"></i>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default FasilitasLaboratorium;