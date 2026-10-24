import React from "react";
import PageLayout from "../../../../Layouts/PageLayout";

const feedbackStats = [
  { label: "Total Aspirasi & Aduan Masuk", count: "184", icon: "fas fa-inbox", color: "cyan" },
  { label: "Tindak Lanjut Tuntas Selesai", count: "182", icon: "fas fa-circle-check", color: "emerald" },
  { label: "Dalam Penanganan Teknis", count: "2", icon: "fas fa-spinner", color: "amber" },
  { label: "Rata-Rata Kecepatan Respon", count: "< 24 Jam", icon: "fas fa-bolt", color: "blue" },
];

const feedbackLogs = [
  {
    ticket: "FDB-2025-014",
    topic: "Penambahan Alat Scanner Injeksi di Bengkel TKR",
    from: "Siswa Kelas XI TKR",
    date: "18 Januari 2025",
    status: "Selesai Ditindaklanjuti",
    action: "Sekolah telah menambah 2 unit diagnostic scanner Autel MaxiSys baru pada akhir Januari 2025.",
  },
  {
    ticket: "FDB-2024-098",
    topic: "Optimalisasi Kecepatan Internet di Lab Komputer MP",
    from: "Guru Produktif MP",
    date: "10 November 2024",
    status: "Selesai Ditindaklanjuti",
    action: "Bandwidth internet sekolah telah di-upgrade dari 100 Mbps menjadi 200 Mbps dedicated fiber-optic.",
  },
  {
    ticket: "FDB-2024-072",
    topic: "Penerangan Tambahan di Area Parkir Belakang Siswa",
    from: "Orang Tua / Wali Siswa",
    date: "14 September 2024",
    status: "Selesai Ditindaklanjuti",
    action: "Pemasangan 4 titik lampu LED tenaga surya 50 Watt dan penambahan 1 kamera CCTV resolusi tinggi.",
  },
];

const ResponPelanggan = () => {
  return (
    <PageLayout
      badge="PENGADUAN & ASPIRASI PUBLIK"
      badgeVariant="cyan"
      title="Laporan Respon"
      gradientText="Pelanggan & Masyarakat"
      subtitle="Publikasi rekapitulasi penanganan masukan, kritik, saran, serta tindak lanjut perbaikan mutu berkelanjutan di SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Laporan", to: "/layanan/informasi-publik/laporan-laporan" },
        { label: "Respon Pelanggan" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbackStats.map((stat, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                <i className={`${stat.icon} text-cyan-400 text-lg`}></i>
              </div>
              <span className="text-3xl font-black text-white">{stat.count}</span>
            </div>
          ))}
        </div>

        {/* Feedback Logs Table Card */}
        <div className="liquid-glass-card p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="liquid-badge text-xs mb-2">REKAPITULASI TINDAK LANJUT</span>
            <h3 className="text-2xl font-black text-white">
              Log Penanganan Aspirasi Terbuka
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Setiap laporan warga sekolah dan masyarakat diverifikasi serta ditindaklanjuti secara nyata demi mewujudkan budaya kerja Kaizen.
            </p>
          </div>

          <div className="space-y-4">
            {feedbackLogs.map((log, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 rounded-2xl border border-white/10 flex flex-col gap-3"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="liquid-badge text-[10px]">{log.ticket}</span>
                    <span className="text-xs text-slate-400">Dari: {log.from}</span>
                  </div>
                  <span className="liquid-badge-emerald text-[10px] !py-0.5 !px-2">
                    <i className="fas fa-check mr-1 text-[9px]"></i>
                    {log.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mt-1">
                  {log.topic}
                </h4>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <span className="font-semibold text-cyan-300 block mb-1">
                    Tindak Lanjut Sekolah:
                  </span>
                  <span>{log.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResponPelanggan;