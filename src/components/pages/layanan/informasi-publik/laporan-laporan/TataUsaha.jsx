import React from "react";
import PageLayout from "../../../../Layouts/PageLayout";

const tuReports = [
  {
    title: "Laporan Kinerja Pelayanan Administrasi Semester Ganjil 2024/2025",
    code: "TU-REP-2024-02",
    date: "Januari 2025",
    pages: "24 Halaman",
    size: "1.8 MB",
    summary: "Rekapitulasi 650+ surat keterangan aktif, 320 berkas permohonan legalisir LDR, dan administrasi mutasi siswa dengan rata-rata respon 1.4 hari kerja.",
  },
  {
    title: "Laporan Inventarisasi Sarana Bengkel TEFA & Laboratorium Komputer",
    code: "TU-INV-2024-01",
    date: "Desember 2024",
    pages: "38 Halaman",
    size: "3.2 MB",
    summary: "Pendataan aset mesin bubut, scanner OBD-II, car lift, 40 unit PC desktop, serta instrumen mikrometer bersertifikasi kalibrasi tahunan.",
  },
  {
    title: "Laporan Penatausahaan Kearsipan Digital & Buku Induk Siswa",
    code: "TU-ARSIP-2024",
    date: "Oktober 2024",
    pages: "16 Halaman",
    size: "1.2 MB",
    summary: "Dokumentasi migrasi berkas fisik ke platform cloud e-filing serta pemutakhiran data Dapodikdasmen 100% valid tanpa anomali.",
  },
];

const TataUsaha = () => {
  return (
    <PageLayout
      badge="ADMINISTRASI & KEARSIPAN"
      badgeVariant="blue"
      title="Laporan Pelayanan"
      gradientText="Tata Usaha"
      subtitle="Publikasi rekapitulasi kinerja pelayanan ketatausahaan, pengelolaan kearsipan digital, dan inventarisasi sarana pendidikan SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Laporan", to: "/layanan/informasi-publik/laporan-laporan" },
        { label: "Tata Usaha" },
      ]}
    >
      <div className="flex flex-col gap-6 text-left">
        {tuReports.map((item, idx) => (
          <div
            key={idx}
            className="liquid-glass-card liquid-sheen p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="liquid-badge text-[10px]">{item.code}</span>
                <span className="text-xs text-slate-400">Periode: {item.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {item.summary}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span><i className="far fa-file-pdf mr-1 text-red-400"></i> {item.pages}</span>
                <span>•</span>
                <span>Ukuran: {item.size}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Mengunduh dokumen: ${item.title}`)}
              className="liquid-btn-primary !text-xs !py-2.5 !px-5 whitespace-nowrap flex-shrink-0"
            >
              <i className="fas fa-download mr-1.5"></i>
              <span>Unduh Laporan</span>
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default TataUsaha;