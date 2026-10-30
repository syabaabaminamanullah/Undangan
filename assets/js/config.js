/**
 * ====================================================================
 * KONFIGURASI UTAMA UNDANGAN DIGITAL (NATURAL BOTANICAL LUXURY)
 * ====================================================================
 */

const WEDDING_CONFIG = {
  // Metadata & SEO
  meta: {
    title: "The Wedding of Abud & Intan | Undangan Pernikahan",
    description: "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda dalam pernikahan Abdullah Nur Cahya (Abud) & Intan Syintia Nurrannisa (Intan).",
    canonicalUrl: "https://undangan-six-flax.vercel.app",
    ogImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },

  // Info Pasangan Mempelai
  couple: {
    title: "Abud & Intan",
    initials: "A & I",
    groom: {
      callName: "Abud",
      fullName: "Abdullah Nur Cahya",
      father: "Bpk. Dargo",
      mother: "Ibu Nin Karwati",
      childOrder: "Putra kedua dari",
      instagram: "https://instagram.com",
      instagramHandle: "@abud",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      bio: "Menemukan pelabuhan cinta dan ketenangan hati bersama Intan, melangkah bersama dalam ridho Ilahi."
    },
    bride: {
      callName: "Intan",
      fullName: "Intan Syintia Nurrannisa",
      father: "Bpk. M. Muhsinul K.",
      mother: "Ibu Herni Nuraeni",
      childOrder: "Putri pertama dari",
      instagram: "https://instagram.com",
      instagramHandle: "@intan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      bio: "Merajut rasa dan asa bersama Abud menuju bahtera rumah tangga yang sakinah, mawaddah, warahmah."
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
  eventDate: "2026-12-14T08:00:00",

  // Detail Acara (Akad Nikah & Resepsi)
  events: [
    {
      id: "akad",
      tag: "SACRED CEREMONY",
      title: "Akad Nikah",
      dateStr: "Senin, 14 Desember 2026",
      timeStr: "08:00 WIB s/d Selesai",
      venueName: "Kediaman Mempelai Pria",
      venueDetail: "Kp. Haurduni RT 03/RW 10, Ds. Pananjung, Kec. Cangkuang, Kab. Bandung",
      mapsUrl: "https://maps.google.com/?q=Kp.+Haurduni+Pananjung+Cangkuang+Bandung",
      embedMap: "https://maps.google.com/maps?q=Kp.+Haurduni+Pananjung+Cangkuang+Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed",
      calendar: {
        title: "The Wedding of Abud & Intan - Akad Nikah",
        description: "Menghadiri prosesi Akad Nikah Abud & Intan di Kp. Haurduni Pananjung Cangkuang Bandung.",
        location: "Kp. Haurduni RT 03/RW 10, Ds. Pananjung, Kec. Cangkuang, Kab. Bandung",
        start: "20261214T080000",
        end: "20261214T110000"
      }
    },
    {
      id: "resepsi",
      tag: "CELEBRATION OF LOVE",
      title: "Resepsi Pernikahan",
      dateStr: "Minggu, 20 Desember 2026",
      timeStr: "08:00 WIB s/d Selesai",
      venueName: "Kediaman Mempelai Pria",
      venueDetail: "Kp. Haurduni RT 03/RW 10, Ds. Pananjung, Kec. Cangkuang, Kab. Bandung",
      mapsUrl: "https://maps.google.com/?q=Kp.+Haurduni+Pananjung+Cangkuang+Bandung",
      embedMap: "https://maps.google.com/maps?q=Kp.+Haurduni+Pananjung+Cangkuang+Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed",
      calendar: {
        title: "The Wedding of Abud & Intan - Resepsi Pernikahan",
        description: "Merayakan resepsi pernikahan Abud & Intan di Kp. Haurduni Pananjung Cangkuang Bandung.",
        location: "Kp. Haurduni RT 03/RW 10, Ds. Pananjung, Kec. Cangkuang, Kab. Bandung",
        start: "20261220T080000",
        end: "20261220T170000"
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
      year: "2022",
      title: "Pertemuan Pertama",
      story: "Awal perjumpaan yang penuh rasa syukur. Berawal dari percakapan sederhana, kami menyadari adanya kecocokan hati dan tujuan yang seirama.",
      tag: "First Encounter"
    },
    {
      year: "2024",
      title: "Menjalin Janji & Komitmen",
      story: "Dua hati yang saling belajar, bertumbuh, dan menguatkan di tengah mimpi masing-masing, mengukuhkan tekad untuk melangkah ke jenjang pernikahan.",
      tag: "Growing in Love"
    },
    {
      year: "2026",
      title: "Menuju Gerbang Abadi",
      story: "Kini, dengan restu kedua orang tua dan memohon ridho Ilahi, kami siap mengikat janji suci pernikahan untuk bersama hingga jannah-Nya.",
      tag: "The Eternal Vow"
    }
  ],

  // Galeri Foto & Prewedding (Bisa diisi link foto Anda)
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      caption: "Di Bawah Kanopi Alam",
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
    youtubeId: "LXb3EKWsInQ",
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
        accountHolder: "Abdullah Nur Cahya",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
      },
      {
        bankName: "Bank Mandiri / BRI",
        accountNumber: "1370018992011",
        accountHolder: "Intan Syintia Nurrannisa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
      }
    ],
    qris: {
      enabled: true,
      title: "QRIS Pembayaran Digital",
      note: "Dapat dipindai dari GoPay, OVO, Dana, ShopeePay, BCA Mobile, & seluruh Mobile Banking.",
      imageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WEDDING-GIFT-ABUD-INTAN"
    },
    physicalGift: {
      enabled: true,
      title: "Kirim Kado Fisik",
      recipient: "Abud & Intan (Kediaman Mempelai Pria)",
      phone: "+62 812-3456-7890",
      address: "Kp. Haurduni RT 03/RW 10, Ds. Pananjung, Kec. Cangkuang, Kab. Bandung",
      note: "Konfirmasi pengiriman kado dapat dilakukan via WhatsApp mempelai."
    }
  },

  // Background Music
  music: {
    title: "Until I Found You - Acoustic Fingerstyle",
    artist: "Stephen Sanchez (Instrumental Cover)",
    url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
    autoplayOnOpen: true
  },

  // Keluarga Besar & Turut Mengundang
  families: [
    "Bpk. Dargo & Ibu Nin Karwati",
    "Bpk. Eman & Ibu Acah",
    "Bpk. Alex & Ibu Herni Nuraeni",
    "Bpk. M. Muhsinul & Ibu Tarmilah",
    "Bpk. Yahya & Ibu Popon"
  ],

  turutMengundang: [
    "Hj. Iis Sutiarsih (Kepala Desa Pananjung)",
    "Kel. Besar PDP Galura Asih",
    "Kel. Besar Sri Rahayu Ubay SR",
    "Kel. Besar Yans Bajing Production",
    "Karang Taruna Pananjung X",
    "Hazats Adventure",
    "Kel. Besar Riweuh Mom Dinda Firtiany / Dikingo",
    "Kel. Besar Bunda Yani (Yani YDR Collection)",
    "Bpk. Tatang Encis & Ibu Eulis Dedeh (Ketua RW 10)",
    "Bpk. Soni & Ibu Siti",
    "Bpk. Agus Bohlam & Ibu Winda",
    "Bpk. Jaja & Ibu Sumarni",
    "Bpk. Diki & Ibu Danti",
    "Bpk. Ferdi & Ibu Putri",
    "Bpk. Jaka & Ibu Ema"
  ],

  // Default Ucapan Awal di Buku Tamu
  initialWishes: [
    {
      id: "w1",
      name: "Hj. Iis Sutiarsih (Kades Pananjung)",
      attendance: "hadir",
      pax: 2,
      time: "Baru saja",
      message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khoir. Selamat menempuh hidup baru untuk ananda Abud dan Intan. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      likes: 15
    },
    {
      id: "w2",
      name: "Kel. Besar PDP Galura Asih",
      attendance: "hadir",
      pax: 5,
      time: "1 jam yang lalu",
      message: "Selamat berbahagia kang Abud dan teh Intan! Semoga dilancarkan acaranya sampai hari H dan selalu diberkahi kebahagiaan.",
      likes: 9
    },
    {
      id: "w3",
      name: "Karang Taruna Pananjung X",
      attendance: "hadir",
      pax: 4,
      time: "2 jam yang lalu",
      message: "Wilujeng ngambah sagara rumah tangga kanggo Kang Abud & Teh Intan. Samawa salalamina!",
      likes: 7
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
