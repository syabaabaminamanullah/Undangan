/**
 * ====================================================================
 * KONFIGURASI UTAMA UNDANGAN DIGITAL (NATURAL BOTANICAL LUXURY)
 * ====================================================================
 * Anda dapat mengubah semua data undangan dengan sangat mudah di file ini.
 */

const WEDDING_CONFIG = {
  // Metadata & SEO
  meta: {
    title: "The Wedding of Arya & Anindita | Undangan Pernikahan",
    description: "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan kami.",
    canonicalUrl: "https://arya-anindita.wedding",
    ogImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },

  // Info Pasangan Mempelai
  couple: {
    title: "Arya & Anindita",
    initials: "A & A",
    groom: {
      callName: "Arya",
      fullName: "Raden Arya Pratama, S.T., M.Sc.",
      father: "Bpk. Ir. H. Bambang Sujarwo",
      mother: "Ibu Hj. Siti Nurhaliza",
      childOrder: "Putra pertama dari",
      instagram: "https://instagram.com/aryapratama",
      instagramHandle: "@aryapratama",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      bio: "Pria pecinta alam dan arsitektur yang menemukan rumah sejatinya di dalam senyum Anindita."
    },
    bride: {
      callName: "Anindita",
      fullName: "dr. Anindita Larasati, Sp.A.",
      father: "Bpk. Dr. H. Hendra Kusuma, Sp.PD",
      mother: "Ibu Dra. Hj. Ratna Sari Dewi",
      childOrder: "Putri kedua dari",
      instagram: "https://instagram.com/aninditalarasati",
      instagramHandle: "@aninditalarasati",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      bio: "Dokter anak berhati hangat yang mencintai aroma hujan, sastra, dan tawa tulus Arya."
    }
  },

  // Kutipan Suci / Pembuka
  quote: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
    source: "QS. Ar-Rum: 21"
  },

  // Waktu & Tanggal Acara Utama (untuk Hitung Mundur / Countdown)
  // Format: YYYY-MM-DDTHH:mm:ss
  eventDate: "2026-12-12T08:00:00",

  // Detail Acara (Akad Nikah & Resepsi)
  events: [
    {
      id: "akad",
      tag: "SACRED CEREMONY",
      title: "Akad Nikah",
      dateStr: "Sabtu, 12 Desember 2026",
      timeStr: "08:00 - 10:00 WIB",
      venueName: "The Glass House Pavilion - Plataran Borobudur",
      venueDetail: "Dusun Tanjungan, Borobudur, Magelang, Jawa Tengah",
      mapsUrl: "https://maps.google.com/?q=Plataran+Heritage+Borobudur",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.8647898516244!2d110.1989679!3d-7.6005856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf61db1d1ab%3A0x67394d2fa8c13009!2sPlataran%20Heritage%20Borobudur%20Hotel!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
      calendar: {
        title: "The Wedding of Arya & Anindita - Akad Nikah",
        description: "Menghadiri prosesi Akad Nikah Arya & Anindita di Plataran Borobudur.",
        location: "Plataran Heritage Borobudur, Magelang",
        start: "20261212T080000",
        end: "20261212T100000"
      }
    },
    {
      id: "resepsi",
      tag: "CELEBRATION OF LOVE",
      title: "Resepsi Pernikahan",
      dateStr: "Sabtu, 12 Desember 2026",
      timeStr: "11:30 - 15:00 WIB",
      venueName: "Grand Pine Garden Ballroom - Plataran Borobudur",
      venueDetail: "Dusun Tanjungan, Borobudur, Magelang, Jawa Tengah",
      mapsUrl: "https://maps.google.com/?q=Plataran+Heritage+Borobudur",
      embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.8647898516244!2d110.1989679!3d-7.6005856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf61db1d1ab%3A0x67394d2fa8c13009!2sPlataran%20Heritage%20Borobudur%20Hotel!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
      calendar: {
        title: "The Wedding of Arya & Anindita - Resepsi Pernikahan",
        description: "Merayakan resepsi pernikahan Arya & Anindita di Plataran Borobudur.",
        location: "Grand Pine Garden, Plataran Borobudur",
        start: "20261212T113000",
        end: "20261212T150000"
      }
    }
  ],

  // Live Streaming (jika ada tamu yang hadir virtual)
  liveStream: {
    enabled: true,
    platform: "YouTube Live",
    url: "https://www.youtube.com",
    label: "Tonton Siaran Langsung",
    note: "Bagi sahabat dan kerabat yang berhalangan hadir secara langsung, silakan ikuti prosesi secara virtual."
  },

  // Perjalanan Cinta / Love Story
  stories: [
    {
      year: "2021",
      title: "Pertemuan Pertama di Yogyakarta",
      story: "Sebuah perjumpaan tak terduga di kedai buku sudut Malioboro di bawah rinai gerimis senja. Berawal dari percakapan hangat tentang karya sastra, kami menyadari ada getaran rasa yang tak biasa.",
      tag: "First Encounter"
    },
    {
      year: "2023",
      title: "Menjalin Janji & Bertumbuh Bersama",
      story: "Dua hati yang saling belajar, bertumbuh, dan menguatkan di tengah mimpi masing-masing. Jarak dan waktu hanya mempertegas bahwa rumah terbaik adalah ketika kita saling mendengarkan.",
      tag: "Growing in Love"
    },
    {
      year: "2025",
      title: "Momen Sakral Lamaran di Bromo",
      story: "Di hadapan fajar keemasan Gunung Bromo dengan hembusan angin sejuk, sebuah cincin tersemat dengan janji suci untuk menapaki sisa usia bersama dalam ridho Ilahi.",
      tag: "The Proposal"
    },
    {
      year: "2026",
      title: "Menuju Gerbang Abadi",
      story: "Kini, kami mengundang Anda untuk menjadi saksi pengikatan janji suci cinta kami menuju bahtera rumah tangga yang sakinah, mawaddah, warahmah.",
      tag: "The Eternal Vow"
    }
  ],

  // Galeri Foto & Prewedding
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      caption: "Di Bawah Kanopi Cemara",
      category: "nature"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
      caption: "Genggaman Menuju Masa Depan",
      category: "intimate"
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
      caption: "Cahaya Senja & Senyuman Tulus",
      category: "nature"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      caption: "Menatap Hari Bahagia",
      category: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=80",
      caption: "Keabadian dalam Setiap Detik",
      category: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
      caption: "Dua Jiwa, Satu Tujuan",
      category: "intimate"
    }
  ],

  // Video Teaser Prewedding
  videoTeaser: {
    enabled: true,
    title: "Cinematic Prewedding Film",
    subtitle: "A glimpse of our sacred journey",
    youtubeId: "LXb3EKWsInQ", // sample ambient nature cinematic video
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },

  // Dress Code Panduan Pakaian
  dresscode: {
    title: "Panduan Busana (Dress Code)",
    description: "Untuk menambah keindahan dan keselarasan dalam mengabadikan momen berharga, kami mengundang para tamu undangan mengenakan busana dengan nuansa warna:",
    themeName: "Earth Tone & Botanical Serenity",
    colors: [
      { name: "Forest Sage", hex: "#4A5D4E", textColor: "#FFFFFF" },
      { name: "Olive Moss", hex: "#78866B", textColor: "#FFFFFF" },
      { name: "Warm Champagne", hex: "#D6C7A1", textColor: "#2C3E2D" },
      { name: "Earthy Terracotta", hex: "#BA7A58", textColor: "#FFFFFF" },
      { name: "Soft Linen Ivory", hex: "#F5F2EB", textColor: "#2C3E2D" }
    ],
    note: "Dress Code bersifat anjuran (optional). Kenyamanan Anda tetap menjadi prioritas kami."
  },

  // Amplop Digital / Wedding Gift & Angpao
  gifts: {
    title: "Tanda Kasih (Wedding Gift)",
    subtitle: "Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah ungkapan kasih Anda, kami menyediakan kemudahan amplop digital & pengiriman tanda kasih di bawah ini:",
    banks: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "8735091244",
        accountHolder: "Raden Arya Pratama",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1370018992011",
        accountHolder: "Anindita Larasati",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
      }
    ],
    qris: {
      enabled: true,
      title: "QRIS Pembayaran Digital",
      note: "Dapat dipindai dari GoPay, OVO, Dana, ShopeePay, BCA Mobile, & seluruh Mobile Banking.",
      imageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WEDDING-GIFT-ARYA-ANINDITA"
    },
    physicalGift: {
      enabled: true,
      title: "Kirim Kado Fisik",
      recipient: "Arya & Anindita (Kediaman Arya)",
      phone: "+62 812-3456-7890",
      address: "Jl. Taman Botanical Asri No. 18, Sleman, D.I. Yogyakarta 55281",
      note: "Konfirmasi pengiriman kado dapat dilakukan via WhatsApp mempelai."
    }
  },

  // Background Music
  music: {
    title: "Until I Found You - Acoustic Fingerstyle",
    artist: "Stephen Sanchez (Instrumental Cover)",
    // High quality royalty-free romantic guitar streaming audio
    url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
    autoplayOnOpen: true
  },

  // Default Ucapan Awal di Buku Tamu
  initialWishes: [
    {
      id: "w1",
      name: "Prof. Dr. Ir. H. Suryo Prabowo",
      attendance: "hadir",
      pax: 2,
      time: "10 menit yang lalu",
      message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khoir. Selamat menempuh hidup baru untuk ananda Arya dan Anindita. Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
      likes: 12
    },
    {
      id: "w2",
      name: "dr. Michelle Valerie & Suami",
      attendance: "hadir",
      pax: 2,
      time: "1 jam yang lalu",
      message: "Happy wedding dokter Anindita dan Mas Arya! Masya Allah serasi banget. Semoga bahagia selalu sampai maut memisahkan yaa, can't wait to see you on your special day!",
      likes: 8
    },
    {
      id: "w3",
      name: "Dimas Anggara & Rekan Arsitek",
      attendance: "hadir",
      pax: 3,
      time: "2 jam yang lalu",
      message: "Selamat brader Arya! Akhirnya pelabuhan terakhir ditemukan juga. Semoga lancar acaranya sampai hari H, bahagia dunia akhirat bro!",
      likes: 5
    },
    {
      id: "w4",
      name: "Sarah Amanda, S.Kom.",
      attendance: "ragu",
      pax: 1,
      time: "Kemarin",
      message: "Selamat yaa Anindita & Mas Arya! Doa terbaik untuk kalian berdua. Semoga dilancarkan semua persiapannya yaa cantikk.",
      likes: 3
    }
  ],

  // Protokol Acara
  protocols: [
    {
      icon: "sparkles",
      title: "Kebersihan & Kenyamanan",
      desc: "Mari bersama menjaga kenyamanan dan ketertiban area selama prosesi berlangsung."
    },
    {
      icon: "camera-off",
      title: "Momen Sakral Khidmat",
      desc: "Dimohon menjaga kekhidmatan saat prosesi ijab qabul berlangsung."
    },
    {
      icon: "heart-handshake",
      title: "Doa & Restu Tulus",
      desc: "Senyuman dan doa restu tulus Anda adalah hadiah paling berharga bagi kedua mempelai."
    }
  ]
};

// Export to window
window.WEDDING_CONFIG = WEDDING_CONFIG;
