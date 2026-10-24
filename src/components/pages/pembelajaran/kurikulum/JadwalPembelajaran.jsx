import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const scheduleData = {
  x: [
    {
      day: "Senin",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 07.45", title: "Upacara Bendera & Apel Pagi", room: "Lapangan Utama" },
        { time: "07.45 - 09.30", title: "Pendidikan Agama & Budi Pekerti", room: "R. Teori A1" },
        { time: "09.45 - 12.00", title: "Dasar-Dasar Kejuruan Otomotif / Perkantoran", room: "Lab Komputer / TEFA" },
        { time: "13.00 - 15.30", title: "Bahasa Indonesia & Literasi", room: "R. Teori A1" },
      ],
    },
    {
      day: "Selasa",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 09.30", title: "Matematika Terapan Vokasi", room: "R. Teori A1" },
        { time: "09.45 - 12.00", title: "Praktik Gambar Teknik / Otomasi Kantor", room: "Lab Desain & Komputer" },
        { time: "13.00 - 15.30", title: "Bahasa Inggris Komunikasi Bisnis", room: "Lab Bahasa" },
      ],
    },
    {
      day: "Rabu",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 12.00", title: "Blok Praktik Bengkel Dasar TKR / Simulasi Kantor MP", room: "Bengkel TEFA 1" },
        { time: "13.00 - 15.30", title: "Pendidikan Pancasila & Kewarganegaraan", room: "R. Teori A1" },
      ],
    },
    {
      day: "Kamis",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 09.30", title: "Informatika & Literasi Digital", room: "Lab Komputer 1" },
        { time: "09.45 - 12.00", title: "Projek IPAS (Ilmu Pengetahuan Alam & Sosial)", room: "Lab Sains" },
        { time: "13.00 - 15.30", title: "Sejarah & Muatan Lokal", room: "R. Teori A1" },
      ],
    },
    {
      day: "Jumat",
      hours: "07.00 - 11.30",
      subjects: [
        { time: "07.00 - 08.00", title: "Senam Pagi & Kebersihan 5S", room: "Area Kampus" },
        { time: "08.00 - 10.30", title: "Pendidikan Jasmani, Olahraga & Kesehatan", room: "Lapangan Olahraga" },
        { time: "10.30 - 11.30", title: "Bimbingan Rohani / Sholat Jumat", room: "Mushola Al-Fath" },
      ],
    },
  ],
  xi: [
    {
      day: "Senin",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 07.45", title: "Apel Kedisiplinan Kerja", room: "Lapangan Utama" },
        { time: "07.45 - 12.00", title: "Pemeliharaan Mesin Kendaraan Ringan (PMKR) / Otomasi Humas", room: "Bengkel Engine TKR" },
        { time: "13.00 - 15.30", title: "Bahasa Inggris Teknik / Korespondensi", room: "Lab Bahasa" },
      ],
    },
    {
      day: "Selasa",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 12.00", title: "Pemeliharaan Sasis & Pemindah Tenaga (PSPT) / Kearsipan", room: "Bengkel Sasis" },
        { time: "13.00 - 15.30", title: "Matematika Terapan Industri", room: "R. Teori B2" },
      ],
    },
    {
      day: "Rabu",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 12.00", title: "Kelistrikan Otomotif & ECU / Tata Kelola Keuangan", room: "Lab Kelistrikan" },
        { time: "13.00 - 15.30", title: "Produk Kreatif & Kewirausahaan (PKK)", room: "R. TEFA" },
      ],
    },
    {
      day: "Kamis",
      hours: "07.00 - 15.30",
      subjects: [
        { time: "07.00 - 12.00", title: "Kelas Industri MMKI (Kaizen & Kiken Yochi)", room: "Ruang Industri MMKI" },
        { time: "13.00 - 15.30", title: "Pendidikan Agama & Budi Pekerti", room: "R. Teori B2" },
      ],
    },
    {
      day: "Jumat",
      hours: "07.00 - 11.30",
      subjects: [
        { time: "07.00 - 08.30", title: "Penguatan Budaya Kerja Industri (5S)", room: "Bengkel TEFA" },
        { time: "08.30 - 11.00", title: "Bimbingan Karier & Persiapan Prakerin", room: "Aula Utama" },
      ],
    },
  ],
  xii: [
    {
      day: "Senin - Jumat",
      hours: "08.00 - 16.30",
      subjects: [
        { time: "Blok 1 (Semester Ganjil)", title: "Praktik Kerja Industri (Prakerin) / Magang DUDI", room: "PT MMKI / Musashi / Astra / Perkantoran" },
        { time: "Blok 2 (Semester Genap)", title: "Pemantapan Uji Kompetensi Keahlian (UKK) & Asesmen BNSP", room: "Teaching Factory GENUS" },
        { time: "Blok 2 Lanjutan", title: "Pelatihan Bahasa & Budaya Program LPK Jepang", room: "Lab Bahasa Internasional" },
      ],
    },
  ],
};

const JadwalPembelajaran = () => {
  const [activeGrade, setActiveGrade] = useState("x");

  return (
    <PageLayout
      badge="MANAJEMEN KELAS"
      badgeVariant="cyan"
      title="Jadwal Pembelajaran"
      gradientText="& Rotasi Praktik"
      subtitle="Struktur waktu pembelajaran teori dan blok praktik intensif teaching factory untuk seluruh tingkat kelas SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Kurikulum", to: "/pembelajaran" },
        { label: "Jadwal Pembelajaran" },
      ]}
    >
      <div className="flex flex-col gap-8 text-left">
        {/* Grade Tab Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 liquid-glass-card p-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveGrade("x")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeGrade === "x"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Kelas X (Fondasi Kejuruan)
            </button>
            <button
              onClick={() => setActiveGrade("xi")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeGrade === "xi"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Kelas XI (Praktik Industri)
            </button>
            <button
              onClick={() => setActiveGrade("xii")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeGrade === "xii"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Kelas XII (Prakerin & UKK)
            </button>
          </div>

          <span className="liquid-badge text-xs hidden sm:inline-flex">
            Tahun Ajaran 2025/2026
          </span>
        </div>

        {/* Schedule Cards */}
        <div className="space-y-6">
          {scheduleData[activeGrade].map((schedule, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 sm:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-sm">
                    <i className="far fa-calendar-check"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{schedule.day}</h3>
                    <span className="text-xs text-slate-400">Jam Belajar: {schedule.hours}</span>
                  </div>
                </div>
                <span className="liquid-badge text-[10px]">Aktif</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {schedule.subjects.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-cyan-400 block mb-1">
                        <i className="far fa-clock mr-1"></i> {sub.time}
                      </span>
                      <h4 className="text-sm font-bold text-white">{sub.title}</h4>
                    </div>
                    <span className="mt-3 text-xs text-slate-400 flex items-center gap-1.5">
                      <i className="fas fa-location-dot text-cyan-400/80 text-[10px]"></i>
                      <span>{sub.room}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default JadwalPembelajaran;