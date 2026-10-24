import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";
import { dataLulusan } from "../../../service/data";

const alumniStories = [
  {
    name: "Rizki Pratama",
    role: "Automation Maintenance Specialist",
    company: "PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)",
    batch: "Angkatan 61 (TKR)",
    quote: "Keterampilan diagnostik mesin dan budaya kerja Kaizen 5S yang diajarkan di SMK Gema Nusantara membuat saya langsung adaptif di lini produksi manufaktur otomotif Jepang sejak hari pertama."
  },
  {
    name: "Safitri Nurul Aini",
    role: "Senior Executive Administrative Officer",
    company: "PT Astra International Tbk - Auto2000",
    batch: "Angkatan 62 (MP)",
    quote: "Simulasi kantor digital dan pengarsipan modern di lab MP SMK GN sangat aplikatif dengan sistem ERP perusahaan multinasional tempat saya berkarier saat ini."
  },
  {
    name: "Dedi Supriyadi",
    role: "Quality Control & Precision Machining",
    company: "PT Musashi Auto Parts Indonesia",
    batch: "Angkatan 60 (TKR)",
    quote: "Fasilitas workshop dan bimbingan guru-guru bersertifikasi BNSP menjadi fondasi kuat yang membedakan kualitas lulusan Gema Nusantara dengan sekolah lain."
  }
];

const Lulusan = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <PageLayout
      badge="Tracer Study & Alumni"
      title="Jejak Langkah & Keterserapan Alumni"
      subtitle="Membentuk lulusan vokasi berdaya saing global yang terserap dengan masa tunggu rata-rata kurang dari 6 bulan di sektor industri manufaktur multinasional, wirausaha mandiri, dan perguruan tinggi negeri."
      breadcrumbs={[
        { label: "Lulusan" }
      ]}
    >
      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-blue-400 mb-1 font-heading">87.4%</p>
          <p className="text-xs text-slate-300">Terserap Bekerja & Wirausaha</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-cyan-400 mb-1 font-heading">&lt; 6 Bln</p>
          <p className="text-xs text-slate-300">Rata-rata Masa Tunggu Kerja</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-indigo-400 mb-1 font-heading">50+</p>
          <p className="text-xs text-slate-300">Mitra Industri Terikat MoU</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-heading">100%</p>
          <p className="text-xs text-slate-300">Berijazah & Sertifikat BNSP</p>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          to="/lulusan/keterserapan-lulusan"
          className="liquid-card p-6 group hover:border-blue-400/50 transition-all duration-300 flex items-center justify-between"
        >
          <div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-400/30 mb-2 inline-block">
              Analisis Statistik
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
              <span>Data Keterserapan Lulusan</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Rincian persentase serapan dunia kerja, wirausaha mandiri, dan studi lanjut.
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-lg group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-chart-column"></i>
          </div>
        </Link>

        <Link
          to="/lulusan/industri-mitra"
          className="liquid-card p-6 group hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-between"
        >
          <div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 mb-2 inline-block">
              Jejaring Strategis
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span>Daftar Industri Mitra</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Eksplorasi puluhan korporasi manufaktur multinasional dan instansi rekanan.
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-handshake"></i>
          </div>
        </Link>
      </div>

      {/* Batch Data Content Showcase (from dataLulusan) */}
      <div className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="liquid-badge mb-2">Dokumentasi Angkatan</span>
          <h2 className="text-2xl font-bold text-white font-heading">
            Laporan Keterserapan Angkatan Resmi
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Klik foto atau diagram di bawah ini untuk melihat dalam resolusi tinggi.
          </p>
        </div>

        {dataLulusan && dataLulusan.dataContent && dataLulusan.dataContent.map((item) => (
          <div key={item.id} className="liquid-card p-6 md:p-8 mb-8 border-white/10">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                  Buku Tahunan Alumni
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading mt-0.5">
                  {item.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-slate-300 border border-white/10">
                Terverifikasi BKK
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.image1 && (
                <div
                  onClick={() => setSelectedImg(item.image1)}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/50 cursor-pointer group relative"
                >
                  <img
                    loading="lazy"
                    src={item.image1}
                    alt={`${item.title} - Grafik Keterserapan`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                    <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                    <span>Perbesar Grafik</span>
                  </div>
                </div>
              )}

              {item.image2 && (
                <div
                  onClick={() => setSelectedImg(item.image2)}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/50 cursor-pointer group relative"
                >
                  <img
                    loading="lazy"
                    src={item.image2}
                    alt={`${item.title} - Foto Bersama`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                    <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                    <span>Perbesar Foto</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Alumni Testimonials */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="liquid-badge mb-2">Kisah Sukses</span>
          <h2 className="text-2xl font-bold text-white font-heading">
            Testimoni Alumni di Dunia Industri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniStories.map((alumnus, idx) => (
            <div
              key={idx}
              className="liquid-card p-6 flex flex-col justify-between group hover:border-blue-400/40 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 text-amber-400 text-xs mb-3">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                  "{alumnus.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-bold text-white">{alumnus.name}</p>
                <p className="text-xs text-blue-400 font-medium">{alumnus.role}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{alumnus.company}</p>
                <span className="text-[10px] text-slate-500 block mt-1">{alumnus.batch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 bg-slate-900 p-2 shadow-2xl">
            <img
              src={selectedImg}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center border border-white/20 hover:bg-red-500/80 transition-colors cursor-pointer text-xs"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Lulusan;