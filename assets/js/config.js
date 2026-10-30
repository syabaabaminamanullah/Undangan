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
    ogImage: "assets/images/foto-berdua.png"
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
      instagram: "https://www.instagram.com/abud_doclo?utm_source=qr&exln=MTh3dG5scjRsZmZ2bA==",
      instagramHandle: "@abud_doclo",
      avatar: "assets/images/foto-abud.png",
      bio: "Menemukan pelabuhan cinta dan ketenangan hati bersama Intan, melangkah bersama dalam ridho Ilahi."
    },
    bride: {
      callName: "Intan",
      fullName: "Intan Syintia Nurrannisa",
      father: "Bpk. M. Muhsinul K.",
      mother: "Ibu Herni Nuraeni",
      childOrder: "Putri pertama dari",
      instagram: "https://www.instagram.com/intansyintiaintansyintia?mdxt=MTB4bWt5eXR2bzg2ag==",
      instagramHandle: "@intansyintiaintansyintia",
      avatar: "assets/images/foto-intan-latar-biru.jpeg",
      bio: "Merajut rasa dan asa bersama Abud menuju bahtera rumah tangga yang sakinah, mawaddah, warahmah."
    }
  },

  // Kutipan Suci / Pembuka
  quote: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
    source: "QS. Ar-Rum: 21"
  },

  // Waktu & Tanggal Acara Utama (untuk Hitung Mundur / Countdown Resepsi)
  // Format: YYYY-MM-DDTHH:mm:ss
  eventDate: "2026-12-20T08:00:00",

  // Detail Acara (Akad Nikah & Resepsi)
  events: [
    {
      id: "akad",
      tag: "SACRED CEREMONY",
      title: "Akad Nikah",
      dateStr: "Senin, 14 Desember 2026",
      timeStr: "08:00 WIB s/d Selesai",
      venueName: "Kediaman Mempelai Wanita",
      venueDetail: "Kp. Sindangsari RT 01 RW 10 Desa Pananjung, Kecamatan Cangkuang, Kabupaten Bandung",
      mapsUrl: "https://maps.app.goo.gl/iffcdeXpiphR9kZx9",
      directionUrl: "https://www.google.com/maps/dir/?api=1&destination=-7.0490005,107.526473",
      embedMap: "https://maps.google.com/maps?q=-7.0490005,107.526473&hl=id&z=16&output=embed",
      calendar: {
        title: "The Wedding of Abud & Intan - Akad Nikah",
        description: "Menghadiri prosesi Akad Nikah Abud & Intan di Kediaman Mempelai Wanita, Kp. Sindangsari RT 01 RW 10 Desa Pananjung, Cangkuang, Bandung.",
        location: "Kp. Sindangsari RT 01 RW 10 Desa Pananjung, Kecamatan Cangkuang, Kabupaten Bandung",
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
      venueDetail: "Kp. Haur Duni RT 03 RW 10 Desa Pananjung, Kecamatan Cangkuang, Kabupaten Bandung",
      mapsUrl: "https://maps.app.goo.gl/5eMH1nHU8JZHMRxw9",
      directionUrl: "https://www.google.com/maps/dir/?api=1&destination=-7.051779,107.526431",
      embedMap: "https://maps.google.com/maps?q=-7.051779,107.526431&hl=id&z=16&output=embed",
      calendar: {
        title: "The Wedding of Abud & Intan - Resepsi Pernikahan",
        description: "Merayakan resepsi pernikahan Abud & Intan di Kediaman Mempelai Pria, Kp. Haur Duni, Desa Pananjung, Cangkuang, Bandung.",
        location: "Kp. Haur Duni RT 03 RW 10 Desa Pananjung, Kecamatan Cangkuang, Kabupaten Bandung",
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

  // Pengaturan Tampilan Bagian Halaman (Show / Hide)
  sections: {
    story: false // Set false untuk menyembunyikan bagian Kisah Cinta
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
      url: "assets/images/foto-berdua.png",
      caption: "Abud & Intan — Momen Bersama",
      category: "couple"
    },
    {
      url: "assets/images/foto-abud.png",
      caption: "Abdullah Nur Cahya (Abud)",
      category: "portrait"
    },
    {
      url: "assets/images/foto-intan-latar-biru.jpeg",
      caption: "Intan Syintia Nurrannisa (Intan)",
      category: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      caption: "Menatap Hari Bahagia",
      category: "nature"
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
    poster: "assets/images/foto-berdua.png"
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
        bankName: "SeaBank",
        accountNumber: "901956202880",
        accountHolder: "Abdullah Nur Cahya",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/SeaBank_logo.svg"
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
      address: "Kp. Haur Duni RT 03 RW 10 Desa Pananjung, Kecamatan Cangkuang, Kabupaten Bandung",
      note: "Konfirmasi pengiriman kado dapat dilakukan via WhatsApp mempelai."
    }
  },

  // Background Music & Playlist Lagu Romantis Pernikahan Terpopuler
  music: {
    title: "Canon in D",
    artist: "Johann Pachelbel (Wedding Classic)",
    url: "assets/audio/canon-in-d.mp3",
    autoplayOnOpen: true,
    popularWeddingSongs: [
      {
        id: "s1",
        title: "Canon in D",
        artist: "Johann Pachelbel",
        tag: "Wedding Sacred Classic",
        desc: "Karya agung klasik pernikahan paling sakral dan legendaris di seluruh dunia (dasar dari melodi Canon Rock).",
        url: "assets/audio/canon-in-d.mp3"
      },
      {
        id: "s2",
        title: "Wedding March (Bridal Chorus)",
        artist: "Felix Mendelssohn",
        tag: "Royal Wedding Processional",
        desc: "Lagu prosesi sakral saat kedua mempelai melangkah gagah dan anggun menuju pelaminan suci.",
        url: "assets/audio/wedding-march.mp3"
      },
      {
        id: "s3",
        title: "Air on the G String",
        artist: "Johann Sebastian Bach",
        tag: "Romantic Serenade",
        desc: "Alunan dawai biola yang tenang, damai, dan penuh kehangatan cinta yang abadi.",
        url: "assets/audio/air-on-g.mp3"
      },
      {
        id: "s4",
        title: "Ave Maria",
        artist: "Franz Schubert",
        tag: "Sacred Blessing Anthem",
        desc: "Lantunan doa suci yang agung, memohon limpahan rahmat dan keberkahan bagi kedua mempelai.",
        url: "assets/audio/ave-maria.mp3"
      },
      {
        id: "s5",
        title: "Liebestraum No. 3 (Mimpi Cinta)",
        artist: "Franz Liszt",
        tag: "Romantic Piano Masterpiece",
        desc: "Komposisi piano romantis termasyhur tentang impian cinta sejati yang tulus dan mendalam.",
        url: "assets/audio/liebestraum.mp3"
      },
      {
        id: "s6",
        title: "The Four Seasons: Spring",
        artist: "Antonio Vivaldi",
        tag: "Joyful Wedding Celebration",
        desc: "Alunan ceria penuh suka cita merayakan awal lembaran baru kehidupan rumah tangga.",
        url: "assets/audio/vivaldi-spring.mp3"
      },
      {
        id: "s7",
        title: "Für Elise",
        artist: "Ludwig van Beethoven",
        tag: "Beloved Classical Romance",
        desc: "Melodi piano legendaris paling dicintai dengan nuansa manis dan penuh ketulusan hati.",
        url: "assets/audio/fur-elise.mp3"
      },
      {
        id: "s8",
        title: "Waltz of the Flowers",
        artist: "Pyotr Ilyich Tchaikovsky",
        tag: "Majestic Wedding Waltz",
        desc: "Tarian waltz megah dan mewah yang mempercantik suasana pesta pernikahan bertema floral.",
        url: "assets/audio/waltz-of-flowers.mp3"
      }
    ]
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
