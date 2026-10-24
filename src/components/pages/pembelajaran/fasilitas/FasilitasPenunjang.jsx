import React from "react";
import PageLayout from "../../../Layouts/PageLayout";

const supportingFacilities = [
  {
    icon: "fas fa-book",
    title: "Perpustakaan Khazanah Analitika",
    badge: "Literasi Digital",
    desc: "Dilengkapi koleksi ribuan buku kejuruan fisik, perpustakaan digital e-book, ruang baca ber-AC, dan workstation riset mandiri bagi siswa.",
  },
  {
    icon: "fas fa-snowflake",
    title: "Ruang Kelas Teori Ber-AC",
    badge: "Kenyamanan Belajar",
    desc: "Seluruh ruang kelas dilengkapi pendingin udara (AC), proyektor multimedia interaktif, pencahayaan ergonomis, dan tata letak modern.",
  },
  {
    icon: "fas fa-mosque",
    title: "Mushola Al-Fath",
    badge: "Spiritualitas",
    desc: "Tempat ibadah yang bersih dan representatif untuk sholat berjamaah harian, kajian rohani Islam, dan sholat Jumat berjamaah.",
  },
  {
    icon: "fas fa-basketball",
    title: "Sarana Olahraga Terpadu",
    badge: "Kebugaran & Prestasi",
    desc: "Lapangan multifungsi untuk kegiatan olahraga futsal, basket, bola voli, bulutangkis, serta latihan baris-berbaris Paskibra dan Pramuka.",
  },
  {
    icon: "fas fa-shield-halved",
    title: "Parkir Luas & Keamanan CCTV 24 Jam",
    badge: "Keamanan Kampus",
    desc: "Sistem keamanan satu pintu dengan pos satpam 24 jam, kamera pengawas CCTV di setiap sudut vital kampus, serta area parkir aman berkanopi.",
  },
  {
    icon: "fas fa-utensils",
    title: "Kantin Sehat & Koperasi Vokasi",
    badge: "Nutrisi & Kebutuhan",
    desc: "Kantin higienis yang menyediakan makanan bergizi terjangkau serta koperasi penyedia perlengkapan seragam dan alat tulis kejuruan.",
  },
  {
    icon: "fas fa-kit-medical",
    title: "Ruang UKS & Konseling Karakter BK",
    badge: "Kesehatan & Bimbingan",
    desc: "Fasilitas penanganan pertama kesehatan siswa dengan tenaga medis mitra Puskesmas serta layanan bimbingan konseling psikososial.",
  },
  {
    icon: "fas fa-briefcase",
    title: "Pusat Bursa Kerja Khusus (BKK)",
    badge: "Karier & Magang",
    desc: "Ruang khusus interview kerja, tes psikotes industri, konsultasi magang, dan administrasi seleksi penempatan kerja ke perusahaan mitra.",
  },
];

const FasilitasPenunjang = () => {
  return (
    <PageLayout
      badge="INFRASTRUKTUR KAMPUS"
      badgeVariant="cyan"
      title="Fasilitas Penunjang"
      gradientText="& Sarana Belajar"
      subtitle="Infrastruktur pendukung proses belajar mengajar yang nyaman, aman, dan berorientasi pada pengembangan holistik potensi peserta didik."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "Fasilitas", to: "/pembelajaran" },
        { label: "Fasilitas Penunjang" },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {supportingFacilities.map((f, idx) => (
          <div
            key={idx}
            className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                  <i className={f.icon}></i>
                </div>
                <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                  {f.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {f.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {f.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex items-center text-xs text-cyan-400 font-semibold">
              <i className="fas fa-check-circle mr-2 text-[10px]"></i>
              <span>Fasilitas Aktif Ber-AC</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default FasilitasPenunjang;