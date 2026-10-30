/**
 * ====================================================================
 * APLIKASI UTAMA UNDANGAN DIGITAL (NATURAL BOTANICAL LUXURY)
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check for custom config saved from visual admin dashboard
  // Base config (from config.js file) is the source of truth for media & songs
  const BASE_CONFIG = window.WEDDING_CONFIG;
  const CONFIG_VERSION = "2.1"; // bump when breaking changes occur

  let config = BASE_CONFIG;
  try {
    const customConfig = localStorage.getItem("wedding_custom_config");
    if (customConfig) {
      const saved = JSON.parse(customConfig);

      // If saved config is from an old version, discard it to avoid stale data
      if (!saved._version || saved._version !== CONFIG_VERSION) {
        console.info("Config version mismatch — clearing stale localStorage config.");
        localStorage.removeItem("wedding_custom_config");
      } else {
        config = saved;
        // Always pull images & songs from the base config (file-served assets)
        // so that newly committed photos are always reflected
        if (BASE_CONFIG) {
          config.couple.groom.avatar = BASE_CONFIG.couple.groom.avatar;
          config.couple.bride.avatar = BASE_CONFIG.couple.bride.avatar;
          // Always use base config for IG links (real accounts)
          config.couple.groom.instagram = BASE_CONFIG.couple.groom.instagram;
          config.couple.groom.instagramHandle = BASE_CONFIG.couple.groom.instagramHandle;
          config.couple.bride.instagram = BASE_CONFIG.couple.bride.instagram;
          config.couple.bride.instagramHandle = BASE_CONFIG.couple.bride.instagramHandle;
          config.gallery = BASE_CONFIG.gallery;
          config.meta.ogImage = BASE_CONFIG.meta.ogImage;
          if (BASE_CONFIG.music && BASE_CONFIG.music.popularWeddingSongs) {
            if (!config.music) config.music = {};
            config.music.popularWeddingSongs = BASE_CONFIG.music.popularWeddingSongs;
          }
          if (BASE_CONFIG.videoTeaser) {
            config.videoTeaser = BASE_CONFIG.videoTeaser;
          }
          if (BASE_CONFIG.eventDate) {
            config.eventDate = BASE_CONFIG.eventDate;
          }
          if (saved.sections && typeof saved.sections.story !== 'undefined') {
            config.sections = saved.sections;
          } else if (BASE_CONFIG.sections) {
            config.sections = BASE_CONFIG.sections;
          }
        }
        window.WEDDING_CONFIG = config;
      }
    }
  } catch (e) {
    console.warn("Could not load custom config from localStorage", e);
    config = BASE_CONFIG;
  }

  // Always ensure popularWeddingSongs is available (fallback to base)
  if (BASE_CONFIG && BASE_CONFIG.music && BASE_CONFIG.music.popularWeddingSongs) {
    if (!config.music) config.music = BASE_CONFIG.music;
    if (!config.music.popularWeddingSongs) {
      config.music.popularWeddingSongs = BASE_CONFIG.music.popularWeddingSongs;
    }
  }

  if (!config) {
    console.error("Wedding configuration not found.");
    return;
  }

  // Bind dynamic fields from config to DOM
  function bindConfigToDom() {
    if (config.meta && config.meta.title) {
      document.title = config.meta.title;
    }

    // Couple Names on Cover Envelope, Hero, Footer
    const coupleTitles = document.querySelectorAll(".dyn-couple-title");
    coupleTitles.forEach(el => {
      el.innerHTML = `${escapeHtml(config.couple.groom.callName)} <span class="text-gold">&amp;</span> ${escapeHtml(config.couple.bride.callName)}`;
    });

    // Groom
    const groomName = document.querySelector(".dyn-groom-name");
    const groomParents = document.querySelector(".dyn-groom-parents");
    const groomBio = document.querySelector(".dyn-groom-bio");
    const groomIg = document.querySelector(".dyn-groom-ig");
    const groomAvatar = document.querySelector(".dyn-groom-avatar");
    if (groomName) groomName.textContent = config.couple.groom.fullName;
    if (groomParents) {
      groomParents.innerHTML = `${escapeHtml(config.couple.groom.childOrder || 'Putra pertama dari')} :<br><strong class="font-medium text-stone-800">${escapeHtml(config.couple.groom.father)}</strong> &amp;<br><strong class="font-medium text-stone-800">${escapeHtml(config.couple.groom.mother)}</strong>`;
    }
    if (groomBio) groomBio.textContent = `"${config.couple.groom.bio}"`;
    if (groomIg) {
      groomIg.textContent = config.couple.groom.instagramHandle || "@abud_doclo";
      // Use full instagram URL if available, else build from handle
      const groomIgUrl = config.couple.groom.instagram
        || `https://instagram.com/${(config.couple.groom.instagramHandle || 'abud_doclo').replace('@', '')}`;
      groomIg.parentElement.href = groomIgUrl;
    }
    if (groomAvatar && config.couple.groom.avatar) groomAvatar.src = config.couple.groom.avatar;

    // Bride
    const brideName = document.querySelector(".dyn-bride-name");
    const brideParents = document.querySelector(".dyn-bride-parents");
    const brideBio = document.querySelector(".dyn-bride-bio");
    const brideIg = document.querySelector(".dyn-bride-ig");
    const brideAvatar = document.querySelector(".dyn-bride-avatar");
    if (brideName) brideName.textContent = config.couple.bride.fullName;
    if (brideParents) {
      brideParents.innerHTML = `${escapeHtml(config.couple.bride.childOrder || 'Putri kedua dari')} :<br><strong class="font-medium text-stone-800">${escapeHtml(config.couple.bride.father)}</strong> &amp;<br><strong class="font-medium text-stone-800">${escapeHtml(config.couple.bride.mother)}</strong>`;
    }
    if (brideBio) brideBio.textContent = `"${config.couple.bride.bio}"`;
    if (brideIg) {
      brideIg.textContent = config.couple.bride.instagramHandle || "@intansyintiaintansyintia";
      // Use full instagram URL if available, else build from handle
      const brideIgUrl = config.couple.bride.instagram
        || `https://instagram.com/${(config.couple.bride.instagramHandle || 'intansyintiaintansyintia').replace('@', '')}`;
      brideIg.parentElement.href = brideIgUrl;
    }
    if (brideAvatar && config.couple.bride.avatar) brideAvatar.src = config.couple.bride.avatar;

    // Events (Akad & Resepsi)
    const akad = config.events[0];
    if (akad) {
      const elDate = document.querySelector(".dyn-akad-date");
      const elTime = document.querySelector(".dyn-akad-time");
      const elVenue = document.querySelector(".dyn-akad-venue");
      const elAddr = document.querySelector(".dyn-akad-address");
      const elMaps = document.querySelector(".dyn-akad-maps");
      if (elDate) elDate.textContent = akad.dateStr;
      if (elTime) elTime.textContent = akad.timeStr;
      if (elVenue) elVenue.textContent = akad.venueName;
      if (elAddr) elAddr.textContent = akad.venueDetail;
      if (elMaps && akad.mapsUrl) elMaps.href = akad.mapsUrl;
    }

    const resepsi = config.events[1];
    if (resepsi) {
      const elDate = document.querySelector(".dyn-resepsi-date");
      const elTime = document.querySelector(".dyn-resepsi-time");
      const elVenue = document.querySelector(".dyn-resepsi-venue");
      const elAddr = document.querySelector(".dyn-resepsi-address");
      const elMaps = document.querySelector(".dyn-resepsi-maps");
      const heroDate = document.querySelector(".dyn-hero-date");
      if (elDate) elDate.textContent = resepsi.dateStr;
      if (heroDate) heroDate.textContent = resepsi.dateStr;
      if (elTime) elTime.textContent = resepsi.timeStr;
      if (elVenue) elVenue.textContent = resepsi.venueName;
      if (elAddr) elAddr.textContent = resepsi.venueDetail;
      if (elMaps && resepsi.mapsUrl) elMaps.href = resepsi.mapsUrl;
    }

    // Banks
    const b1 = config.gifts.banks[0];
    if (b1) {
      const elName = document.querySelector(".dyn-bank1-name");
      const elNum = document.querySelector(".dyn-bank1-number");
      const elHolder = document.querySelector(".dyn-bank1-holder");
      const elBtn = document.querySelector(".dyn-bank1-btn");
      if (elName) elName.textContent = b1.bankName;
      if (elNum) elNum.textContent = b1.accountNumber;
      if (elHolder) elHolder.textContent = `a.n. ${b1.accountHolder}`;
      if (elBtn) elBtn.setAttribute("onclick", `copyText('${b1.accountNumber}', 'No. Rekening ${b1.bankName}')`);
    }

    const b2 = config.gifts.banks[1];
    if (b2) {
      const elName = document.querySelector(".dyn-bank2-name");
      const elNum = document.querySelector(".dyn-bank2-number");
      const elHolder = document.querySelector(".dyn-bank2-holder");
      const elBtn = document.querySelector(".dyn-bank2-btn");
      if (elName) elName.textContent = b2.bankName;
      if (elNum) elNum.textContent = b2.accountNumber;
      if (elHolder) elHolder.textContent = `a.n. ${b2.accountHolder}`;
      if (elBtn) elBtn.setAttribute("onclick", `copyText('${b2.accountNumber}', 'No. Rekening ${b2.bankName}')`);
    }

    // Physical gift
    const phys = config.gifts.physicalGift;
    if (phys) {
      const elRec = document.querySelector(".dyn-gift-recipient");
      const elAddr = document.querySelector(".dyn-gift-address");
      const elPhone = document.querySelector(".dyn-gift-phone");
      const elBtn = document.querySelector(".dyn-gift-btn");
      if (elRec) elRec.textContent = `Penerima: ${phys.recipient}`;
      if (elAddr) elAddr.textContent = phys.address;
      if (elPhone) elPhone.textContent = `No. HP: ${phys.phone}`;
      if (elBtn) elBtn.setAttribute("onclick", `copyText('${phys.recipient}, ${phys.address} (${phys.phone})', 'Alamat Pengiriman')`);
    }

    // Audio metadata
    const musicTitleEl = document.querySelector(".dyn-music-title");
    const musicArtistEl = document.querySelector(".dyn-music-artist");
    if (musicTitleEl && config.music.title) musicTitleEl.textContent = config.music.title;
    if (musicArtistEl && config.music.artist) musicArtistEl.textContent = config.music.artist;

    // Audio src
    const audioEl = document.getElementById("bg-music");
    if (audioEl && config.music && config.music.url) {
      const sourceEl = audioEl.querySelector("source");
      if (sourceEl && !sourceEl.src.includes(config.music.url)) {
        sourceEl.src = config.music.url;
        audioEl.load();
      }
    }

    // Gallery images sync
    if (config.gallery && config.gallery.length > 0) {
      const galleryItems = document.querySelectorAll(".gallery-grid .gallery-item");
      galleryItems.forEach((itemEl, idx) => {
        if (config.gallery[idx]) {
          const imgEl = itemEl.querySelector("img");
          const captionEl = itemEl.querySelector(".gallery-overlay p");
          if (imgEl) imgEl.src = config.gallery[idx].url;
          if (captionEl) captionEl.textContent = config.gallery[idx].caption;
        }
      });
    }

    // Video Teaser
    const ytFrame = document.querySelector(".dyn-yt-frame");
    if (ytFrame && config.videoTeaser && config.videoTeaser.youtubeId) {
      ytFrame.src = `https://www.youtube.com/embed/${config.videoTeaser.youtubeId}?si=botanical`;
    }

    // Sections Show / Hide (Kisah Cinta)
    const storySection = document.getElementById("story");
    const storyNavItem = document.querySelector('a[href="#story"]');
    const isStoryVisible = (config.sections && typeof config.sections.story !== "undefined")
      ? config.sections.story
      : (window.WEDDING_CONFIG && window.WEDDING_CONFIG.sections ? window.WEDDING_CONFIG.sections.story : false);

    if (storySection) storySection.style.display = isStoryVisible ? "" : "none";
    if (storyNavItem) storyNavItem.style.display = isStoryVisible ? "" : "none";
  }

  bindConfigToDom();

  // 1. Initial State & Canvas Particles
  let petalsInstance = null;
  if (typeof BotanicalPetals !== "undefined") {
    petalsInstance = new BotanicalPetals("petals-canvas");
  }

  // 2. Parse Dynamic Guest Name from URL
  function setupGuestGreeting() {
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get("to") || params.get("u") || params.get("guest") || params.get("p");
    const guestNameEl = document.getElementById("guest-name");
    const guestNameInnerEl = document.getElementById("guest-name-inner");

    if (guestParam) {
      // Decode and sanitize
      const cleanName = decodeURIComponent(guestParam).trim();
      if (guestNameEl) guestNameEl.textContent = cleanName;
      if (guestNameInnerEl) guestNameInnerEl.textContent = cleanName;
    } else {
      if (guestNameEl) guestNameEl.textContent = "Tamu Undangan Yang Berbahagia";
      if (guestNameInnerEl) guestNameInnerEl.textContent = "Tamu Undangan Yang Berbahagia";
    }
  }

  // 3. Audio Player & Sound Effects
  const audioEl = document.getElementById("bg-music");
  const audioToggleBtn = document.getElementById("audio-toggle");
  const vinylDisk = document.getElementById("vinyl-disk");
  let isAudioPlaying = false;

  // Web Audio Soft Chime for Wax Seal Break
  function playWaxSealSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Soft harmonic chime frequencies (C major 9th chord)
      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
      const now = ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 2.0);
      });
    } catch (e) {
      console.log("Audio chime note:", e);
    }
  }

  function toggleAudio() {
    if (!audioEl) return;
    if (audioEl.paused) {
      audioEl.play().then(() => {
        isAudioPlaying = true;
        if (vinylDisk) vinylDisk.classList.add("playing");
      }).catch(err => {
        console.warn("Autoplay audio blocked or error:", err);
      });
    } else {
      audioEl.pause();
      isAudioPlaying = false;
      if (vinylDisk) vinylDisk.classList.remove("playing");
    }
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", toggleAudio);
  }

  // 4. Envelope Unboxing / Wax Seal Click
  const waxSealBtn = document.getElementById("wax-seal-btn");
  const envelopeCover = document.getElementById("envelope-cover");
  const mainContent = document.getElementById("main-content");

  function unlockInvitation() {
    playWaxSealSound();

    if (envelopeCover) {
      envelopeCover.classList.add("unlocked");
    }

    // Enable page scrolling
    document.body.style.overflow = "auto";
    if (mainContent) {
      mainContent.classList.remove("hidden");
    }

    // Start background music
    if (audioEl && config.music.autoplayOnOpen) {
      audioEl.play().then(() => {
        isAudioPlaying = true;
        if (vinylDisk) vinylDisk.classList.add("playing");
      }).catch(() => {
        console.log("Audio waiting for explicit toggle");
      });
    }

    // Trigger initial reveal animations
    checkScrollReveal();
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener("click", unlockInvitation);
  }

  // 5. Falling Petals Toggle Button
  const leavesToggleBtn = document.getElementById("leaves-toggle");
  if (leavesToggleBtn && petalsInstance) {
    leavesToggleBtn.addEventListener("click", () => {
      const active = petalsInstance.toggle();
      leavesToggleBtn.style.opacity = active ? "1" : "0.5";
      showToast(active ? "Efek kelopak daun diaktifkan" : "Efek kelopak daun dinonaktifkan");
    });
  }

  // 6. Countdown Timer
  function initCountdown() {
    const targetDate = new Date(config.eventDate).getTime();
    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");

    function update() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (daysEl) daysEl.textContent = "00";
        if (hoursEl) hoursEl.textContent = "00";
        if (minsEl) minsEl.textContent = "00";
        if (secsEl) secsEl.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, "0");
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
  }

  // 7. Toast Notification Utility
  window.showToast = function(message) {
    const toast = document.getElementById("luxury-toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast) return;

    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  };

  // 8. Copy to Clipboard
  window.copyText = function(text, label = "Teks") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Berhasil disalin: ${text}`);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  };

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(`Berhasil disalin: ${text}`);
    } catch (err) {
      showToast("Gagal menyalin secara otomatis");
    }
    document.body.removeChild(textArea);
  }

  // 9. Add to Google Calendar Generator
  window.addToGoogleCalendar = function(eventIndex = 0) {
    const evt = config.events[eventIndex] || config.events[0];
    const cal = evt.calendar;
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(cal.title)}&dates=${cal.start}/${cal.end}&details=${encodeURIComponent(cal.description)}&location=${encodeURIComponent(cal.location)}`;
    window.open(gcalUrl, "_blank");
  };

  // 10. QRIS Modal
  const qrisModal = document.getElementById("qris-modal");

  // 10b. Music Playlist Modal
  const musicModal = document.getElementById("music-modal");
  let activeSongTitle = (config.music && config.music.title) ? config.music.title : "Canon in D";

  function renderMusicPlaylistModal() {
    const listEl = document.getElementById("music-playlist-modal-list");
    if (!listEl) return;
    const songs = (config.music && config.music.popularWeddingSongs && config.music.popularWeddingSongs.length > 0)
      ? config.music.popularWeddingSongs
      : ((window.WEDDING_CONFIG && window.WEDDING_CONFIG.music && window.WEDDING_CONFIG.music.popularWeddingSongs)
        ? window.WEDDING_CONFIG.music.popularWeddingSongs
        : []);
    if (songs.length === 0) {
      listEl.innerHTML = `<p class="text-center text-stone-400 py-4 text-sm italic">Belum ada lagu dalam daftar putar.</p>`;
      return;
    }

    listEl.innerHTML = songs.map((song, idx) => {
      const isActive = (activeSongTitle === song.title);
      return `
        <div class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer group transition
          ${isActive
            ? 'border-gold bg-amber-50 shadow-sm'
            : 'border-stone-100 hover:border-gold/50 hover:bg-amber-50/40 bg-white/50'}"
          onclick="switchTrack('${escapeHtmlAttr(song.url)}', '${escapeHtmlAttr(song.title)}', '${escapeHtmlAttr(song.artist)}')">
          <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition
            ${isActive ? 'bg-gold text-white' : 'bg-forest/10 text-forest-dark group-hover:bg-gold group-hover:text-white'}">
            ${isActive
              ? `<i data-lucide="volume-2" class="w-3.5 h-3.5"></i>`
              : `<i data-lucide="play" class="w-3.5 h-3.5"></i>`}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-stone-800 truncate ${isActive ? 'text-forest-dark' : ''}">${escapeHtml(song.title)}</p>
            <p class="text-xs text-stone-500 truncate">${escapeHtml(song.artist)}</p>
          </div>
          <span class="text-[10px] text-gold/70 font-medium tracking-wide flex-shrink-0 ${isActive ? 'opacity-100 font-bold' : 'opacity-0 group-hover:opacity-100'} transition">
            ${isActive ? '♪ Playing' : 'Putar'}
          </span>
        </div>
      `;
    }).join("");

    // Re-initialize Lucide icons for dynamically added icons
    if (window.lucide) lucide.createIcons({ nodes: [listEl] });
  }

  window.openMusicModal = function() {
    renderMusicPlaylistModal();
    if (musicModal) musicModal.classList.add("open");
  };

  window.closeMusicModal = function() {
    if (musicModal) musicModal.classList.remove("open");
  };

  window.switchTrack = function(url, title, artist) {
    activeSongTitle = title;
    if (!audioEl) return;
    audioEl.src = url;
    audioEl.load();
    audioEl.play().then(() => {
      isAudioPlaying = true;
      if (vinylDisk) vinylDisk.classList.add("playing");
    }).catch(err => {
      console.warn("Track switch error:", err);
    });

    // Update displayed song info
    const titleEls = document.querySelectorAll(".dyn-music-title");
    const artistEls = document.querySelectorAll(".dyn-music-artist");
    titleEls.forEach(el => el.textContent = title);
    artistEls.forEach(el => el.textContent = artist);

    // Update config so it persists within session
    if (config.music) {
      config.music.title = title;
      config.music.artist = artist;
      config.music.url = url;
    }

    showToast(`♪ Memutar: ${title}`);

    // Refresh modal list to show active state
    setTimeout(() => renderMusicPlaylistModal(), 100);
  };

  function escapeHtmlAttr(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&quot;");
  }
  window.openQrisModal = function() {
    if (qrisModal) qrisModal.classList.add("open");
  };
  window.closeQrisModal = function() {
    if (qrisModal) qrisModal.classList.remove("open");
  };

  // 11. Lightbox Gallery
  let currentGalleryIndex = 0;
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  window.openLightbox = function(index) {
    currentGalleryIndex = index;
    const item = config.gallery[index];
    if (!item) return;

    if (lightboxImg) lightboxImg.src = item.url;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxModal) lightboxModal.classList.add("open");
  };

  window.closeLightbox = function() {
    if (lightboxModal) lightboxModal.classList.remove("open");
  };

  window.navigateLightbox = function(step) {
    const total = config.gallery.length;
    currentGalleryIndex = (currentGalleryIndex + step + total) % total;
    const item = config.gallery[currentGalleryIndex];
    if (lightboxImg) lightboxImg.src = item.url;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
  };

  // 12. RSVP & Guestbook wishes with LocalStorage persistence
  const STORAGE_KEY = "wedding_wishes_abud_intan";

  function getStoredWishes() {
    let local = localStorage.getItem(STORAGE_KEY);
    if (!local) {
      local = localStorage.getItem("wedding_wishes_arya_anin");
    }
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        return config.initialWishes;
      }
    }
    // Seed initial
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config.initialWishes));
    return config.initialWishes;
  }

  function saveWishes(wishes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  }

  function renderWishes(filter = "all") {
    const listEl = document.getElementById("wishes-list");
    const countEl = document.getElementById("wishes-count");
    if (!listEl) return;

    const allWishes = getStoredWishes();
    const filtered = allWishes.filter(w => {
      if (filter === "hadir") return w.attendance === "hadir";
      if (filter === "ragu") return w.attendance === "ragu";
      return true;
    });

    if (countEl) countEl.textContent = `(${allWishes.length} Doa)`;

    listEl.innerHTML = "";

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-8 text-neutral-500">
          <p class="text-sm">Belum ada ucapan pada kategori ini.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(w => {
      let badgeClass = "bg-emerald-100 text-emerald-800 border-emerald-300";
      let badgeText = "Hadir";
      if (w.attendance === "tidak") {
        badgeClass = "bg-rose-100 text-rose-800 border-rose-300";
        badgeText = "Berhalangan";
      } else if (w.attendance === "ragu") {
        badgeClass = "bg-amber-100 text-amber-800 border-amber-300";
        badgeText = "Masih Ragu";
      }

      const card = document.createElement("div");
      card.className = "p-4 rounded-2xl bg-white/70 border border-stone-200/80 shadow-sm transition hover:shadow-md";
      card.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-full bg-emerald-800/10 border border-emerald-800/20 flex items-center justify-center font-serif font-bold text-emerald-900 text-sm">
              ${escapeHtml(w.name.charAt(0).toUpperCase())}
            </div>
            <div>
              <h4 class="font-semibold text-stone-900 text-sm leading-tight">${escapeHtml(w.name)}</h4>
              <span class="text-[11px] text-stone-500">${escapeHtml(w.time || "Baru saja")}</span>
            </div>
          </div>
          <span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badgeClass}">
            ${badgeText} ${w.pax ? `(${w.pax} org)` : ''}
          </span>
        </div>
        <p class="mt-3 text-stone-700 text-sm leading-relaxed whitespace-pre-line font-light">${escapeHtml(w.message)}</p>
        <div class="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span class="text-[11px] text-stone-400">Doa restu tulus</span>
          <button onclick="toggleWishLike('${w.id}')" class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition text-stone-600">
            <svg class="w-3.5 h-3.5 fill-current text-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span class="font-medium text-xs">${w.likes || 0}</span>
          </button>
        </div>
      `;
      listEl.appendChild(card);
    });
  }

  window.toggleWishLike = function(id) {
    const wishes = getStoredWishes();
    const item = wishes.find(w => w.id === id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      saveWishes(wishes);
      renderWishes();
      showToast("Terima kasih atas tanda cinta Anda!");
    }
  };

  function setupRsvpForm() {
    const form = document.getElementById("rsvp-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("rsvp-name");
      const attendanceInput = document.querySelector('input[name="attendance"]:checked');
      const paxInput = document.getElementById("rsvp-pax");
      const messageInput = document.getElementById("rsvp-message");

      if (!nameInput.value.trim()) {
        showToast("Mohon isi nama lengkap Anda.");
        nameInput.focus();
        return;
      }

      if (!attendanceInput) {
        showToast("Mohon pilih konfirmasi kehadiran.");
        return;
      }

      if (!messageInput.value.trim()) {
        showToast("Mohon tuliskan doa atau ucapan Anda.");
        messageInput.focus();
        return;
      }

      const newWish = {
        id: "w_" + Date.now(),
        name: nameInput.value.trim(),
        attendance: attendanceInput.value,
        pax: parseInt(paxInput.value) || 1,
        time: "Baru saja",
        message: messageInput.value.trim(),
        likes: 1
      };

      const wishes = getStoredWishes();
      wishes.unshift(newWish);
      saveWishes(wishes);
      renderWishes();

      // Reset form
      form.reset();
      showToast("Alhamdulillah! Ucapan dan konfirmasi Anda telah tersimpan.");

      // Scroll smoothly to wishes list
      const wishesList = document.getElementById("wishes-section");
      if (wishesList) {
        wishesList.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  function escapeHtml(string) {
    const div = document.createElement("div");
    div.innerText = string;
    return div.innerHTML;
  }

  // 13. Scroll Reveal Observer
  function checkScrollReveal() {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  }

  // 14. Bottom Navigation Scroll Spy
  function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".dock-item");

    window.addEventListener("scroll", () => {
      let currentId = "";
      const scrollPos = window.scrollY + 220;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = sec.getAttribute("id");
        }
      });

      navItems.forEach(item => {
        const href = item.getAttribute("href");
        if (href === `#${currentId}`) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  }

  // Initialize all components
  setupGuestGreeting();
  initCountdown();
  renderWishes();
  setupRsvpForm();
  checkScrollReveal();
  setupScrollSpy();
});
