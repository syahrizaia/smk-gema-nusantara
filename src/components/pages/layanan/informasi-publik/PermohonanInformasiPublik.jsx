import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const PermohonanInformasiPublik = () => {
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    email: "",
    phone: "",
    address: "",
    details: "",
    purpose: "",
    format: "Email / Digital (PDF)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "PPID-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <PageLayout
      badge="PPID & KETERBUKAAN INFORMASI"
      badgeVariant="amber"
      title="Permohonan Informasi"
      gradientText="Publik Sekolah"
      subtitle="Formulir resmi permohonan informasi publik bagi perseorangan atau badan hukum sesuai ketentuan Undang-Undang Keterbukaan Informasi Publik."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Permohonan Informasi" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Left Procedure Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="liquid-glass-card liquid-sheen p-8">
            <span className="liquid-badge-amber text-xs mb-3">STANDAR PELAYANAN</span>
            <h3 className="text-xl font-bold text-white mb-3">
              Prosedur & Batas Waktu Respon
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <i className="fas fa-clock text-amber-400 mt-1 flex-shrink-0"></i>
                <span><b>Waktu Respon:</b> PPID wajib memberikan tanggapan tertulis maksimal 10 (sepuluh) hari kerja sejak formulir diterima.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-file-shield text-amber-400 mt-1 flex-shrink-0"></i>
                <span><b>Verifikasi Identitas:</b> Pemohon wajib menyertakan identitas KTP/NIK yang sah untuk validasi register permohonan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-scale-balanced text-amber-400 mt-1 flex-shrink-0"></i>
                <span><b>Bebas Biaya:</b> Pelayanan informasi publik dalam format digital tidak dipungut biaya retribusi apapun.</span>
              </li>
            </ul>
          </div>

          <div className="liquid-glass p-6 rounded-2xl border border-white/15">
            <span className="text-xs text-amber-400 font-semibold block mb-1">
              Petugas PPID Pelaksana:
            </span>
            <p className="text-xs text-slate-300">
              Sekretariat PPID SMK Gema Nusantara <br />
              Email: <b>ppid@smkgemanusantara.sch.id</b>
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="liquid-glass-card liquid-sheen p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="liquid-badge-emerald text-xs mb-2">TIKET REGISTER PPID</span>
                <h3 className="text-2xl font-black text-white">
                  Nomor: {ticketId}
                </h3>
                <p className="text-slate-300 text-sm mt-3 max-w-md">
                  Permohonan informasi publik Anda telah tercatat secara resmi dalam Buku Register PPID SMK Gema Nusantara. Petugas kami akan memproses dan memberikan respon tertulis ke email <b>{formData.email}</b>.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 liquid-btn-primary !text-xs !py-2.5 !px-6"
                >
                  Ajukan Permohonan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Formulir Permohonan Informasi
                  </h3>
                  <p className="text-xs text-slate-400">
                    Lengkapi kolom identitas pemohon dan rincian data yang Anda perlukan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nama Lengkap Pemohon *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Sesuai KTP"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nomor Induk Kependudukan (NIK) *
                    </label>
                    <input
                      required
                      type="text"
                      maxLength="16"
                      placeholder="16 digit NIK KTP"
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Alamat Email Aktif *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="nama@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      No. WhatsApp / Telepon *
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
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Alamat Domisili Pemohon *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Alamat lengkap tempat tinggal"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="liquid-input !text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Rincian Informasi yang Dibutuhkan *
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Jelaskan secara spesifik dokumen atau data publik sekolah yang ingin Anda dapatkan..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="liquid-input !text-xs"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Tujuan Penggunaan Informasi *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Riset Akademis / Verifikasi Data"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Format Penyerahan Dokumen *
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="liquid-input !text-xs bg-slate-900"
                    >
                      <option value="Email / Digital (PDF)">Email / Salinan Digital (PDF)</option>
                      <option value="Salinan Cetak Fisik">Salinan Cetak Fisik (Loket TU)</option>
                      <option value="Melihat / Membaca Langsung">Melihat / Membaca Langsung</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="liquid-btn-primary mt-2">
                  <i className="fas fa-paper-plane text-xs mr-1"></i>
                  <span>Kirim Formulir Permohonan PPID</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PermohonanInformasiPublik;