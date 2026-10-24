import React from "react";
import PageLayout from "../../Layouts/PageLayout";

const KeterserapanLulusan = () => {
  const distributionData = [
    { label: "Bekerja di Sektor Industri & Swasta", percentage: 72, color: "from-blue-500 to-cyan-400", count: "318 Lulusan" },
    { label: "Melanjutkan ke Perguruan Tinggi (PTN/PTS)", percentage: 15, color: "from-indigo-500 to-purple-400", count: "66 Lulusan" },
    { label: "Wirausaha Mandiri & Bengkel/Jasa", percentage: 9, color: "from-emerald-500 to-teal-400", count: "40 Lulusan" },
    { label: "Program Magang & Penempatan Luar Negeri", percentage: 4, color: "from-amber-500 to-orange-400", count: "18 Lulusan" }
  ];

  const waitingTimes = [
    { label: "Langsung Direkrut Sebelum Wisuda (Saat PKL)", percent: 38, badge: "Prioritas Industri" },
    { label: "1 s.d 3 Bulan Pasca Kelulusan", percent: 42, badge: "Standar BKK" },
    { label: "3 s.d 6 Bulan Pasca Kelulusan", percent: 15, badge: "Rekrutmen Mandiri" },
    { label: "Lebih dari 6 Bulan", percent: 5, badge: "Pelatihan Tambahan" }
  ];

  const industrySectors = [
    { sector: "Manufaktur Otomotif & Komponen Presisi", share: "42%", partners: "PT MMKI, PT Musashi, PT Astra Honda Motor, dll." },
    { sector: "Administrasi Perkantoran & Keuangan Bisnis", share: "28%", partners: "Perbankan, Korporasi Jasa, Kantor Notaris, Retail Modern." },
    { sector: "Logistik, Pergudangan & Supply Chain", share: "14%", partners: "Pusat Distribusi Regional, Ekspedisi Skala Nasional." },
    { sector: "Digital Office & IT Solutions", share: "10%", partners: "Software House, Agensi Pemasaran Digital, Studio Desain." },
    { sector: "Bengkel Mandiri & Layanan Servis Vokasi", share: "6%", partners: "Unit Usaha Alumni Mandiri berjejaring binaan SMK." }
  ];

  return (
    <PageLayout
      badge="Statistik & Analisis"
      title="Keterserapan Lulusan SMK GN"
      subtitle="Analisis data tracer study berkala yang mencerminkan tingginya relevansi kurikulum terintegrasi industri dengan serapan dunia usaha dan dunia kerja nyata."
      breadcrumbs={[
        { label: "Lulusan", to: "/lulusan" },
        { label: "Keterserapan Lulusan" }
      ]}
    >
      {/* Big Numbers Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-blue-400 mb-1 font-heading">96%</p>
          <p className="text-xs text-slate-300">Terserap Bekerja, Kuliah & Wirausaha</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-cyan-400 mb-1 font-heading">&lt; 3 Bln</p>
          <p className="text-xs text-slate-300">80% Lulusan Terserap Kurang Dari 3 Bulan</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-heading">80%</p>
          <p className="text-xs text-slate-300">Kesesuaian Kompetensi Kejuruan (Linier)</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-amber-400 mb-1 font-heading">440+</p>
          <p className="text-xs text-slate-300">Total Alumni Terlacak Periode Terakhir</p>
        </div>
      </div>

      {/* Distribution Progress Bars Bento */}
      <div className="liquid-card p-6 md:p-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white font-heading">
              Distribusi Keterserapan Pasca Kelulusan
            </h2>
            <p className="text-xs text-slate-400">
              Hasil survei resmi Bursa Kerja Khusus (BKK) SMK Gema Nusantara
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-400/30 self-start sm:self-auto">
            Tracer Study 2024
          </span>
        </div>

        <div className="space-y-6">
          {distributionData.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-semibold">{item.label}</span>
                <span className="text-slate-300 font-mono">
                  <strong className="text-white text-sm">{item.percentage}%</strong> ({item.count})
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 shadow-sm`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waiting Time & Sectors Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Waiting Times */}
        <div className="liquid-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="liquid-badge mb-3">Efisiensi Penempatan</span>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              Masa Tunggu Rekrutmen Kerja
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Mayoritas lulusan memperoleh kepastian kerja bahkan sebelum menerima ijazah resmi berkat program kemitraan Teaching Factory dan Praktik Kerja Lapangan (PKL).
            </p>

            <div className="space-y-4">
              {waitingTimes.map((wait, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">{wait.label}</p>
                    <span className="text-[10px] text-blue-400">{wait.badge}</span>
                  </div>
                  <span className="text-lg font-extrabold text-cyan-400 font-heading">
                    {wait.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="liquid-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="liquid-badge mb-3">Sebaran Industri</span>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              Bidang Industri & Penempatan
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Sektor manufaktur presisi dan administrasi korporat mendominasi porsi penempatan alumni secara konsisten tiap tahunnya.
            </p>

            <div className="space-y-3">
              {industrySectors.map((sec, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-white">{sec.sector}</span>
                    <span className="text-xs font-bold text-amber-400 font-mono">{sec.share}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Contoh Mitra: {sec.partners}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BKK Info Banner */}
      <div className="liquid-card p-6 md:p-8 border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-heading mb-1">
            Bursa Kerja Khusus (BKK) SMK Gema Nusantara
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Pusat koordinasi rekrutmen kampus resmi berizin Disnaker yang secara rutin menyelenggarakan Campus Hiring, Walk-in Interview, bimbingan psikotes, serta penyaluran magang luar negeri bagi alumni.
          </p>
        </div>
        <div className="shrink-0">
          <span className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-lg shadow-blue-500/20 inline-block">
            Layanan Terbuka untuk Alumni
          </span>
        </div>
      </div>
    </PageLayout>
  );
};

export default KeterserapanLulusan;