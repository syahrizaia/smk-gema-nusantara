import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const generalSubjects = [
  { no: "1", name: "Pendidikan Agama dan Budi Pekerti", hours: "108 JP" },
  { no: "2", name: "Pendidikan Pancasila dan Kewarganegaraan", hours: "72 JP" },
  { no: "3", name: "Bahasa Indonesia (Komunikasi Efektif)", hours: "108 JP" },
  { no: "4", name: "Pendidikan Jasmani, Olahraga, dan Kesehatan", hours: "108 JP" },
  { no: "5", name: "Sejarah Indonesia", hours: "72 JP" },
  { no: "6", name: "Seni Budaya dan Kearifan Lokal", hours: "72 JP" },
];

const vocationalTKR = [
  { no: "1", name: "Matematika Terapan Vokasi", hours: "108 JP", category: "Dasar" },
  { no: "2", name: "Bahasa Inggris Teknik Otomotif", hours: "108 JP", category: "Dasar" },
  { no: "3", name: "Informatika & Logika Komputasi", hours: "144 JP", category: "Dasar" },
  { no: "4", name: "Projek IPAS (Fisika & Kimia Terapan)", hours: "216 JP", category: "Dasar" },
  { no: "5", name: "Dasar-Dasar Teknik Otomotif (Gambar Teknik, Alat Ukur, 5S)", hours: "432 JP", category: "Keahlian" },
  { no: "6", name: "Pemeliharaan Mesin Kendaraan Ringan (Engine & EFI)", hours: "372 JP", category: "Konsentrasi" },
  { no: "7", name: "Pemeliharaan Sasis & Pemindah Tenaga (Chassis & Transmission)", hours: "348 JP", category: "Konsentrasi" },
  { no: "8", name: "Pemeliharaan Kelistrikan Otomotif & ECU Diagnostic Scanner", hours: "348 JP", category: "Konsentrasi" },
  { no: "9", name: "Kelas Industri MMKI (Kaizen, Kiken Yochi & Standar Pabrik)", hours: "144 JP", category: "Industri" },
  { no: "10", name: "Produk Kreatif dan Kewirausahaan (PKK)", hours: "180 JP", category: "Vokasi" },
  { no: "11", name: "Praktik Kerja Lapangan (PKL / Prakerin 6 Bulan)", hours: "792 JP", category: "Industri" },
];

const vocationalMP = [
  { no: "1", name: "Matematika Bisnis & Statistika Perkantoran", hours: "108 JP", category: "Dasar" },
  { no: "2", name: "Bahasa Inggris Komunikasi Bisnis & Korespondensi", hours: "108 JP", category: "Dasar" },
  { no: "3", name: "Informatika & Spreadsheet Analitika", hours: "144 JP", category: "Dasar" },
  { no: "4", name: "Projek IPAS Terapan Perkantoran", hours: "216 JP", category: "Dasar" },
  { no: "5", name: "Dasar-Dasar Manajemen Perkantoran & Layanan Bisnis", hours: "432 JP", category: "Keahlian" },
  { no: "6", name: "Teknologi Perkantoran Digital & Otomasi Tata Kelola", hours: "372 JP", category: "Konsentrasi" },
  { no: "7", name: "Pengelolaan Kearsipan Elektronik & E-Document", hours: "348 JP", category: "Konsentrasi" },
  { no: "8", name: "Komunikasi Bisnis, Humas & Keprotokolan Eksekutif", hours: "348 JP", category: "Konsentrasi" },
  { no: "9", name: "Tata Kelola Keuangan & Administrasi Perpajakan", hours: "144 JP", category: "Konsentrasi" },
  { no: "10", name: "Produk Kreatif dan Kewirausahaan (PKK)", hours: "180 JP", category: "Vokasi" },
  { no: "11", name: "Praktik Kerja Lapangan (PKL / Prakerin 6 Bulan)", hours: "792 JP", category: "Industri" },
];

const StrukturKurikulum = () => {
  const [activeJurusan, setActiveJurusan] = useState("tkr");

  const currentVocational = activeJurusan === "tkr" ? vocationalTKR : vocationalMP;

  return (
    <PageLayout
      badge="STANDAR KOMPETENSI"
      badgeVariant="cyan"
      title="Struktur Kurikulum"
      gradientText="Berbasis Industri"
      subtitle="Kurikulum Merdeka Vokasi yang dirancang sinkron dengan SKKNI dan kebutuhan riil manufaktur otomotif serta tata kelola perkantoran digital modern."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Kurikulum", to: "/pembelajaran" },
        { label: "Struktur Kurikulum" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Intro Highlight */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-10 border-cyan-500/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="liquid-badge text-xs">LINK & MATCH</span>
            <span className="text-xs text-cyan-400 font-semibold">
              Kemendikbudristek & DUDI
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Distribusi Jam Pelajaran (JP) & Muatan Kejuruan
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Kurikulum SMK Gema Nusantara tersusun atas Kelompok Mata Pelajaran Umum untuk pembentukan karakter dan integritas bangsa, serta Kelompok Mata Pelajaran Kejuruan yang mengedepankan rasio praktik 70% di Teaching Factory dan magang industri bersertifikat.
          </p>
        </div>

        {/* Kelompok Mata Pelajaran Umum */}
        <div className="liquid-glass-card p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <h3 className="text-xl font-bold text-white">
              Kelompok A: Mata Pelajaran Umum (Fondasi Karakter)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Mata Pelajaran</th>
                  <th className="py-3 px-4 text-right">Alokasi Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-200">
                {generalSubjects.map((sub) => (
                  <tr key={sub.no} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-slate-400 text-xs">{sub.no}</td>
                    <td className="py-3 px-4 font-medium">{sub.name}</td>
                    <td className="py-3 px-4 text-right text-cyan-300 font-semibold text-xs">
                      {sub.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kelompok Mata Pelajaran Kejuruan with Tab */}
        <div className="liquid-glass-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <h3 className="text-xl font-bold text-white">
                Kelompok B: Kejuruan & Konsentrasi Keahlian
              </h3>
            </div>

            {/* Program Switcher */}
            <div className="flex items-center gap-2 liquid-glass p-1 rounded-full border border-white/15">
              <button
                onClick={() => setActiveJurusan("tkr")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeJurusan === "tkr"
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Teknik Kendaraan Ringan
              </button>
              <button
                onClick={() => setActiveJurusan("mp")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeJurusan === "mp"
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Manajemen Perkantoran
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Kompetensi & Modul</th>
                  <th className="py-3 px-4">Tipe</th>
                  <th className="py-3 px-4 text-right">Alokasi Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-200">
                {currentVocational.map((item) => (
                  <tr key={item.no} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 text-slate-400 text-xs">{item.no}</td>
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-cyan-300 font-bold text-xs">
                      {item.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StrukturKurikulum;