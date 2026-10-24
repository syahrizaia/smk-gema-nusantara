import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const extracurriculars = [
  // Kepanduan
  {
    name: "Paskibra (Pasukan Pengibar Bendera)",
    category: "kepanduan",
    icon: "fas fa-flag",
    badge: "Bela Negara",
    schedule: "Rabu & Sabtu (15.30 - 17.30)",
    coach: "Pelatih Kodim & Purna Paskibra",
    desc: "Melatih kedisiplinan fisik, kekompakan baris-berbaris, pembentukan postur tegap, dan mental kepemimpinan tangguh.",
    achievements: "Juara LKBB Tingkat Kabupaten Bekasi",
  },
  {
    name: "Gerakan Pramuka Gudep GENUS",
    category: "kepanduan",
    icon: "fas fa-campground",
    badge: "Karakter",
    schedule: "Jumat (13.30 - 16.00)",
    coach: "Pembina Mahir Pramuka",
    desc: "Wadah penanaman Dasa Darma, keterampilan survival, tali-temali perintis, pioneering, serta kepedulian lingkungan.",
    achievements: "Gudep Tergiat Kwartir Cabang",
  },
  {
    name: "Palang Merah Remaja (PMR Wira)",
    category: "kepanduan",
    icon: "fas fa-kit-medical",
    badge: "Kemanusiaan",
    schedule: "Kamis (15.30 - 17.00)",
    coach: "Fasilitator PMI Kab. Bekasi",
    desc: "Membekali siswa keterampilan pertolongan pertama pada kecelakaan (P3K), kesiapsiagaan bencana, dan donor darah.",
    achievements: "Juara 1 Pertolongan Pertama PMR Wira",
  },
  // Olahraga
  {
    name: "Futsal Club GENUS",
    category: "olahraga",
    icon: "fas fa-futbol",
    badge: "Olahraga",
    schedule: "Selasa & Jumat (16.00 - 18.00)",
    coach: "Pelatih Lisensi Nasional",
    desc: "Mengasah strategi taktik lapangan, stamina prima, serta sportivitas dalam turnamen antarsekolah tingkat Jawa Barat.",
    achievements: "Juara Turnamen Vokasi Cup Bekasi",
  },
  {
    name: "Basketball Team",
    category: "olahraga",
    icon: "fas fa-basketball",
    badge: "Olahraga",
    schedule: "Senin & Kamis (16.00 - 18.00)",
    coach: "Coach Perbasi Regional",
    desc: "Latihan fundamental dribbling, shooting, defence press, dan kerja sama tim yang solid.",
    achievements: "Semifinalis DBL Regional Series",
  },
  {
    name: "Pencak Silat & Bela Diri",
    category: "olahraga",
    icon: "fas fa-hand-fist",
    badge: "Seni Bela Diri",
    schedule: "Rabu (16.00 - 18.00)",
    coach: "Pendekar IPSI Jawa Barat",
    desc: "Melestarikan seni beladiri warisan nusantara sembari melatih ketahanan fisik, refleks, dan kerendahan hati.",
    achievements: "Medali Emas Kejurda Pelajar",
  },
  // Kesenian & IT
  {
    name: "Multimedia, Desain & Jurnalistik",
    category: "keterampilan",
    icon: "fas fa-camera",
    badge: "Kreatif",
    schedule: "Kamis (15.30 - 17.30)",
    coach: "Praktisi Kreatif Industri",
    desc: "Keahlian videografi, fotografi jurnalistik, tata letak majalah sekolah, dan kurasi konten media sosial kampus.",
    achievements: "Juara Video Kreatif Edukasi Vokasi",
  },
  {
    name: "Robotika & Otomasi Mekatronika",
    category: "keterampilan",
    icon: "fas fa-robot",
    badge: "Teknologi",
    schedule: "Sabtu (09.00 - 12.00)",
    coach: "Instruktur TEFA & Mikrokontroler",
    desc: "Eksplorasi sensor Arduino, PLC industri dasar, line follower robot, dan logika otomasi pabrik.",
    achievements: "Best Innovation Robotika Pelajar",
  },
  {
    name: "Seni Musik & Band Vokasi",
    category: "seni",
    icon: "fas fa-guitar",
    badge: "Kesenian",
    schedule: "Selasa (15.30 - 17.30)",
    coach: "Instruktur Musik Profesional",
    desc: "Menyalurkan bakat aransemen instrumen musik, olah vokal, dan persiapan unjuk gelar seni tahunan.",
    achievements: "Pengisi Tetap Event Pentas Seni & Expo",
  },
];

const EkstrakurikulerSiswa = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEkskul =
    activeCategory === "all"
      ? extracurriculars
      : extracurriculars.filter((e) => e.category === activeCategory);

  return (
    <PageLayout
      badge="PENGEMBANGAN DIRI"
      badgeVariant="cyan"
      title="Ekstrakurikuler Siswa"
      gradientText="& Bakat Minat"
      subtitle="Wadah pembentukan karakter, kepemimpinan, sportivitas, dan kreativitas siswa di luar jam akademik intrakurikuler."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Kegiatan", to: "/pembelajaran" },
        { label: "Ekstrakurikuler" },
      ]}
    >
      <div className="flex flex-col gap-8 text-left">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full liquid-glass border border-white/15 w-fit">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Semua Ekskul ({extracurriculars.length})
          </button>
          <button
            onClick={() => setActiveCategory("kepanduan")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "kepanduan"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Kepanduan & Bela Negara
          </button>
          <button
            onClick={() => setActiveCategory("olahraga")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "olahraga"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Olahraga
          </button>
          <button
            onClick={() => setActiveCategory("keterampilan")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "keterampilan"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Keterampilan & IT
          </button>
          <button
            onClick={() => setActiveCategory("seni")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "seni"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Seni & Budaya
          </button>
        </div>

        {/* Ekskul Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEkskul.map((ekskul, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={ekskul.icon}></i>
                  </div>
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                    {ekskul.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ekskul.name}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {ekskul.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="far fa-clock text-cyan-400 text-[10px]"></i>
                    <span>{ekskul.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user-check text-cyan-400 text-[10px]"></i>
                    <span className="text-slate-300/80">{ekskul.coach}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-trophy text-amber-400 text-[10px]"></i>
                  <span className="line-clamp-1">{ekskul.achievements}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default EkstrakurikulerSiswa;