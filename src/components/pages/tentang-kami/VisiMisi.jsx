import React from "react";
import PageLayout from "../../Layouts/PageLayout";
import { dataVisiMisi } from "../../../service/data";

const valuesData = [
  {
    icon: "fas fa-shield-halved",
    title: "Integritas & Karakter",
    desc: "Membangun kepribadian siswa yang jujur, bertanggung jawab, dan memiliki etika kerja tinggi.",
  },
  {
    icon: "fas fa-gears",
    title: "Kompetensi Industri",
    desc: "Penguasaan keahlian teknis sesuai standar SKKNI dan kebutuhan riil manufaktur global.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Inovasi & Kreativitas",
    desc: "Mendorong pola pikir solutif dan perbaikan berkesinambungan (Kaizen) dalam setiap pekerjaan.",
  },
  {
    icon: "fas fa-handshake",
    title: "Sinergi Kemitraan",
    desc: "Kolaborasi aktif dan berkelanjutan bersama dunia usaha, dunia industri, dan orang tua.",
  },
];

const VisiMisi = () => {
  return (
    <PageLayout
      badge="LANDASAN FILOSOFIS"
      badgeVariant="cyan"
      title="Visi, Misi & Tujuan"
      gradientText="Pendidikan"
      subtitle="Pedoman strategis SMK Gema Nusantara dalam menghantarkan peserta didik menjadi insan vokasi yang terampil, berkarakter, mandiri, dan berakhlak mulia."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Visi & Misi" },
      ]}
    >
      <div className="flex flex-col gap-10">
        {/* Visi Big Feature Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-12 border-cyan-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-cyan-950/30 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="liquid-badge text-xs">VISI UTAMA</span>
            <span className="text-xs text-cyan-400 font-semibold">
              SMK Pusat Keunggulan
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            "Menjadi Sekolah Menengah Kejuruan yang bermutu, unggul merata, sehingga dapat menghantarkan Peserta Didik menjadi terampil, berkarakter, kompeten dan mandiri."
          </h2>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-cyan-400"></i>
              <span>Terampil Berstandar Industri</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-cyan-400"></i>
              <span>Berkarakter Kuat & Beretika</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-cyan-400"></i>
              <span>Mandiri & Siap Berwirausaha</span>
            </div>
          </div>
        </div>

        {/* Misi Bento Section */}
        <div className="liquid-glass-card p-8 sm:p-12 text-left">
          <div className="flex items-center gap-2 mb-8">
            <span className="liquid-badge text-xs">MISI STRATEGIS</span>
            <h3 className="text-2xl font-extrabold text-white">
              Tiga Pilar Misi Sekolah
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 font-black text-sm mb-4">
                  01
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  Pembelajaran Aktif & Inovatif
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Menyelenggarakan proses pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan berbasis Teaching Factory serta atmosfer kerja nyata.
                </p>
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-black text-sm mb-4">
                  02
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  Keterampilan Sesuai DUDIKA
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Membekali peserta didik dengan pengetahuan, keterampilan, dan adaptasi teknologi terkini yang selaras dengan kebutuhan Dunia Usaha, Dunia Industri, dan Dunia Kerja.
                </p>
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-cyan-400/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-black text-sm mb-4">
                  03
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  Kecerdasan Holistik & Spiritual
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Mewujudkan pendidikan vokasi yang menghasilkan lulusan berimbang: cerdas secara spiritual, emosional, dan intelektual untuk menyongsong Indonesia Emas 2045.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nilai Budaya Vokasi 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((v, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 text-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={v.icon}></i>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {v.title}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default VisiMisi;