import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import { dataHubungiKami } from "../../../service/data";

const HubungiKami = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Informasi PPDB",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Informasi PPDB",
        message: ""
      });
    }, 4000);
  };

  return (
    <PageLayout
      badge="Pusat Layanan & Kontak"
      title="Hubungi SMK Gema Nusantara"
      subtitle="Kami siap melayani kebutuhan informasi pendaftaran siswa baru, verifikasi keaslian dokumen alumni, kerja sama industri, dan konsultasi akademik vokasi."
      breadcrumbs={[
        { label: "Hubungi Kami" }
      ]}
    >
      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 group hover:border-blue-400/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 text-base mb-3">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p className="text-xs text-slate-400 font-medium">Alamat Kampus</p>
          <p className="text-sm font-bold text-white mt-0.5">
            Jl. Raya Cibarusah, Warung Bambu, Bekasi
          </p>
        </div>

        <div className="liquid-card p-5 group hover:border-cyan-400/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-base mb-3">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <p className="text-xs text-slate-400 font-medium">Email Resmi</p>
          <a
            href="mailto:mail@smkgemanusantara.sch.id"
            className="text-sm font-bold text-white hover:text-cyan-300 transition-colors mt-0.5 block"
          >
            mail@smkgemanusantara.sch.id
          </a>
        </div>

        <div className="liquid-card p-5 group hover:border-emerald-400/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-base mb-3">
            <i className="fa-solid fa-phone"></i>
          </div>
          <p className="text-xs text-slate-400 font-medium">Layanan Telepon & WA</p>
          <p className="text-sm font-bold text-white mt-0.5">
            (021) 8995-XXXX / Hotline PPDB
          </p>
        </div>

        <div className="liquid-card p-5 group hover:border-amber-400/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 text-base mb-3">
            <i className="fa-regular fa-clock"></i>
          </div>
          <p className="text-xs text-slate-400 font-medium">Jam Pelayanan Kantor</p>
          <p className="text-sm font-bold text-white mt-0.5">
            Senin - Jumat: 07.30 - 16.00 WIB
          </p>
        </div>
      </div>

      {/* Main Form & School Legal Info Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-5 liquid-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="liquid-badge mb-2">Pesan Cepat</span>
            <h2 className="text-xl font-bold text-white font-heading mb-2">
              Kirimkan Pertanyaan Anda
            </h2>
            <p className="text-xs text-slate-300 mb-6">
              Tim Tata Usaha dan Informasi Publik kami akan membalas pesan Anda maksimal 1x24 jam kerja.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-center animate-fade-in">
                <i className="fa-solid fa-circle-check text-3xl text-emerald-400 block mb-3"></i>
                <h4 className="text-base font-bold text-white mb-1">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs text-slate-300">
                  Terima kasih telah menghubungi SMK Gema Nusantara. Petugas kami akan segera menghubungi Anda melalui kontak yang dicantumkan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Rahmat Hidayat"
                    className="w-full liquid-input px-3.5 py-2.5 text-xs text-white placeholder-slate-500 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full liquid-input px-3.5 py-2.5 text-xs text-white placeholder-slate-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1.5">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-XXXX-XXXX"
                      className="w-full liquid-input px-3.5 py-2.5 text-xs text-white placeholder-slate-500 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1.5">
                    Kategori Keperluan
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full liquid-input px-3.5 py-2.5 text-xs text-slate-200 rounded-xl cursor-pointer"
                  >
                    <option value="Informasi PPDB" className="bg-slate-900 text-white">Informasi PPDB (Pendaftaran Siswa)</option>
                    <option value="Kemitraan Industri" className="bg-slate-900 text-white">Kemitraan Industri & Rekrutmen Lulusan</option>
                    <option value="Legalisir & Dokumen Alumni" className="bg-slate-900 text-white">Legalisir & Dokumen Alumni</option>
                    <option value="Konsultasi Akademik" className="bg-slate-900 text-white">Konsultasi Kurikulum & Jurusan</option>
                    <option value="Lainnya" className="bg-slate-900 text-white">Pertanyaan Umum Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1.5">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau informasi yang Anda butuhkan..."
                    className="w-full liquid-input px-3.5 py-2.5 text-xs text-white placeholder-slate-500 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Kirim Pesan Resmi</span>
                  <i className="fa-solid fa-arrow-right text-[11px]"></i>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* School Legal Data Bento Grid */}
        <div className="lg:col-span-7 space-y-6">
          {/* Data Sekolah Kita */}
          {dataHubungiKami.dataSekolah && dataHubungiKami.dataSekolah.map((item) => (
            <div key={item.id} className="liquid-card p-6 border-white/10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="text-base font-bold text-white font-heading">{item.title}</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                  Akreditasi {item.akreditasi}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Kepala Sekolah</span>
                  <span className="text-xs font-bold text-white">{item.kepsek}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Operator Sekolah</span>
                  <span className="text-xs font-bold text-white">{item.operator}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Kurikulum</span>
                  <span className="text-xs font-bold text-blue-300">{item.kurikulum}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Waktu Belajar</span>
                  <span className="text-xs font-bold text-white">{item.waktu}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 col-span-2">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Status Sekolah</span>
                  <span className="text-xs font-bold text-emerald-300">SMK Pusat Keunggulan (SMK-PK)</span>
                </div>
              </div>
            </div>
          ))}

          {/* Identitas Sekolah */}
          {dataHubungiKami.identitasSekolah && dataHubungiKami.identitasSekolah.map((item) => (
            <div key={item.id} className="liquid-card p-6 border-white/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <h3 className="text-base font-bold text-white font-heading">{item.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">NPSN:</span>
                  <span className="text-white font-mono font-bold">{item.NPSN}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Status / Bentuk:</span>
                  <span className="text-white font-bold">{item.status} ({item.bentukPendidikan})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Status Kepemilikan:</span>
                  <span className="text-white font-bold">{item.statusKepemilikan}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">No. SK Pendirian:</span>
                  <span className="text-white font-mono">{item.SKPendirianSekolah} ({item.tanggalSKPendirian})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5 sm:col-span-2">
                  <span className="text-slate-400">SK Izin Operasional:</span>
                  <span className="text-white font-mono text-[11px]">{item.SKIzinOperasional}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5 sm:col-span-2">
                  <span className="text-slate-400">Tanggal SK Izin:</span>
                  <span className="text-cyan-300 font-mono">{item.tanggalSKIzinOperasional}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Kontak Utama & Geografis */}
          {dataHubungiKami.kontakUtama && dataHubungiKami.kontakUtama.map((item) => (
            <div key={item.id} className="liquid-card p-6 border-white/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-base font-bold text-white font-heading">{item.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5 sm:col-span-2">
                  <span className="text-slate-400">Alamat:</span>
                  <span className="text-white font-semibold text-right">{item.alamat}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">RT / RW & Dusun:</span>
                  <span className="text-white font-medium">{item.RTRW}, {item.dusun}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Desa / Kelurahan:</span>
                  <span className="text-white font-medium">{item.desakelurahan}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Kecamatan:</span>
                  <span className="text-white font-medium">{item.kecamatan}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Kabupaten / Prov:</span>
                  <span className="text-white font-medium">{item.kabupatenkota || item.kabupaten || "Kab. Bekasi"}, {item.provinsi}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Kode Pos:</span>
                  <span className="text-cyan-300 font-mono font-bold">{item.kodepos}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Koordinat (Lintang/Bujur):</span>
                  <span className="text-slate-300 font-mono">{item.lintang}, {item.bujur}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Maps Embed in Liquid Glass Frame */}
      <div className="liquid-card p-4 md:p-6 border-white/15 overflow-hidden">
        <div className="flex items-center justify-between mb-4 px-2">
          <div>
            <h3 className="text-base font-bold text-white font-heading">
              Lokasi Kampus SMK Gema Nusantara di Google Maps
            </h3>
            <p className="text-xs text-slate-400">
              Jl. Raya Cibarusah, Sindangmulya, Kec. Cibarusah, Kabupaten Bekasi, Jawa Barat
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=SMK+Gema+Nusantara+Cibarusah"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Buka di Google Maps</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>

        <div className="w-full h-80 md:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900">
          <iframe
            title="Google Maps SMK Gema Nusantara"
            className="w-full h-full border-0"
            src={dataHubungiKami.mapLocation}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default HubungiKami;