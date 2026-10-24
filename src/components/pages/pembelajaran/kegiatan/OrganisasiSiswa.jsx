import React from "react";
import PageLayout from "../../../Layouts/PageLayout";

const studentCommittees = [
  {
    role: "Ketua & Wakil Ketua Umum",
    desc: "Memimpin jalannya organisasi, mewakili suara seluruh siswa, dan mengoordinasikan aspirasi ke pimpinan sekolah.",
    icon: "fas fa-crown",
  },
  {
    role: "Sekretariat & Administrasi",
    desc: "Mengelola persuratan, notulensi rapat musyawarah, arsip dokumentasi, dan inventaris organisasi.",
    icon: "fas fa-file-lines",
  },
  {
    role: "Bendahara & Manajemen Keuangan",
    desc: "Menyusun anggaran program kerja, transparansi laporan kas, serta pembukuan dana kegiatan kesiswaan.",
    icon: "fas fa-wallet",
  },
  {
    role: "Divisi Ketaqwaan & Budi Pekerti",
    desc: "Mengkoordinasikan peringatan hari besar keagamaan, kajian rohani, dan penanaman akhlak mulia.",
    icon: "fas fa-hands-praying",
  },
  {
    role: "Divisi Bela Negara & Kedisiplinan",
    desc: "Penegakan tata tertib 5S, pengawalan upacara bendera, dan sinergi bersama Paskibra serta Pramuka.",
    icon: "fas fa-shield-halved",
  },
  {
    role: "Divisi Bakat, Olahraga & Seni",
    desc: "Menyelenggarakan turnamen antarkelas (Class Meeting), pentas seni vokasi, dan pekan olahraga kampus.",
    icon: "fas fa-trophy",
  },
];

const OrganisasiSiswa = () => {
  return (
    <PageLayout
      badge="ORGANISASI SISWA INTRA SEKOLAH"
      badgeVariant="cyan"
      title="Persatuan Pelajar"
      gradientText="OSIS SMK GENUS"
      subtitle="Wadah tertinggi organisasi kesiswaan yang melatih jiwa kepemimpinan, musyawarah mufakat, dan integritas calon pemimpin bangsa."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Kegiatan", to: "/pembelajaran" },
        { label: "Organisasi Siswa" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Main Showcase Bento Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center border-cyan-500/30">
          <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-slate-900 flex-shrink-0">
            <img
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil5.jpg"
              alt="Aktivitas Persatuan Pelajar SMK Gema Nusantara"
            />
          </div>

          <div className="flex-1">
            <span className="liquid-badge text-xs mb-3">
              PERSATUAN PELAJAR (PP)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Belajar Kepemimpinan Sembari Berprestasi Akademik
            </h2>
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <p>
                <b>Persatuan Pelajar (PP)</b> merupakan Organisasi Siswa Intra Sekolah (OSIS) resmi di SMK Gema Nusantara. Berada langsung di bawah pembinaan Bidang Kesiswaan, Persatuan Pelajar menjadi jembatan komunikasi yang kokoh antara siswa dan manajemen sekolah.
              </p>
              <p>
                Kepengurusan dipilih secara demokratis setiap tahun melalui Pemilu Raya Siswa. Pengurus PP dituntut menjadi pendengar yang peka, komunikator yang handal, dan pengambil keputusan yang bijak tanpa mengorbankan performa akademik dan keterampilan vokasi di bengkel maupun laboratorium.
              </p>
            </div>
          </div>
        </div>

        {/* Council Divisions */}
        <div className="liquid-glass-card p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="liquid-badge text-xs mb-2">STRUKTUR KABINET</span>
            <h3 className="text-2xl font-black text-white">
              Seksi Bidang & Divisi Kerja OSIS
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Setiap divisi menjalankan program kerja terencana demi mendukung kemajuan kesiswaan yang harmonis dan berprestasi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCommittees.map((com, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl mb-4 group-hover:scale-110 transition-transform">
                    <i className={com.icon}></i>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {com.role}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {com.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OrganisasiSiswa;