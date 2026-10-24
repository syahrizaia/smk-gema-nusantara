import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const metrics = [
  { label: "Indeks Kepuasan Masyarakat", val: "88.6%", status: "Sangat Baik (Mutu A)", icon: "fas fa-award" },
  { label: "Total Responden Masuk", val: "1.420+", status: "Siswa, Ortu, & Alumni", icon: "fas fa-users" },
  { label: "Tingkat Penyelesaian Layanan", val: "99.2%", status: "Sesuai Standar Waktu", icon: "fas fa-circle-check" },
];

const SurveiKepuasanPelanggan = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState({
    speed: 5,
    clarity: 5,
    courtesy: 5,
    facility: 5,
    integrity: 5,
  });
  const [comment, setComment] = useState("");
  const [respondentType, setRespondentType] = useState("Siswa Aktif");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      badge="PENJAMINAN MUTU LAYANAN"
      badgeVariant="emerald"
      title="Survei Kepuasan"
      gradientText="Pelanggan (SKP)"
      subtitle="Kanal evaluasi berkala bagi masyarakat untuk mengukur kepuasan pelayanan administrasi, pengajaran, dan fasilitas di SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Survei Kepuasan" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Top IKM KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{m.label}</span>
                <i className={`${m.icon} text-emerald-400 text-lg`}></i>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white">{m.val}</span>
                <p className="text-xs text-emerald-400 font-semibold mt-1">{m.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Survey Form Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-12">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <span className="liquid-badge-emerald text-xs mb-2">TERIMA KASIH ATAS KONTRIBUSI ANDA</span>
              <h3 className="text-2xl font-black text-white">
                Survei Anda Telah Berhasil Terkirim
              </h3>
              <p className="text-slate-300 text-sm mt-3 max-w-md">
                Aspirasi dan penilaian Anda sangat berharga bagi peningkatan mutu berkelanjutan (Kaizen) layanan pendidikan dan tata kelola di SMK Gema Nusantara.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 liquid-btn-primary !text-xs !py-2.5 !px-6"
              >
                Isi Survei Kembali
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-3xl mx-auto">
              <div>
                <span className="liquid-badge text-xs mb-2">KUISIONER DIGITAL</span>
                <h3 className="text-2xl font-black text-white">
                  Formulir Penilaian Pelayanan Publik
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Beri penilaian objektif (skala 1–5 bintang) pada indikator-indikator pelayanan di bawah ini.
                </p>
              </div>

              {/* Respondent Category */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Kategori Responden:
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Siswa Aktif", "Orang Tua / Wali Murid", "Alumni", "Mitra Industri (DUDI)", "Masyarakat Umum"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setRespondentType(type)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        respondentType === type
                          ? "bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 shadow-sm"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5 Rating Criteria */}
              <div className="space-y-5 pt-4 border-t border-white/10">
                {[
                  { key: "speed", label: "1. Kecepatan Respon & Ketepatan Waktu Pelayanan" },
                  { key: "clarity", label: "2. Kejelasan Informasi, Prosedur, & Persyaratan Layanan" },
                  { key: "courtesy", label: "3. Sikap Ramah, Kesopanan, & Responsif Petugas" },
                  { key: "facility", label: "4. Kualitas Sarana, Kenyamanan Ruang, & Kebersihan 5S" },
                  { key: "integrity", label: "5. Kejujuran, Transparansi, & Bebas dari Pungli" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRatings({ ...ratings, [item.key]: star })}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                            ratings[item.key] >= star
                              ? "bg-amber-400 text-slate-950 font-bold scale-105 shadow-md"
                              : "bg-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <i className="fas fa-star text-xs"></i>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions / Comments */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Saran & Masukan Konstruktif untuk SMK Gema Nusantara:
                </label>
                <textarea
                  rows="3"
                  placeholder="Tuliskan masukan Anda demi kemajuan sekolah kami..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="liquid-input !text-xs"
                ></textarea>
              </div>

              <button type="submit" className="liquid-btn-primary !w-full !py-3">
                <i className="fas fa-check-circle mr-1 text-sm"></i>
                <span>Kirim Penilaian Kepuasan</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default SurveiKepuasanPelanggan;