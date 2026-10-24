import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const SuratRekomendasi = () => {
  const [formData, setFormData] = useState({
    name: "",
    nisn: "",
    status: "Alumni",
    type: "Melamar Pekerjaan Industri (DUDI)",
    targetCompany: "",
    phone: "",
    purpose: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "REK-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <PageLayout
      badge="PERSURATAN RESMI"
      badgeVariant="cyan"
      title="Surat Rekomendasi"
      gradientText="Kepala Sekolah"
      subtitle="Layanan permohonan surat rekomendasi resmi untuk melamar pekerjaan di industri mitra, melanjutkan ke perguruan tinggi, atau program pemagangan internasional."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Surat Rekomendasi" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Left Information Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="liquid-glass-card liquid-sheen p-8">
            <span className="liquid-badge text-xs mb-3">JENIS REKOMENDASI</span>
            <h3 className="text-xl font-bold text-white mb-3">
              Peruntukan Surat Rekomendasi
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <i className="fas fa-briefcase text-cyan-400 mt-1 flex-shrink-0"></i>
                <span><b>Karier Industri:</b> Rekomendasi seleksi kerja ke PT MMKI, PT Musashi, Astra Group, dll.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-graduation-cap text-cyan-400 mt-1 flex-shrink-0"></i>
                <span><b>Studi Lanjut:</b> Jalur SNBP/SNBT, beasiswa vokasi, atau universitas swasta rekanan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-plane-departure text-cyan-400 mt-1 flex-shrink-0"></i>
                <span><b>LPK Jepang:</b> Verifikasi resmi kesiapan kerja magang teknis ke luar negeri.</span>
              </li>
            </ul>
          </div>

          <div className="liquid-glass p-6 rounded-2xl border border-white/15">
            <span className="text-xs text-cyan-400 font-semibold block mb-1">
              Waktu Pemrosesan:
            </span>
            <p className="text-xs text-slate-300">
              Dokumen diterbitkan dalam 1–2 hari kerja setelah ditandatangani Kepala Sekolah secara digital (e-Sign) atau basah.
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7">
          <div className="liquid-glass-card liquid-sheen p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="liquid-badge-emerald text-xs mb-2">PENGAJUAN DITERIMA</span>
                <h3 className="text-2xl font-black text-white">
                  Nomor Berkas: {ticketId}
                </h3>
                <p className="text-slate-300 text-sm mt-3 max-w-md">
                  Pengajuan surat rekomendasi atas nama <b>{formData.name}</b> untuk keperluan <b>{formData.targetCompany}</b> telah masuk ke meja Kepala Sekolah. Notifikasi dokumen siap unduh akan dikirimkan ke <b>{formData.phone}</b>.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 liquid-btn-primary !text-xs !py-2.5 !px-6"
                >
                  Ajukan Surat Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Formulir Pengajuan Rekomendasi
                  </h3>
                  <p className="text-xs text-slate-400">
                    Lengkapi rincian tujuan agar surat rekomendasi dapat disesuaikan dengan kebutuhan Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nama sesuai ijazah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      NISN / NIS *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nomor Induk Siswa"
                      value={formData.nisn}
                      onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Status Pemohon *
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="liquid-input !text-xs bg-slate-900"
                    >
                      <option value="Siswa Aktif">Siswa Aktif (Kelas XII)</option>
                      <option value="Alumni">Alumni SMK GENUS</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Tujuan Rekomendasi *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="liquid-input !text-xs bg-slate-900"
                    >
                      <option value="Melamar Pekerjaan Industri">Melamar Pekerjaan Industri (DUDI)</option>
                      <option value="Melanjutkan Kuliah / Beasiswa">Melanjutkan Kuliah / Beasiswa</option>
                      <option value="Program Pemagangan Jepang">Program Pemagangan Jepang (LPK)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Nama Perusahaan / Universitas Tujuan *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: PT Mitsubishi Motors Krama Yudha Indonesia"
                    value={formData.targetCompany}
                    onChange={(e) => setFormData({ ...formData, targetCompany: e.target.value })}
                    className="liquid-input !text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Nomor WhatsApp Pemohon *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="liquid-input !text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Uraian Keperluan & Prestasi Selama Sekolah (Opsional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Sebutkan prestasi kejuruan, kepengurusan OSIS, atau kompetensi pendukung yang ingin ditonjolkan..."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="liquid-input !text-xs"
                  ></textarea>
                </div>

                <button type="submit" className="liquid-btn-primary mt-2">
                  <i className="fas fa-paper-plane text-xs mr-1"></i>
                  <span>Kirim Permohonan Rekomendasi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SuratRekomendasi;