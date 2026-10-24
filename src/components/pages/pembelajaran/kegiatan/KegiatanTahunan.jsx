import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";
import { dataKegiatanTahunan } from "../../../../service/data";

const annualEvents = [
  {
    month: "Januari - Februari",
    title: "School Musashi Olympic Measuring Competition",
    desc: "Ajang uji presisi alat ukur mikrometer dan jangka sorong berstandar pabrik Jepang bersama instruktur PT Musashi Auto Parts.",
    tag: "Kompetisi Industri",
  },
  {
    month: "Maret - April",
    title: "Kaizen Contest MMKI & Uji Kompetensi Keahlian (UKK)",
    desc: "Presentasi proyek inovasi efisiensi kerja 5S bersama PT Mitsubishi Motors Krama Yudha Indonesia dan sertifikasi BNSP.",
    tag: "Sertifikasi & Kaizen",
  },
  {
    month: "Juli",
    title: "Masa Pengenalan Lingkungan Sekolah (MPLS) Vokasi",
    desc: "Pembekalan budaya kerja industri, pengenalan bengkel TEFA, dan penanaman disiplin bagi peserta didik baru.",
    tag: "Karakter Siswa",
  },
  {
    month: "Agustus - September",
    title: "GENUS Vokasi Expo & Peringatan Kemerdekaan",
    desc: "Pameran hasil karya rakitan otomotif dan produk kreatif perkantoran siswa, diramaikan turnamen olahraga antarkelas.",
    tag: "Expo & Budaya",
  },
  {
    month: "Oktober - November",
    title: "Latihan Dasar Kepemimpinan Siswa (LDKS) & Pemilu OSIS",
    desc: "Pelatihan kepemimpinan, kepribadian, manajemen waktu, dan regenerasi kepengurusan Persatuan Pelajar GENUS.",
    tag: "Kepemimpinan",
  },
  {
    month: "Desember",
    title: "Penyerahan Rapor Semester & Job Fair BKK",
    desc: "Evaluasi capaian belajar, rekrutmen awal kerja bagi kelas XII, dan persiapan keberangkatan peserta LPK Jepang.",
    tag: "Akademik & Karier",
  },
];

const KegiatanTahunan = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <PageLayout
      badge="AGENDA & EVENT TAHUNAN"
      badgeVariant="cyan"
      title="Kalender Kegiatan"
      gradientText="Tahunan Siswa"
      subtitle="Rangkaian agenda kompetisi industri, pembinaan mental disiplin, dan pameran karya inovasi vokasi sepanjang tahun ajaran."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Kegiatan", to: "/pembelajaran" },
        { label: "Kegiatan Tahunan" },
      ]}
    >
      <div className="flex flex-col gap-12 text-left">
        {/* Annual Event Grid */}
        <div className="liquid-glass-card p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="liquid-badge text-xs mb-2">SIKLUS KEGIATAN</span>
            <h3 className="text-2xl font-black text-white">
              Agenda Tahunan Unggulan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Setiap tahun siswa dibekali kegiatan berbobot yang menyeimbangkan kompetensi teknis kejuruan, kepemimpinan organisasi, dan kebugaran jasmani.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annualEvents.map((evt, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-cyan-400">
                      {evt.month}
                    </span>
                    <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                      {evt.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {evt.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Musashi Olympic Gallery Card */}
        <div className="liquid-glass-card p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="liquid-badge text-xs mb-2">DOKUMENTASI FOTO</span>
              <h3 className="text-2xl font-black text-white">
                School Musashi Olympic 2.0 Measuring Competition
              </h3>
            </div>
            <span className="liquid-badge-amber text-xs">
              <i className="fas fa-camera mr-1.5"></i> 8 Dokumentasi Resmi
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataKegiatanTahunan.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImg(item.image)}
                className="liquid-glass rounded-2xl overflow-hidden aspect-square border border-white/15 cursor-pointer group relative bg-slate-900"
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={`Kegiatan ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="fas fa-expand text-white text-lg"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full liquid-glass-elevated rounded-3xl p-4 border border-white/20 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-2">
              <span className="text-sm font-bold text-white">
                School Musashi Olympic 2.0 Dokumentasi
              </span>
              <button
                onClick={() => setSelectedImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="w-full max-h-[80vh] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
              <img src={selectedImg} alt="Preview" className="max-h-[80vh] w-auto object-contain" />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default KegiatanTahunan;