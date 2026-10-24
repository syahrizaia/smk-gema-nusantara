import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const honorRollData = [
  {
    id: 1,
    name: "Alifia Zahra Maharani",
    major: "Manajemen Perkantoran (MP)",
    batch: "2024/2025",
    gpa: "93.4",
    ukkScore: "99.0",
    predicate: "Lulusan Terbaik I (Paripurna)",
    status: "Diterima Executive Admin PT Astra International Tbk",
    highlights: ["Sertifikasi BNSP Skema Administrasi Perkantoran", "Juara II LKS Digital Office Jabar", "Kehadiran 100% Selama 3 Tahun"]
  },
  {
    id: 2,
    name: "Farhan Maulana Yusuf",
    major: "Teknik Kendaraan Ringan Otomotif (TKR)",
    batch: "2024/2025",
    gpa: "92.8",
    ukkScore: "98.5",
    predicate: "Lulusan Terbaik I (TKR)",
    status: "Direkrut PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)",
    highlights: ["Juara I Kaizen Contest 2024", "Sertifikasi Asesor Muda EFI Diagnostic", "Nilai Uji Praktik Mesin Sempurna"]
  },
  {
    id: 3,
    name: "Putri Amanda Lestari",
    major: "Manajemen Perkantoran (MP)",
    batch: "2024/2025",
    gpa: "91.9",
    ukkScore: "97.5",
    predicate: "Lulusan Terbaik II (MP)",
    status: "Beasiswa Penuh S1 Administrasi Niaga Universitas Negeri",
    highlights: ["Ketua OSIS Periode 2023/2024", "Skor TOEIC Vokasi 765", "Inisiator Bank Sampah Digital Sekolah"]
  },
  {
    id: 4,
    name: "Rizky Dwi Kurniawan",
    major: "Teknik Kendaraan Ringan Otomotif (TKR)",
    batch: "2024/2025",
    gpa: "91.2",
    ukkScore: "97.0",
    predicate: "Lulusan Terbaik II (TKR)",
    status: "Diterima Quality Control PT Musashi Auto Parts Indonesia",
    highlights: ["Juara I Kiken Yochi Contest 2025", "Sertifikat Standar 5S & Zero Accident", "Mentor Praktik Kelistrikan Otomotif"]
  },
  {
    id: 5,
    name: "Dinda Kartika Sari",
    major: "Manajemen Perkantoran (MP)",
    batch: "2023/2024",
    gpa: "92.5",
    ukkScore: "98.0",
    predicate: "Lulusan Terbaik I (MP)",
    status: "Staff Finance & Billing PT Telkom Indonesia Regional",
    highlights: ["Keahlian Digital Archiving & ERP", "Peraih Sertifikat Kompetensi Skema Kasir & Tata Kelola", "Duta Literasi Sekolah"]
  },
  {
    id: 6,
    name: "Budi Santoso",
    major: "Teknik Kendaraan Ringan Otomotif (TKR)",
    batch: "2023/2024",
    gpa: "91.8",
    ukkScore: "97.8",
    predicate: "Lulusan Terbaik I (TKR)",
    status: "Peserta Program Magang Industri Manufaktur Jepang (IM Japan)",
    highlights: ["Sertifikasi Bahasa Jepang N4", "Juara III LKS Automobile Technology", "Penerima Beasiswa Apresiasi MMKI"]
  }
];

const BintangBelajar = () => {
  const [selectedBatch, setSelectedBatch] = useState("Semua");
  const [selectedMajor, setSelectedMajor] = useState("Semua");

  const batches = ["Semua", "2024/2025", "2023/2024"];
  const majors = ["Semua", "Teknik Kendaraan Ringan Otomotif (TKR)", "Manajemen Perkantoran (MP)"];

  const filtered = honorRollData.filter((item) => {
    const matchBatch = selectedBatch === "Semua" || item.batch === selectedBatch;
    const matchMajor = selectedMajor === "Semua" || item.major.includes(selectedMajor === "Teknik Kendaraan Ringan Otomotif (TKR)" ? "TKR" : "MP");
    return matchBatch && matchMajor;
  });

  return (
    <PageLayout
      badge="Hall of Fame"
      title="Bintang Belajar SMK Gema Nusantara"
      subtitle="Dewan kehormatan bagi putra-putri berprestasi paripurna yang menorehkan standar tertinggi dalam nilai akademik, Uji Kompetensi Keahlian (UKK), dan dedikasi profesional."
      breadcrumbs={[
        { label: "Prestasi", to: "/prestasi" },
        { label: "Bintang Belajar" }
      ]}
    >
      {/* Criteria Bento Card */}
      <div className="liquid-card p-6 md:p-8 mb-10 border-amber-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-3 inline-block">
              Standar Evaluasi Paripurna
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 font-heading">
              Kriteria Gelar Bintang Belajar
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Penghargaan Bintang Belajar diberikan kepada peserta didik yang memenuhi 4 pilar utama: Nilai Ujian Kompetensi Keahlian (UKK) &gt; 95.0, Rata-rata Nilai Rapor Kumulatif &gt; 90.0, Absensi Kehadiran &gt; 98%, serta memiliki portofolio kejuaraan atau sertifikasi industri tersumpah.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center min-w-[110px]">
              <p className="text-2xl font-extrabold text-amber-400 font-heading">&gt; 95.0</p>
              <p className="text-[11px] text-slate-400">Min. Skor UKK</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center min-w-[110px]">
              <p className="text-2xl font-extrabold text-cyan-400 font-heading">100%</p>
              <p className="text-[11px] text-slate-400">Terserap Cepat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400">Tahun Angkatan:</span>
          <div className="flex gap-1.5">
            {batches.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBatch(b)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedBatch === b
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "liquid-card text-slate-300 hover:text-white"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400">Konsentrasi:</span>
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="liquid-input px-3 py-1.5 text-xs text-slate-200 rounded-lg cursor-pointer"
          >
            {majors.map((m) => (
              <option key={m} value={m} className="bg-slate-900 text-white">
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honor Roll Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((student) => (
          <div
            key={student.id}
            className="liquid-card p-6 flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-500 relative overflow-hidden"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {student.predicate}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Angkatan {student.batch}
                </span>
              </div>

              {/* Avatar Icon & Identity */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-lg shadow-amber-500/20 font-heading">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-xs text-blue-400">{student.major}</p>
                </div>
              </div>

              {/* Scores Capsule */}
              <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Nilai UKK Vokasi</p>
                  <p className="text-lg font-extrabold text-emerald-400 font-heading">{student.ukkScore}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Rata-rata Rapor</p>
                  <p className="text-lg font-extrabold text-cyan-400 font-heading">{student.gpa}</p>
                </div>
              </div>

              {/* Status Placement */}
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 mb-4">
                <p className="text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-0.5">Status Pasca Lulus</p>
                <p className="text-xs text-slate-200 font-medium">{student.status}</p>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4">
                {student.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="fa-solid fa-circle-check text-amber-400 text-[10px] shrink-0"></i>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-right">
              <span className="text-[11px] text-slate-400 italic">
                Terverifikasi Dewan Guru & LSP SMK GN
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default BintangBelajar;