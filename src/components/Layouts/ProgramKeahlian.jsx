import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Elements/SectionTitle";

const ProgramKeahlian = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="Konsentrasi Keahlian"
            title="Program Vokasi"
            gradientText="Unggulan Industri"
            subtitle="Kurikulum link-and-match yang dirancang khusus bersama mitra industri manufaktur multinasional untuk mempersiapkan lulusan kompeten siap kerja."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Teknik Kendaraan Ringan (TKR) */}
          <div className="liquid-glass-card liquid-sheen p-8 sm:p-10 flex flex-col justify-between border-blue-500/30 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="liquid-badge text-xs">
                  <i className="fas fa-car-side mr-1 text-cyan-400"></i>
                  Teknik Otomotif
                </span>
                <span className="liquid-badge-cyan text-[11px]">
                  Kelas Industri MMKI
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                Teknik Kendaraan Ringan (TKR)
              </h3>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Mempersiapkan teknisi profesional di bidang otomotif modern. Siswa dilatih mendiagnosis, merawat, dan mereparasi sistem mesin (engine), pemindah daya, sasis, sistem rem ABS, dan kelistrikan otomotif mutakhir berbasis standar Mitsubishi Motors.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Kompetensi Utama:
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Engine & Injection Diagnostic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Chassis & Power Train</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Electrical & ECU Tuning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Kaizen & 5S Industri</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Mitra: PT MMKI & PT Musashi</span>
              <Link
                to="/pembelajaran/kurikulum/struktur-kurikulum"
                className="liquid-btn-primary !py-2 !px-4 !text-xs"
              >
                <span>Lihat Kurikulum</span>
                <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>

          {/* Card 2: Manajemen Perkantoran (MP) */}
          <div className="liquid-glass-card liquid-sheen p-8 sm:p-10 flex flex-col justify-between border-cyan-500/30 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="liquid-badge text-xs">
                  <i className="fas fa-building-user mr-1 text-cyan-400"></i>
                  Bisnis & Manajemen
                </span>
                <span className="liquid-badge-amber text-[11px]">
                  Digital Office 4.0
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                Manajemen Perkantoran (MP)
              </h3>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Membentuk staf administrasi dan sekretaris modern yang mahir mengoperasikan teknologi digital perkantoran, manajemen kearsipan elektronik, komunikasi bisnis lintas bahasa, keprotokolan, dan automasi proses administrasi perkantoran terkini.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Kompetensi Utama:
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Otomasi Tata Kelola Kantor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>E-Filing & Digital Archiving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Komunikasi Bisnis & Humas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check text-cyan-400 text-[10px]"></i>
                    <span>Keuangan & Dokumen Legal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Sertifikasi: BNSP & Industri</span>
              <Link
                to="/pembelajaran/kurikulum/struktur-kurikulum"
                className="liquid-btn-primary !py-2 !px-4 !text-xs"
              >
                <span>Lihat Kurikulum</span>
                <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramKeahlian;
