import { SlideData } from './types';

export function generateDeckFromTitle(rawTitle: string): { slides: SlideData[]; theme: string } {
  const title = rawTitle.trim();
  const lower = title.toLowerCase();

  // 1. Detect Category: Finance / Keuangan
  const isFinance = /keuangan|uang|finansial|finance|anggaran|saham|investasi|profit|laba|omzet|revenue|budget|moneter|kripto|neraca|dividen/i.test(lower);

  // 2. Detect Category: Anatomy / Medical / Health
  const isAnatomy = /anatomi|medis|kesehatan|jantung|tubuh|biologi|kedokteran|darah|organ|klinis|penyakit|fisiologi|otak|sel|kardiovaskular|dna/i.test(lower);

  // 3. Detect Category: Technology / AI
  const isTech = /ai|artificial|teknologi|software|aplikasi|coding|robot|digital|data|cloud|cyber|komputer|mesin/i.test(lower);

  const timestamp = Date.now();

  // === CASE A: FINANCE ===
  if (isFinance) {
    return {
      theme: 'emerald',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Laporan & Strategi Finansial',
          title: title,
          subtitle: 'Analisis kinerja fiskal, alokasi permodalan, dan proyeksi pertumbuhan laba jangka panjang.',
          foot: 'Disusun untuk Direksi, Investor & Pemangku Kepentingan',
          notes: 'Sampaikan gambaran umum kondisi makroekonomi dan pencapaian finansial periode ini.',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Ikhtisar Keuangan',
          title: 'Struktur Pembahasan Finansial',
          items: [
            'Evaluasi Arus Kas & Realisasi Anggaran',
            'Simulasi Pertumbuhan Pendapatan (Omzet vs Laba)',
            'Efisiensi Biaya Operasional (Opex & Capex)',
            'Target ROI & Alokasi Modal Strategis 2026',
          ],
          notes: 'Alokasikan waktu 5 menit untuk pembahasan angka dan 10 menit untuk tanya jawab.',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'contrast',
          nav: 'Perbandingan',
          kicker: 'Transformasi Finansial',
          title: 'Efisiensi Pengelolaan Anggaran',
          leftKicker: 'Metode Lama',
          leftTitle: 'Alokasi Manual & Rentan',
          leftItems: [
            'Pencatatan pembukuan terpisah-pisah',
            'Kebocoran biaya operasional tidak terdeteksi cepat',
            'Proyeksi arus kas memakan waktu berminggu-minggu',
          ],
          rightKicker: 'Metode Baru',
          rightTitle: 'Otomatisasi & Kontrol Ketat',
          rightItems: [
            'Real-time cashflow dashboard terintegrasi',
            'Penghematan belanja modal hingga 35%',
            'Keputusan investasi berbasis data prediktif presisi',
          ],
          notes: 'Tunjukkan bagaimana strategi baru menghentikan pemborosan anggaran.',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'statement',
          nav: 'Simulasi Live',
          visualType: 'finance',
          title: `Simulasi & Analisis ${title}`,
          subtitle: 'Model pertumbuhan pendapatan dan proyeksi laba bersih secara dinamis.',
          notes: 'Ajak audiens melihat pergerakan grafik saat target pertumbuhan dinaikkan.',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Metrik Kunci',
          kicker: 'Kinerja Portofolio',
          title: 'Peningkatan Margin Keuntungan',
          value: '+38.4%',
          label: 'Pertumbuhan laba bersih tahun ke tahun (YoY) setelah efisiensi biaya operasional.',
          sub: 'Diaudit berdasarkan standar akuntansi keuangan resmi',
          notes: 'Beri jeda sejenak agar audiens menyerap angka pertumbuhan impresif ini.',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Rencana Kerja',
          kicker: 'Rencana Eksekusi',
          title: 'Langkah Realisasi Target Keuangan',
          stepsItems: [
            { num: '01', title: 'Audit Komprehensif', desc: 'Konsolidasi seluruh pos pengeluaran dan eliminasi duplikasi.' },
            { num: '02', title: 'Optimalisasi Modal', desc: 'Penyaluran likuiditas ke aset produktif dengan imbal hasil terukur.' },
            { num: '03', title: 'Monitoring & Scaling', desc: 'Pemantauan indikator kinerja bulanan untuk menjaga margin laba.' },
          ],
          notes: 'Jelaskan jadwal implementasi kuartalan kepada dewan direksi.',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Penutup',
          kicker: 'Kesimpulan & Tindak Lanjut',
          title: 'Fundamental Kuat untuk Pertumbuhan Berkelanjutan',
          subtitle: 'Terima kasih atas perhatian Anda. Sesi diskusi dan persetujuan anggaran dibuka.',
          foot: 'Direktorat Keuangan & Perencanaan Strategis',
          notes: 'Buka sesi tanya jawab dengan para investor atau pimpinan.',
        },
      ],
    };
  }

  // === CASE B: ANATOMY / MEDICAL ===
  if (isAnatomy) {
    return {
      theme: 'rose',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Kajian Biomedis & Fisiologi',
          title: title,
          subtitle: 'Tinjauan mendalam struktur anatomis, mekanisme fungsional, dan hemodinamik organ vital tubuh.',
          foot: 'Materi Edukasi Kedokteran & Kesehatan Modern',
          notes: 'Buka dengan fakta menarik tentang keajaiban sistem fisiologi manusia.',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Kurikulum Bahasan',
          title: 'Pokok Bahasan Anatomi & Fisiologi',
          items: [
            'Morfologi & Struktur Jaringan Organ Utama',
            'Mekanisme Hemodinamik & Siklus Denyut Jantung',
            'Distribusi Oksigen & Pertukaran Gas Seluler',
            'Implikasi Klinis & Pencegahan Patologis',
          ],
          notes: 'Jelaskan alur dari tingkat makro struktur organ ke tingkat mikroseluler.',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'statement',
          nav: 'Prinsip Dasar',
          kicker: 'Fakta Biologis Penting',
          title: 'Jantung berdetak lebih dari 100.000 kali setiap hari tanpa henti memompa nutrisi kehidupan.',
          subtitle: 'Setiap kontraksi dikoordinasikan oleh impuls listrik sinoatrial (SA node) yang sangat teratur dan presisi.',
          notes: 'Tekankan pentingnya keteraturan ritme sinus dalam menjaga homeostatis.',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'statement',
          nav: 'Model Anatomi Live',
          visualType: 'anatomy',
          title: `Simulasi Fisiologis: ${title}`,
          subtitle: 'Animasi detak jantung dan pemantauan gelombang EKG ritme sinus secara real-time.',
          notes: 'Tunjukkan ruang-ruang jantung dan interaksi laju denyut jantung (BPM).',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Kapasitas',
          kicker: 'Metrik Fisiologis',
          title: 'Volume Darah yang Dipompa Harian',
          value: '7.500 L',
          label: 'Total volume darah yang dialirkan ke seluruh jaringan kapiler tubuh dalam 24 jam.',
          sub: 'Dihasilkan oleh otot miokardium yang sangat efisien',
          notes: 'Bandingkan volume 7.500 liter dengan kapasitas tangki bahan bakar mobil.',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Siklus Darah',
          kicker: 'Sirkulasi Hemodinamik',
          title: 'Urutan Aliran Darah Kardiovaskular',
          stepsItems: [
            { num: '01', title: 'Atrium Kanan', desc: 'Darah terdeoksigenasi dari tubuh masuk melalui vena kava.' },
            { num: '02', title: 'Ventrikel Kanan ke Paru', desc: 'Darah dipompa ke paru-paru untuk pelepasan CO2 dan pengikatan O2.' },
            { num: '03', title: 'Sirkulasi Sistemik', desc: 'Darah kaya oksigen dialirkan dari ventrikel kiri ke aorta menuju seluruh organ tubuh.' },
          ],
          notes: 'Jelaskan perbedaan sirkulasi pulmonal dan sistemik.',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Rangkuman',
          kicker: 'Kesimpulan Klinis',
          title: 'Harmoni Sistem Hayati Tubuh Manusia',
          subtitle: 'Pemahaman anatomi yang tepat adalah landasan utama diagnosis dan terapi medis yang efektif.',
          foot: 'Departemen Anatomi & Fisiologi Medis',
          notes: 'Tutup dengan sesi tanya jawab medis ilmiah.',
        },
      ],
    };
  }

  // === CASE C: TECHNOLOGY / AI ===
  if (isTech) {
    return {
      theme: 'indigo',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Teknologi & Inovasi Masa Depan',
          title: title,
          subtitle: 'Membongkar paradigma baru komputasi, otomatisasi cerdas, dan efisiensi sistem modern.',
          foot: 'Solusi Digital Skala Enterprise 2026',
          notes: 'Sampaikan bagaimana era teknologi baru mengubah cara kita bekerja.',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Agenda Bahasan',
          title: 'Peta Transformasi Digital',
          items: [
            'Lanskap Teknologi & Tantangan Industri',
            'Arsitektur Solusi & Otomatisasi AI',
            'Peningkatan Kinerja & Efisiensi Sistem',
            'Roadmap Implementasi & Skalabilitas',
          ],
          notes: 'Berikan pengantar singkat mengenai peta jalan teknologi.',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'statement',
          nav: 'Visi Inti',
          kicker: 'Pergeseran Paradigma',
          title: 'Bukan sekadar mengganti perangkat, melainkan merevolusi cara bernalar dan mengeksekusi data.',
          subtitle: 'Kecepatan dan ketepatan algoritma adalah pembeda antara perusahaan yang bertahan dan yang memimpin.',
          notes: 'Sorot pentingnya adopsi teknologi yang cepat dan tepat sasaran.',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'bento',
          nav: 'Pilar Solusi',
          kicker: 'Ekosistem Terintegrasi',
          title: 'Kemampuan Platform yang Dihadirkan',
          cards: [
            { kicker: 'Machine Learning', title: 'Prediksi Akurat Real-Time', desc: 'Pemrosesan data masif dalam hitungan milidetik tanpa jeda.' },
            { kicker: 'Security', title: 'Enkripsi & Keamanan End-to-End', desc: 'Perlindungan aset data kritikal dengan standar keamanan internasional.' },
            { kicker: 'Seamless API', title: 'Integrasi Ekosistem Fleksibel', desc: 'Dapat terhubung mulus ke sistem lama (legacy) maupun arsitektur cloud baru.' },
            { kicker: 'Autonomous', title: 'Otomatisasi 24/7 Mandiri', desc: 'Meminimalkan kesalahan manusia dan melipatgandakan output tim.' },
          ],
          notes: 'Jelaskan 4 pilar arsitektur teknologi ini kepada tim teknis.',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Performa',
          kicker: 'Tolok Ukur Efisiensi',
          title: 'Akselerasi Kecepatan Eksekusi',
          value: '10x',
          label: 'Peningkatan kecepatan pengolahan data dan respons operasional dibandingkan sistem konvensional.',
          sub: 'Diverifikasi melalui stress-test beban kerja tinggi',
          notes: 'Tekankan efisiensi 10x lipat ini.',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Roadmap',
          kicker: 'Tahapan Penerapan',
          title: 'Langkah Implementasi Bertahap',
          stepsItems: [
            { num: '01', title: 'Discovery & Feasibility', desc: 'Identifikasi alur kerja kunci dan pengujian bukti konsep (PoC).' },
            { num: '02', title: 'Deployment & Integrasi', desc: 'Penerapan bertahap ke lingkungan produksi tanpa mengganggu operasional.' },
            { num: '03', title: 'Continuous Scaling', desc: 'Optimalisasi performa berkelanjutan dengan monitoring cerdas.' },
          ],
          notes: 'Rincikan milestone implementasi dalam rentang 3-6 bulan.',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Penutup',
          kicker: 'Langkah Berikutnya',
          title: 'Memimpin Masa Depan Bersama Inovasi',
          subtitle: 'Mari wujudkan transformasi teknologi Anda hari ini. Hubungi tim kami untuk konsultasi teknis.',
          foot: `${title} · Powered by Modern Web`,
          notes: 'Ajak audiens untuk demo langsung atau kick-off meeting.',
        },
      ],
    };
  }

  // === CASE D: GENERAL / UNIVERSAL SMART ENGINE ===
  return {
    theme: 'sunset',
    slides: [
      {
        id: `gen-${timestamp}-1`,
        type: 'cover',
        nav: 'Pembuka',
        kicker: 'Presentasi Strategis 2026',
        title: title,
        subtitle: 'Kajian komprehensif, wawasan mendalam, dan arah langkah strategis untuk pencapaian tujuan bersama.',
        foot: 'Mychiara Sliders · Presentasi Web Modern',
        notes: 'Sambutan hangat kepada audiens dan jelaskan mengapa topik ini sangat penting saat ini.',
      },
      {
        id: `gen-${timestamp}-2`,
        type: 'agenda',
        nav: 'Agenda',
        kicker: 'Daftar Isi',
        title: 'Apa yang Akan Kita Bahas',
        items: [
          `Latar Belakang & Urgensi ${title}`,
          'Tantangan Utama yang Dihadapi Saat Ini',
          'Kerangka Solusi & Pendekatan Teruji',
          'Target Dampak & Jadwal Pelaksanaan',
        ],
        notes: 'Berikan gambaran ringkas durasi dan fokus utama pertemuan.',
      },
      {
        id: `gen-${timestamp}-3`,
        type: 'statement',
        nav: 'Pernyataan Kunci',
        kicker: 'Tantangan Inti',
        title: `Peluang terbesar dalam ${title} terletak pada ketepatan eksekusi dan konsistensi strategi.`,
        subtitle: 'Tantangan lama tidak bisa diselesaikan dengan pola pikir yang sama. Diperlukan terobosan baru yang terukur.',
        notes: 'Bangun kesadaran audiens tentang pentingnya perubahan nyata.',
      },
      {
        id: `gen-${timestamp}-4`,
        type: 'contrast',
        nav: 'Komparasi',
        kicker: 'Sebelum vs Sesudah',
        title: 'Perubahan Paradigma Menuju Keberhasilan',
        leftKicker: 'Kondisi Sebelumnya',
        leftTitle: 'Pendekatan Konvensional',
        leftItems: [
          'Proses berjalan lambat dan terfragmentasi',
          'Sulit mengukur dampak secara objektif',
          'Komunikasi dan koordinasi sering terhambat',
        ],
        rightKicker: 'Kondisi Baru',
        rightTitle: 'Pendekatan Terstruktur',
        rightItems: [
          'Alur kerja terpadu dan otomatis',
          'Setiap langkah memiliki indikator capaian jelas',
          'Kolaborasi terarah dengan hasil maksimal',
        ],
        notes: 'Perjelas perbedaan hasil jika strategi ini diterapkan.',
      },
      {
        id: `gen-${timestamp}-5`,
        type: 'bignumber',
        nav: 'Target',
        kicker: 'Dampak Terukur',
        title: 'Ekspektasi Pencapaian Keberhasilan',
        value: '92%',
        label: `Tingkat keberhasilan implementasi program ${title} berdasarkan studi kelayakan komprehensif.`,
        sub: 'Target capaian kuartal awal setelah peluncuran',
        notes: 'Sorot target keberhasilan 92% sebagai komitmen bersama.',
      },
      {
        id: `gen-${timestamp}-6`,
        type: 'steps',
        nav: 'Langkah Kerja',
        kicker: 'Rencana Pelaksanaan',
        title: 'Tiga Tahap Menuju Hasil Nyata',
        stepsItems: [
          { num: '01', title: 'Perencanaan & Penyelarasan', desc: 'Memastikan seluruh tim memahami peran dan target objektif.' },
          { num: '02', title: 'Eksekusi Cepat & Terukur', desc: 'Menjalankan prioritas utama dengan evaluasi berkala mingguan.' },
          { num: '03', title: 'Penyempurnaan Berkelanjutan', desc: 'Menjaga keberlanjutan hasil dan memperluas skala dampak.' },
        ],
        notes: 'Uraikan peran masing-masing divisi dalam eksekusi langkah ini.',
      },
      {
        id: `gen-${timestamp}-7`,
        type: 'closing',
        nav: 'Penutup',
        kicker: 'Langkah Bersama',
        title: `Mewujudkan Keberhasilan ${title}`,
        subtitle: 'Saatnya bertindak dan melangkah bersama. Terima kasih atas partisipasi dan antusiasme Anda.',
        foot: 'Mychiara Sliders · Presentasi Interaktif',
        notes: 'Tutup dengan optimisme dan buka sesi tanya jawab.',
      },
    ],
  };
}
