import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const LegalisirDiRumah = () => {
  const [formData, setFormData] = useState({
    name: "",
    nisn: "",
    year: "2024",
    major: "Teknik Kendaraan Ringan",
    copies: "5",
    phone: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = "LDR-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <PageLayout
      badge="LAYANAN ALUMNI LDR"
      badgeVariant="cyan"
      title="Legalisir di Rumah"
      gradientText="(LDR) Online"
      subtitle="Memudahkan para alumni SMK Gema Nusantara melakukan permohonan legalisir ijazah dan transkrip nilai resmi tanpa perlu antre ke sekolah."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Legalisir di Rumah" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Info & Requirements Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="liquid-glass-card liquid-sheen p-8">
            <span className="liquid-badge text-xs mb-3">PETUNJUK LAYANAN</span>
            <h3 className="text-xl font-bold text-white mb-3">
              Ketentuan Permohonan LDR
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check text-cyan-400 mt-1 flex-shrink-0"></i>
                <span>Berlaku bagi seluruh alumni lulusan SMK Gema Nusantara tahun kelulusan 2018–2025.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check text-cyan-400 mt-1 flex-shrink-0"></i>
                <span>Setiap pemohon dapat mengajukan legalisir maksimal 10 lembar dokumen per permohonan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check text-cyan-400 mt-1 flex-shrink-0"></i>
                <span>Waktu verifikasi data adalah 1–2 hari kerja setelah formulir disubmit secara lengkap.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fas fa-check text-cyan-400 mt-1 flex-shrink-0"></i>
                <span>Pengiriman berkas fisik menggunakan ekspedisi rekanan (JNE / J&T) dengan resi resmi.</span>
              </li>
            </ul>
          </div>

          <div className="liquid-glass p-6 rounded-2xl border border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Butuh Bantuan Cepat?</h4>
                <p className="text-xs text-slate-300">Hubungi Hotline Tata Usaha: (021) 22154328</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="liquid-glass-card liquid-sheen p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="liquid-badge-emerald text-xs mb-2">PERMOHONAN BERHASIL</span>
                <h3 className="text-2xl font-black text-white">
                  Nomor Tiket: {ticketId}
                </h3>
                <p className="text-slate-300 text-sm mt-3 max-w-md">
                  Terima kasih, <b>{formData.name}</b>. Permohonan legalisir Anda telah masuk dalam antrean verifikasi Tata Usaha. Notifikasi status dan nomor resi pengiriman akan dikirimkan ke nomor WhatsApp <b>{formData.phone}</b>.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 liquid-btn-primary !text-xs !py-2.5 !px-6"
                >
                  Ajukan Permohonan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Formulir Permohonan Legalisir
                  </h3>
                  <p className="text-xs text-slate-400">
                    Isi data diri Anda secara akurat sesuai data yang tercantum pada Ijazah asli.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nama Lengkap Siswa / Alumni *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Muhammad Rizky"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      NISN / Nomor Ijazah *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: 0054321987"
                      value={formData.nisn}
                      onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Program Keahlian *
                    </label>
                    <select
                      value={formData.major}
                      onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      className="liquid-input !text-xs bg-slate-900"
                    >
                      <option value="Teknik Kendaraan Ringan">Teknik Kendaraan Ringan (TKR)</option>
                      <option value="Manajemen Perkantoran">Manajemen Perkantoran (MP)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Tahun Kelulusan *
                    </label>
                    <input
                      required
                      type="number"
                      min="2018"
                      max="2025"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="liquid-input !text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Jumlah Lembar *
                    </label>
                    <select
                      value={formData.copies}
                      onChange={(e) => setFormData({ ...formData, copies: e.target.value })}
                      className="liquid-input !text-xs bg-slate-900"
                    >
                      <option value="3">3 Lembar</option>
                      <option value="5">5 Lembar</option>
                      <option value="10">10 Lembar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="0812xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="liquid-input !text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Alamat Lengkap Pengiriman Berkas *
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Nama jalan, nomor rumah, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Kode Pos"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="liquid-input !text-xs"
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Catatan Tambahan (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Misal: untuk keperluan seleksi kerja PT MMKI"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="liquid-input !text-xs"
                  />
                </div>

                <button type="submit" className="liquid-btn-primary mt-2">
                  <i className="fas fa-paper-plane text-xs mr-1"></i>
                  <span>Kirim Permohonan Legalisir</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalisirDiRumah;