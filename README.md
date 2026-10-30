# 🌿 Undangan Digital Premium & Natural Botanical Luxury

Sebuah full-set website undangan pernikahan digital berstandar **Haute Couture Luxury** dengan konsep **Natural Botanical Serenity & Royal Wax Seal Unboxing**. Didesain dengan estetika berkelas, interaksi mulus 60 FPS, dan tipografi editorial premium.

---

## ✨ Fitur-Fitur Unggulan (Ikonik & Berbeda Dari yang Lain)

1. **Interactive 3D Wax Seal & Envelope Unboxing**:
   - Sampul amplop bertekstur kertas linen dengan stempel lilin timbul 3D (*wax seal*) berinisial monogram.
   - Efek suara harmoni sakral saat segel ditekan untuk membuka undangan dan memutar musik romantis secara otomatis.

2. **Personalized Dynamic Guest Greeting**:
   - Nama tamu undangan terisi secara otomatis melalui parameter URL (misalnya: `index.html?to=Bapak+Budi+Santoso+Sekeluarga`).
   - Tampil elegan pada sampul amplop dan kartu kehormatan di dalam undangan.

3. **Organic Canvas Particle Physics (Falling Leaves & Golden Sparkles)**:
   - Partikel kelopak daun eucalyptus, olive, dan debu emas yang melayang anggun menggunakan HTML5 Canvas dengan simulasi angin alami.
   - Dilengkapi tombol toggle untuk menyalakan/mematikan efek daun kapan saja.

4. **Floating Vinyl Music Controller**:
   - Pemutar audio berdesain piringan hitam (*vinyl record*) yang berputar saat musik diputar dengan kontrol Play/Pause.

5. **Kalam Ilahi & Doa Sakral**:
   - Ayat suci Al-Qur'an (QS. Ar-Rum: 21) dengan kaligrafi Arab indah, terjemahan puitis, dan ornamen pembatas botani emas.

6. **Profil Kedua Mempelai (The Couple)**:
   - Bingkai foto bernuansa kubah botani (*arch portrait*), informasi silsilah kedua orang tua, kutipan bio romantis, dan tautan Instagram aktif.

7. **Save The Date & Hitung Mundur Real-Time**:
   - *Live Countdown Timer* (Hari, Jam, Menit, Detik) menuju hari H.
   - Kartu jadwal **Akad Nikah** & **Resepsi Pernikahan**.
   - Tombol 1-klik **"Simpan di Kalender"** (terintegrasi otomatis ke Google Calendar).
   - Tombol **"Buka Peta"** & live Google Maps embed.
   - Kartu integrasi **Virtual Attendance (YouTube Live)**.

8. **Love Story / Perjalanan Cinta Interaktif**:
   - Garis waktu vertikal (*timeline*) perjalanan cinta: dari perjumpaan pertama, komitmen, lamaran sakral di Bromo, hingga menuju gerbang pernikahan.

9. **Panduan Busana (Dress Code Palette)**:
   - Palet warna inspirasi busana tamu (*Forest Sage, Olive Moss, Champagne, Terracotta, Linen Ivory*).

10. **Galeri Prewedding & Teaser Sinematik**:
    - Galeri foto grid dengan fitur **Lightbox Fullscreen** (zoom, navigasi slide sebelumnya/berikutnya, dan caption).
    - Teaser video prewedding sinematik.

11. **RSVP & Buku Tamu Interaktif (Live Doa Restu)**:
    - Form konfirmasi kehadiran (Hadir, Berhalangan, Masih Ragu), jumlah tamu, dan ucapan doa restu.
    - Tersimpan langsung di *LocalStorage* browser tamu sehingga ucapan baru langsung muncul seketika di daftar doa.
    - Tombol tanda cinta (*Like / Love counter*) pada setiap ucapan.

12. **Amplop Digital & Gift Registry**:
    - Rekening Bank Central Asia (BCA) & Bank Mandiri dengan tombol 1-klik **"Salin Nomor Rekening"** disertai notifikasi *toast*.
    - Kartu **QRIS Digital** dengan popup modal untuk scan dari berbagai e-wallet & mobile banking.
    - Alamat pengiriman **Kado Fisik** dengan tombol salin alamat lengkap.

13. **Bottom Floating Navigation Dock**:
    - Menu navigasi bergaya iOS modern dengan *Scroll Spy* otomatis yang menyoroti menu sesuai posisi gulir layar.

---

## 🚀 Cara Menjalankan Proyek

### Cara 1: Buka Langsung (Tanpa Instalasi Apapun)
Cukup klik ganda file [`index.html`](file:///d:/web%20dev%20-%20ansa/Undangan%20Digital/index.html) pada file explorer atau buka langsung di peramban favorit Anda (Chrome, Edge, Safari, Firefox).

### Cara 2: Menjalankan Menggunakan Local Server
Jika Anda memiliki Node.js:
```bash
npm.cmd start
```
Buka peramban di `http://localhost:3000`.

---

## 💌 Cara Membuat Tautan Undangan Khusus Tamu

Untuk mengirim undangan dengan nama tamu yang dipersonalisasi di sampul amplop, tambahkan parameter `?to=Nama+Tamu` pada tautan:

- Contoh 1: `index.html?to=Bapak+Joko+Widodo+&+Ibu`
- Contoh 2: `index.html?to=Dian+Sastrowardoyo`
- Contoh 3: `index.html?to=Keluarga+Besar+Alm.+H.+Hasan`

---

## 🛠️ Cara Mengubah Data & Menyesuaikan Undangan

Semua konten dapat disesuaikan dengan mudah di satu tempat:
[`assets/js/config.js`](file:///d:/web%20dev%20-%20ansa/Undangan%20Digital/assets/js/config.js)

Di dalam file tersebut Anda dapat mengubah:
- **Nama kedua mempelai & orang tua**
- **Tanggal & jam acara (Akad & Resepsi)**
- **Nomor rekening bank & logo**
- **Tautan video YouTube & galeri foto**
- **Kutipan ayat suci & perjalanan cinta**

---

## 📂 Struktur File

```
d:\web dev - ansa\Undangan Digital\
├── index.html                   # Halaman utama undangan digital
├── admin.html                   # Dashboard Visual Editor (Ubah data tanpa coding & WhatsApp Generator)
├── package.json                 # Konfigurasi proyek & local server script
├── README.md                    # Dokumentasi lengkap
└── assets/
    ├── css/
    │   └── style.css            # Desain tata letak, animasi 3D, & efek kaca
    ├── js/
    │   ├── config.js            # Pusat pengaturan data seluruh undangan
    │   ├── petals.js            # Mesin fisika partikel kelopak daun & debu emas
    │   └── app.js               # Logika RSVP, audio, modal, salin clipboard, & countdown
    └── images/
        ├── botanical-crest.svg   # Monogram inisial lambang botani emas
        ├── wax-seal.svg          # Segel lilin 3D interaktif
        ├── botanical-divider.svg # Garis pembatas ornamen emas botani
        └── botanical-corner.svg  # Ornamen sudut amplop mewah
```

---

## 🎨 Mengubah Semua Data Tanpa Masuk ke Kode (Visual Editor)

Buka halaman [`admin.html`](file:///d:/web%20dev%20-%20ansa/Undangan%20Digital/admin.html) langsung di browser Anda. Di dashboard ini Anda bisa:
1. Mengubah nama mempelai, orang tua, foto profil, dan kutipan bio.
2. Mengubah tanggal, jam, alamat, dan link Google Maps Akad & Resepsi.
3. Mengubah rekening bank BCA/Mandiri/lainnya dan alamat kirim kado fisik.
4. Mengubah judul lagu, artis, dan link MP3 musik latar.
5. **Generator Tautan Tamu & WhatsApp Massal**: Masukkan daftar nama tamu (1 baris 1 nama), klik satu tombol, dan Anda langsung mendapatkan link personal serta tombol *Kirim ke WhatsApp* otomatis!
6. **Download config.js Baru**: Ekspor data perubahan untuk di-upload ke server hosting kapan saja.
