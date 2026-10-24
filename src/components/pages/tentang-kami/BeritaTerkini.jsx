import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const allArticles = [
  {
    id: 1,
    title: "SMK Gema Nusantara Raih Penghargaan Kaizen Contest MMKI 2024",
    date: "14 Februari 2025",
    category: "Prestasi",
    author: "Humas GENUS",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil41.jpg",
    summary: "Tim inovasi Teknik Kendaraan Ringan berhasil mempresentasikan proyek efisiensi manufaktur yang diapresiasi langsung oleh jajaran direksi PT Mitsubishi Motors Krama Yudha Indonesia.",
    tags: ["MMKI", "Kaizen", "TKR", "Vokasi"],
  },
  {
    id: 2,
    title: "School Musashi Olympic 2.0: Uji Presisi Mikrometer Standar Industri Jepang",
    date: "28 Januari 2025",
    category: "Industri",
    author: "Tim Bengkel TEFA",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/School-Musashi-Olympic-2.0-Measuring-Competition-7-1024x1024.jpg",
    summary: "Sinergi bersama PT Musashi Auto Parts melatih siswa mengukur komponen mesin otomotif dengan toleransi hingga seperseribu milimeter, mempersiapkan lulusan standar internasional.",
    tags: ["Musashi", "Presisi", "Otomotif"],
  },
  {
    id: 3,
    title: "Program LPK Jepang Resmi Buka Jalur Karier Internasional Angkatan Baru",
    date: "12 Januari 2025",
    category: "Alumni",
    author: "BKK SMK GENUS",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/serapan-lulusan20-22.png",
    summary: "Sebanyak 25 lulusan SMK Gema Nusantara diberangkatkan melalui program pemagangan teknis dan penempatan kerja resmi di sektor manufaktur otomotif Jepang.",
    tags: ["Karier Global", "Jepang", "BKK"],
  },
  {
    id: 4,
    title: "Workshop Otomasi Perkantoran Digital untuk Konsentrasi Manajemen Perkantoran",
    date: "05 Desember 2024",
    category: "Akademik",
    author: "Kaprog MP",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil3.jpg",
    summary: "Pelatihan komprehensif implementasi cloud ERP, arsip digital terenkripsi, dan automasi komunikasi korporat untuk membekali siswa keahlian kantor modern 4.0.",
    tags: ["MP", "Digital Office", "Workshop"],
  },
  {
    id: 5,
    title: "Uji Kompetensi Keahlian (UKK) Bersama Asesor Bersertifikat BNSP",
    date: "18 November 2024",
    category: "Akademik",
    author: "LSP P-1 GENUS",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil2.jpg",
    summary: "Seluruh siswa tingkat akhir mengikuti sertifikasi profesi melalui LSP P-1 berlisensi BNSP guna menjamin keabsahan kompetensi yang diakui secara nasional.",
    tags: ["BNSP", "Sertifikasi", "UKK"],
  },
  {
    id: 6,
    title: "Latihan Dasar Kepemimpinan Siswa (LDKS) & Musyawarah OSIS GENUS",
    date: "25 Oktober 2024",
    category: "Kesiswaan",
    author: "Pembina OSIS",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil5.jpg",
    summary: "Membangun karakter kepemimpinan berintegritas, kerja sama tim, dan kedisiplinan tinggi melalui serangkaian simulasi manajerial dan pembinaan mental.",
    tags: ["OSIS", "LDKS", "Karakter"],
  },
];

const BeritaTerkini = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["Semua", "Prestasi", "Industri", "Akademik", "Alumni", "Kesiswaan"];

  const filteredArticles = allArticles.filter((item) => {
    const matchCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <PageLayout
      badge="WARTA & AGENDA"
      badgeVariant="cyan"
      title="Portal Berita"
      gradientText="Terkini & Prestasi"
      subtitle="Kilas informasi seputar pencapaian siswa, kolaborasi kelas industri, kegiatan teaching factory, dan agenda resmi SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Berita Terkini" },
      ]}
    >
      <div className="flex flex-col gap-8">
        {/* Search & Category Filter Bar */}
        <div className="liquid-glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-96 relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="Cari berita, prestasi, atau kegiatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="liquid-input !pl-11 !text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="liquid-glass-card liquid-sheen overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="liquid-badge text-[10px] !py-0.5 !px-2 bg-slate-900/80">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2.5">
                      <span>
                        <i className="far fa-calendar-alt mr-1 text-cyan-400"></i>
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Baca Selengkapnya</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full liquid-glass-card p-12 text-center">
              <i className="fas fa-file-circle-question text-4xl text-slate-500 mb-3"></i>
              <p className="text-slate-300">
                Tidak ada berita yang sesuai dengan pencarian "{searchTerm}".
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Article Detail Lightbox Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative max-w-2xl w-full liquid-glass-elevated rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="liquid-badge text-xs">{selectedArticle.category}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-2 flex items-center gap-3">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>Oleh {selectedArticle.author}</span>
              </div>
              <h2 className="text-2xl font-black text-white mb-4">
                {selectedArticle.title}
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                {selectedArticle.summary}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                SMK Gema Nusantara terus mengokohkan peran sebagai pusat keunggulan pendidikan kejuruan di Kabupaten Bekasi dengan mengintegrasikan budaya industri dan disiplin kerja berkualitas tinggi.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {selectedArticle.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BeritaTerkini;