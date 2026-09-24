import { SlideData } from './types';

export function generateDeckFromTitle(rawTitle: string): { slides: SlideData[]; theme: string } {
  const title = rawTitle.trim();
  const lower = title.toLowerCase();

  // Keyword detection
  const isFinance = /keuangan|uang|finansial|finance|anggaran|saham|investasi|profit|laba|omzet|revenue|budget|moneter|kripto|neraca|dividen/i.test(lower);
  const isAnatomy = /anatomi|medis|kesehatan|jantung|tubuh|biologi|kedokteran|darah|organ|klinis|penyakit|fisiologi|otak|sel|kardiovaskular|dna/i.test(lower);
  const isTech = /ai|artificial|teknologi|software|aplikasi|coding|robot|digital|data|cloud|cyber|komputer|mesin/i.test(lower);

  const timestamp = Date.now();

  // ═════════════════════════════════════════════════════════════════════════
  // 1. KATEGORI: KEUANGAN & BISNIS STRATEGIS
  // ═════════════════════════════════════════════════════════════════════════
  if (isFinance) {
    return {
      theme: 'emerald',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Laporan Fiskal & Strategi Portofolio · 2026',
          title: title,
          subtitle: 'Kajian komprehensif efisiensi arus kas, akselerasi marjin laba bersih, dan alokasi permodalan strategis untuk melipatgandakan valuasi perusahaan di tengah dinamika pasar modern.',
          foot: 'Disusun untuk Jajaran Direksi, Komite Audit, dan Pemegang Saham',
          notes: '🎙️ SKRIP PEMBUKA:\n"Selamat pagi/siang Bapak/Ibu Dewan Direksi dan rekan-rekan pemangku kepentingan. Hari ini kita tidak hanya meninjau lembaran neraca statistik, melainkan membedah arah kemudi bisnis kita: bagaimana kita mengamankan likuiditas, memangkas inefisiensi, dan memproyeksikan lonjakan laba bersih 3 tahun ke depan. Mari kita mulai dari ikhtisar agenda fiskal kita."',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Struktur Pembahasan',
          title: 'Arsitektur Rencana Fiskal & Pertumbuhan',
          items: [
            'Audit Arus Kas & Evaluasi Rasio Likuiditas (10 Menit)',
            'Simulasi Interaktif: Pertumbuhan Omzet vs Laba Bersih (15 Menit)',
            'Peta Pemangkasan Biaya Operasional (Opex Optimization) (10 Menit)',
            'Rencana Aksi & Alokasi Modal Kuartalan Menuju Valuasi Optimal (15 Menit)',
          ],
          notes: '🎙️ SKRIP AGENDA:\n"Ada 4 pilar yang akan kita lewati hari ini. Pertama, kita pastikan fondasi kas kita kokoh. Kedua, kita uji model proyeksi kita dengan simulasi dinamis. Ketiga, kita bedah pos-pos pengeluaran yang bisa kita efisiensikan hingga 30%. Dan terakhir, jadwal eksekusi kuartalan."',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'contrast',
          nav: 'Masalah vs Solusi',
          kicker: 'Analisis Risiko Finansial',
          title: 'Menutup Kebocoran Arus Kas Menuju Profitabilitas',
          leftKicker: 'Praktik Tradisional',
          leftTitle: 'Inefisiensi & Blind Spots',
          leftItems: [
            'Pembukuan terfragmentasi mengakibatkan keterlambatan deteksi kebocoran kas hingga 45 hari',
            'Alokasi anggaran belanja modal (Capex) sering melampaui proyeksi tanpa kontrol ketat',
            'Ketergantungan pada intuisi tanpa model prediktif risiko fluktuasi suku bunga',
          ],
          rightKicker: 'Paradigma Baru',
          rightTitle: 'Otomatisasi & Kontrol Presisi',
          rightItems: [
            'Konsolidasi data keuangan real-time dengan audit otomatis setiap penutupan hari',
            'Pengendalian ketat Opex dengan pemangkasan pos duplikasi belanja hingga 32%',
            'Keputusan likuiditas berbasis data analitik prediktif dengan akurasi 96%',
          ],
          notes: '🎙️ SKRIP KONTRAS:\n"Bapak/Ibu, mari kita jujur terhadap tantangan di sisi kiri. Pola lama yang lambat membuat kita kehilangan momentum dan menyerap biaya tak terduga. Di sisi kanan, kita menunjukkan bagaimana sistem kendali baru akan melindungi margin keuntungan kita secara otomatis."',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'statement',
          nav: 'Simulasi Interaktif',
          visualType: 'finance',
          title: `Simulasi Pertumbuhan & Sensitivitas Valuasi`,
          subtitle: 'Gunakan slider kontrol di bawah untuk menguji skenario pertumbuhan optimis, moderat, maupun konservatif.',
          notes: '🎙️ SKRIP DEMO SIMULASI:\n"Di slide ini, kita bisa melihat model interaktif secara langsung. Perhatikan saat saya menggeser slider proyeksi pertumbuhan dari 25% ke 50%: bukan hanya omzet yang naik, tapi skala ekonomis kita membuat margin laba bersih melesat dari 32% menjadi 40%. Ini membuktikan bahwa kapasitas infrastruktur kita sudah siap menampung volume tanpa lonjakan biaya tetap."',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Metrik Kunci',
          kicker: 'Target Kinerja Utama',
          title: 'Akselerasi Laba Bersih',
          value: '+38.5%',
          label: 'Pertumbuhan laba bersih tahun ke tahun (YoY) yang ditargetkan tercapai pada penutupan tahun fiskal berjalan.',
          sub: 'Dihitung berdasarkan audit Capex rasional dan peningkatan efisiensi rantai pasok',
          notes: '🎙️ SKRIP METRIK:\n"38.5 persen. Angka ini bukan sekadar angan-angan, melainkan hasil kalkulasi riil dari efisiensi operasional dan optimalisasi harga jual. Dengan mempertahankan disiplin pengeluaran, angka ini adalah batas bawah capaian kita."',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Rencana Eksekusi',
          kicker: 'Roadmap Implementasi',
          title: 'Tiga Fase Menuju Keberhasilan Target Finansial',
          stepsItems: [
            {
              num: '01',
              title: 'Konsolidasi & Audit Pos Anggaran (Bulan 1-2)',
              desc: 'Penyelarasan seluruh pos rekening perbankan, pengetatan otorisasi pengeluaran, dan renegosiasi kontrak vendor utama.',
            },
            {
              num: '02',
              title: 'Penerapan Sistem Dashboard Likuiditas (Bulan 3-4)',
              desc: 'Otomatisasi pelaporan arus kas harian dan integrasi modul peringatan dini terhadap deviasi anggaran departemen.',
            },
            {
              num: '03',
              title: 'Re-investasi Modal & Skalabilitas (Bulan 5-6)',
              desc: 'Alokasi sisa kas operasional ke instrumen produktif berimbal hasil tinggi dan ekspansi pasar berpenghasilan teruji.',
            },
          ],
          notes: '🎙️ SKRIP EKSEKUSI:\n"Setiap rencana butuh eksekusi yang disiplin. Tiga fase ini telah dirancang dengan indikator capaian mingguan. Direksi akan menerima laporan kepatuhan setiap hari Senin."',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Penutup',
          kicker: 'Langkah Keputusan',
          title: 'Fondasi Kuat, Masa Depan Bertumbuh',
          subtitle: 'Dengan menyetujui alokasi anggaran ini, kita memastikan kelangsungan profitabilitas jangka panjang perusahaan. Terima kasih atas kepercayaan dan dukungan Anda.',
          foot: 'Direktorat Keuangan & Perencanaan Strategis · 2026',
          notes: '🎙️ SKRIP PENUTUP:\n"Bapak/Ibu sekalian, kesimpulan kita jelas: fondasi kita sehat, peluang di depan sangat besar, dan rencana ini telah teruji secara finansial. Sekarang waktu yang tepat untuk mengambil keputusan. Saya persilakan jika ada pertanyaan atau masukan dari Dewan Direksi."',
        },
      ],
    };
  }

  // ═════════════════════════════════════════════════════════════════════════
  // 2. KATEGORI: ANATOMI, KEDOKTERAN & BIOMEDIS
  // ═════════════════════════════════════════════════════════════════════════
  if (isAnatomy) {
    return {
      theme: 'rose',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Kajian Fisiologi & Kedokteran Klinis · 2026',
          title: title,
          subtitle: 'Eksplorasi mendalam arsitektur kardiovaskular, dinamika mekanik miokardium, sirkulasi hemodinamik sistemik, dan relevansinya terhadap diagnosis patologis modern.',
          foot: 'Departemen Kardiologi, Fisiologi & Pendidikan Kedokteran',
          notes: '🎙️ SKRIP PEMBUKA:\n"Selamat datang rekan-rekan akademisi, dokter, dan mahasiswa kesehatan. Pada sesi kali ini, kita akan membedah salah satu mahakarya rekayasa biologis paling menakjubkan di alam semesta: sistem kardiovaskular manusia. Bagaimana organ sebesar kepalan tangan mampu memompa nutrisi kehidupan ke triliunan sel tanpa pernah berhenti sedetik pun sepanjang usia kita."',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Kurikulum Bahasan',
          title: 'Peta Pembelajaran Fisiologis & Klinis',
          items: [
            'Morfologi Makroskopis & Arsitektur Miokardium (10 Menit)',
            'Mekanisme Eksitasi Elektrik & Monitor EKG Ritme Sinus (15 Menit)',
            'Hemodinamik Komparatif: Sirkulasi Pulmonal vs Sistemik (15 Menit)',
            'Korelasi Klinis: Gagal Jantung, Aritmia, & Intervensi Terapi (10 Menit)',
          ],
          notes: '🎙️ SKRIP AGENDA:\n"Kita akan memulai dari struktur fisik bilik-bilik jantung, mempelajari bagaimana nodus sinoatrial membangkitkan impuls listrik, lalu melihat simulasi hemodinamik secara langsung."',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'statement',
          nav: 'Prinsip Fisiologis',
          kicker: 'Mekanisme Pompa Hidup',
          title: 'Jantung berdenyut lebih dari 100.000 kali per hari, menyemprotkan 7.500 liter darah melewati 100.000 kilometer pembuluh darah.',
          subtitle: 'Kinerja luar biasa ini diatur oleh sinkronisasi membran sel pacu jantung (pacemaker) yang mengubah gradien ion natrium, kalium, dan kalsium menjadi kekuatan mekanik yang sempurna.',
          notes: '🎙️ SKRIP PRINSIP:\n"Bayangkan angka-angka ini: seratus ribu kali detak dalam 24 jam. Jantung tidak memiliki waktu istirahat seperti otot rangka lainnya. Waktu istirahat jantung hanyalah fraksi detik saat fase diastol sebelum darah kembali masuk ke atrium."',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'statement',
          nav: 'Model Anatomi 3D',
          visualType: 'anatomy',
          title: `Simulasi Fisiologi Jantung & Elektrokardiogram`,
          subtitle: 'Eksplorasi interaktif bilik atrium-ventrikel, visualisasi ritme denyut sistol/diastol, dan gelombang EKG Lead II.',
          notes: '🎙️ SKRIP DEMO ANATOMI:\n"Perhatikan model interaktif di layar ini. Di sebelah kiri, Anda bisa melihat animasi jantung berdenyut secara ritmis. Di sebelah kanan, monitor EKG Lead II merekam kompleks P-QRS-T secara live. Mari kita coba klik tab \'Ventrikel Kiri\': perhatikan tekanan yang dihasilkan mencapai 120 mmHg karena harus melawan resistensi perifer seluruh tubuh. Sekarang mari geser slider BPM ke 120 untuk mensimulasikan efek takikardia saat olahraga berat."',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Metrik Klinis',
          kicker: 'Kapasitas Pompa Harian',
          title: 'Volume Curah Jantung Harian',
          value: '7.500 L',
          label: 'Volume darah segar beroksigen yang didistribusikan ke otak, ginjal, hati, dan otot rangka setiap 24 jam.',
          sub: 'Dihasilkan oleh kekuatan kontraktilitas serabut aktin dan miosin miokardium',
          notes: '🎙️ SKRIP METRIK:\n"Tujuh ribu lima ratus liter per hari. Itu setara dengan memompa seluruh isi tangki mobil pemadam kebakaran. Jika curah jantung ini turun sedikit saja, perfusi ke organ vital seperti ginjal dan otak akan langsung terganggu, memicu syok kardiogenik."',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Sirkulasi Darah',
          kicker: 'Alur Sirkulasi Tertutup',
          title: 'Siklus Hemodinamik Empat Ruang Jantung',
          stepsItems: [
            {
              num: '01',
              title: 'Pengisian Atrium & Katup Atrioventrikular',
              desc: 'Darah terdeoksigenasi dari vena kava memenuhi atrium kanan, sementara darah kaya oksigen dari paru-paru memasuki atrium kiri.',
            },
            {
              num: '02',
              title: 'Kontraksi Ventrikel (Sistol Isovolumetrik)',
              desc: 'Impuls dari berkas His memicu kontraksi ventrikel; tekanan meningkat tajam hingga katup aorta dan pulmonalis terbuka lebar.',
            },
            {
              num: '03',
              title: 'Distribusi Sistemik & Oksigenasi Jaringan',
              desc: 'Darah bertekanan tinggi disemprotkan ke aorta menuju anyaman mikrosirkulasi kapiler untuk pelepasan molekul O2 ke mitokondria sel.',
            },
          ],
          notes: '🎙️ SKRIP SIRKULASI:\n"Siklus tiga tahap ini terjadi hanya dalam tempo 0.8 detik pada denyut 75 kali per menit. Kelancaran sirkulasi ini bergantung penuh pada integritas katup agar tidak terjadi regurgitasi darah balik."',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Penutup',
          kicker: 'Kesimpulan Klinis',
          title: 'Integritas Kardiovaskular, Kunci Kelangsungan Hidup',
          subtitle: 'Pemahaman anatomi yang komprehensif adalah pondasi utama dalam deteksi dini penyakit jantung koroner dan intervensi bedah yang presisi. Terima kasih atas perhatian rekan-rekan sejawat.',
          foot: 'Pusat Jantung & Pembuluh Darah Nasional · 2026',
          notes: '🎙️ SKRIP PENUTUP:\n"Demikian pemaparan komprehensif mengenai fisiologi kardiovaskular hari ini. Saya membuka kesempatan bagi rekan-rekan dokter dan mahasiswa untuk berdiskusi, baik mengenai aspek patofisiologis maupun interpretasi gelombang EKG klinis. Silakan."',
        },
      ],
    };
  }

  // ═════════════════════════════════════════════════════════════════════════
  // 3. KATEGORI: TEKNOLOGI, AI & SISTEM DIGITAL
  // ═════════════════════════════════════════════════════════════════════════
  if (isTech) {
    return {
      theme: 'indigo',
      slides: [
        {
          id: `gen-${timestamp}-1`,
          type: 'cover',
          nav: 'Pembuka',
          kicker: 'Transformasi Teknologi & Kecerdasan Buatan · 2026',
          title: title,
          subtitle: 'Membangun arsitektur digital generasi baru yang adaptif, aman, dan berdaya komputasi tinggi untuk memimpin lompatan industri masa depan.',
          foot: 'Pusat Rekayasa Perangkat Lunak & Sistem Cerdas',
          notes: '🎙️ SKRIP PEMBUKA:\n"Selamat datang rekan-rekan inovator, engineer, dan pimpinan teknologi. Hari ini kita membahas titik balik peradaban digital: bagaimana kecerdasan buatan dan komputasi awan bukan lagi sekadar eksperimen, melainkan penggerak utama kecepatan inovasi bisnis kita."',
        },
        {
          id: `gen-${timestamp}-2`,
          type: 'agenda',
          nav: 'Agenda',
          kicker: 'Peta Jalan Diskusi',
          title: 'Agenda Strategis Transformasi Digital',
          items: [
            'Lanskap Arsitektur Modern & Tantangan Skalabilitas (10 Menit)',
            'Simulasi Live: Throughput Komputasi & Jaringan Syaraf AI (15 Menit)',
            'Pilar Keamanan Siber & Kedaulatan Data Terdesentralisasi (10 Menit)',
            'Tahapan Rilis Produksi & Metrik Capaian Kinerja Sistem (15 Menit)',
          ],
          notes: '🎙️ SKRIP AGENDA:\n"Kita akan menelusuri bagaimana arsitektur mikro kami mampu menangani jutaan permintaan data per detik tanpa latensi yang berarti, serta cara kita mengamankan seluruh saluran transmisi data."',
        },
        {
          id: `gen-${timestamp}-3`,
          type: 'contrast',
          nav: 'Komparasi Sistem',
          kicker: 'Evaluasi Arsitektur',
          title: 'Dari Sistem Monolitik Usang Menuju Kecerdasan Otonom',
          leftKicker: 'Infrastruktur Lama',
          leftTitle: 'Sistem Monolitik Rentan',
          leftItems: [
            'Pembaruan kode memakan waktu berhari-hari dengan risiko downtime sistem yang tinggi',
            'Biaya server melonjak drastis karena pemborosan sumber daya komputasi yang tidak elastis',
            'Pengolahan data terisolasi dalam silo-silo terpisah yang menghambat analisis real-time',
          ],
          rightKicker: 'Infrastruktur Baru',
          rightTitle: 'Cloud-Native & Otonom',
          rightItems: [
            'Continuous deployment otomatis dengan nol downtime sistem berkat arsitektur container',
            'Efisiensi biaya cloud hingga 48% melalui penyesuaian skala otomatis (autoscaling)',
            'Jaringan inferensi data real-time dengan latensi sub-milidetik di seluruh dunia',
          ],
          notes: '🎙️ SKRIP KONTRAS:\n"Bapak/Ibu sekalian, arsitektur monolitik di sebelah kiri sudah tidak mampu menopang ambisi pertumbuhan kita. Di sisi kanan, sistem cerdas baru memberikan fleksibilitas tanpa batas bagi tim pengembang untuk merilis fitur baru setiap hari."',
        },
        {
          id: `gen-${timestamp}-4`,
          type: 'statement',
          nav: 'Simulasi Neural',
          visualType: 'tech',
          title: `Telemetri Jaringan AI & Komputasi Awan`,
          subtitle: 'Simulasi alur pemrosesan data berlapis: input ingestion, model inferensi, dan orkestrasi otomatis.',
          notes: '🎙️ SKRIP DEMO TEKNOLOGI:\n"Ini adalah representasi visual nyata dari arsitektur pemrosesan data kita. Perhatikan titik-titik node input yang menerima aliran data, diteruskan ke lapisan neural engine di tengah, lalu menghasilkan tindakan otomatis di sebelah kanan. Anda bisa mencoba mengubah slider throughput untuk melihat ketahanan sistem saat terjadi lonjakan trafik 10.000 permintaan per detik."',
        },
        {
          id: `gen-${timestamp}-5`,
          type: 'bignumber',
          nav: 'Efisiensi',
          kicker: 'Metrik Kinerja Kritis',
          title: 'Akselerasi Pemrosesan Sistem',
          value: '10x',
          label: 'Peningkatan kecepatan siklus deployment dan waktu respons API dibandingkan infrastruktur legacy sebelumnya.',
          sub: 'Divalidasi melalui pengujian beban tinggi dengan 10 juta permintaan paralel',
          notes: '🎙️ SKRIP METRIK:\n"Sepuluh kali lipat lebih cepat. Kecepatan ini bukan hanya soal angka teknis, melainkan kecepatan menghadirkan nilai nyata ke pelanggan kita sebelum kompetitor sempat merespons."',
        },
        {
          id: `gen-${timestamp}-6`,
          type: 'steps',
          nav: 'Roadmap Rilis',
          kicker: 'Milestone Implementasi',
          title: 'Fase Peluncuran Ekosistem Digital 2026',
          stepsItems: [
            {
              num: '01',
              title: 'Modernisasi Core Engine & API Gateway (Kuartal 1)',
              desc: 'Migrasi modul inti ke container mikro dan standarisasi protokol komunikasi antar layanan berlatensi rendah.',
            },
            {
              num: '02',
              title: 'Integrasi Model Prediktif AI (Kuartal 2)',
              desc: 'Pelatihan model machine learning menggunakan data historis perusahaan untuk otomatisasi alur kerja rutin tim.',
            },
            {
              num: '03',
              title: 'Audit Keamanan & Peluncuran Global (Kuartal 3)',
              desc: 'Pengujian penetrasi keamanan tingkat lanjut (SOC2/ISO) dan perluasan titik simpul distribusi ke seluruh region.',
            },
          ],
          notes: '🎙️ SKRIP ROADMAP:\n"Tiga kuartal ke depan adalah periode krusial. Setiap rilis telah dirancang sedemikian rupa agar operasional harian tidak terganggu sedikit pun selama masa transisi."',
        },
        {
          id: `gen-${timestamp}-7`,
          type: 'closing',
          nav: 'Penutup',
          kicker: 'Visi Masa Depan',
          title: 'Merintis Era Baru Komputasi Berkelanjutan',
          subtitle: 'Inovasi sejati bukan hanya tentang kecanggihan kode, melainkan tentang dampak nyata yang dirasakan oleh jutaan pengguna kita setiap harinya. Mari kita mulai melangkah.',
          foot: 'Divisi Teknologi Informasi & Kecerdasan Buatan · 2026',
          notes: '🎙️ SKRIP PENUTUP:\n"Terima kasih atas antusiasme seluruh rekan-rekan tim teknologi dan pimpinan manajemen. Sekarang pintu diskusi teknis dibuka lebar untuk menyelaraskan detail implementasi teknis."',
        },
      ],
    };
  }

  // ═════════════════════════════════════════════════════════════════════════
  // 4. KATEGORI: UMUM / BISNIS / PITCH DECK STRATEGIS
  // ═════════════════════════════════════════════════════════════════════════
  return {
    theme: 'sunset',
    slides: [
      {
        id: `gen-${timestamp}-1`,
        type: 'cover',
        nav: 'Pembuka',
        kicker: 'Presentasi Strategis & Eksekutif · 2026',
        title: title,
        subtitle: 'Kajian mendalam peluang pasar, kerangka solusi terpadu, proyeksi dampak terukur, dan roadmap eksekusi terarah untuk memimpin perubahan di era kompetisi global.',
        foot: 'Mychiara Sliders · Presentasi Web Interaktif Premium',
        notes: `🎙️ SKRIP PEMBUKA:\n"Selamat pagi/siang kepada hadirin sekalian. Hari ini kita berkumpul untuk membahas topik yang sangat penting: ${title}. Di tengah perubahan tren yang begitu dinamis, kita memerlukan pendekatan baru yang berani, teruji, dan memberikan hasil konkret bagi seluruh pemangku kepentingan. Mari kita telusuri bersama peta jalannya."`,
      },
      {
        id: `gen-${timestamp}-2`,
        type: 'agenda',
        nav: 'Agenda',
        kicker: 'Peta Diskusi',
        title: 'Ikhtisar Pokok Pembahasan Hari Ini',
        items: [
          `Urgensi & Analisis Lanskap ${title} (10 Menit)`,
          'Identifikasi Tantangan Kritis & Titik Lemah Saat Ini (10 Menit)',
          'Demonstrasi Solusi Inovatif & Jangkauan Global (15 Menit)',
          'Target Dampak Kuantitatif & Jadwal Implementasi (15 Menit)',
        ],
        notes: '🎙️ SKRIP AGENDA:\n"Untuk memanfaatkan waktu kita seefektif mungkin, presentasi ini dibagi ke dalam empat segmen terfokus: mulai dari urgensi masalah, solusi konkret yang kita tawarkan, bukti jangkauan, hingga rencana aksi nyata."',
      },
      {
        id: `gen-${timestamp}-3`,
        type: 'contrast',
        nav: 'Tantangan vs Solusi',
        kicker: 'Analisis Komparatif',
        title: 'Mendobrak Hambatan Konvensional Menuju Lompatan Prestasi',
        leftKicker: 'Situasi Saat Ini',
        leftTitle: 'Pendekatan Tradisional',
        leftItems: [
          'Proses birokrasi dan manual yang memakan waktu lama serta rawan kesalahan koordinasi',
          'Sulit mengukur tingkat pengembalian investasi (ROI) secara transparan dan akurat',
          'Kurangnya adaptabilitas terhadap perubahan kebutuhan audiens dan dinamika pasar',
        ],
        rightKicker: 'Pendekatan Baru',
        rightTitle: 'Inovasi Terpadu & Terukur',
        rightItems: [
          'Otomatisasi alur kerja terpadu yang memangkas waktu eksekusi hingga 60%',
          'Indikator capaian kinerja (KPI) real-time yang dapat dipantau oleh seluruh pimpinan',
          'Fleksibilitas tinggi dan skalabilitas tanpa batas untuk menjangkau peluang baru',
        ],
        notes: '🎙️ SKRIP TANTANGAN:\n"Di kolom sebelah kiri, kita melihat jebakan yang sering menahan kita: proses lama yang lambat dan sulit diukur. Di kolom kanan, kita menghadirkan solusi yang jelas: otomatis, transparan, dan berdampak langsung."',
      },
      {
        id: `gen-${timestamp}-4`,
        type: 'statement',
        nav: 'Jangkauan Global',
        visualType: 'globe',
        title: `Jangkauan Ekosistem & Distribusi Strategis`,
        subtitle: 'Konektivitas tanpa batas yang menghubungkan simpul-simpul pertumbuhan utama di berbagai kota dan wilayah strategis.',
        notes: '🎙️ SKRIP DEMO GLOBE:\n"Perhatikan bola dunia 3D interaktif di layar ini. Inisiatif kita tidak terbatas secara lokal. Kita memiliki simpul distribusi yang saling terhubung dari Jakarta ke Singapura, Tokyo, London, hingga San Francisco. Anda bisa memutar bola dunia ini untuk melihat jejaring kemitraan kita yang terus bertumbuh."',
      },
      {
        id: `gen-${timestamp}-5`,
        type: 'bignumber',
        nav: 'Target Dampak',
        kicker: 'Key Performance Indicator',
        title: 'Tingkat Keberhasilan Program',
        value: '94.2%',
        label: `Tingkat kepuasan mitra dan capaian efisiensi program dalam implementasi fase pertama.`,
        sub: 'Berdasarkan survei independen dan audit kepatuhan eksternal',
        notes: '🎙️ SKRIP DAMPAK:\n"Sembilan puluh empat koma dua persen. Ini adalah bukti nyata bahwa strategi yang kita jalankan diterima dengan sangat baik oleh pasar dan memberikan hasil riil."',
      },
      {
        id: `gen-${timestamp}-6`,
        type: 'steps',
        nav: 'Langkah Kerja',
        kicker: 'Rencana Pelaksanaan',
        title: 'Tiga Tahap Menuju Keberhasilan Nyata',
        stepsItems: [
          {
            num: '01',
            title: 'Penyelarasan Visi & Pembentukan Satgas (Bulan 1)',
            desc: 'Penyamaan persepsi di seluruh lini manajemen, penetapan anggaran, dan pembagian tanggung jawab lintas fungsi.',
          },
          {
            num: '02',
            title: 'Eksekusi Program Prioritas & Evaluasi Berkala (Bulan 2-3)',
            desc: 'Pelaksanaan inisiatif kunci secara cepat dengan pemantauan indikator kinerja mingguan untuk mitigasi kendala.',
          },
          {
            num: '03',
            title: 'Skalabilitas Penuh & Pelembagaan Budaya (Bulan 4-6)',
            desc: 'Ekspansi program ke cakupan yang lebih luas dan pendokumentasian praktik terbaik sebagai standar baku operasional.',
          },
        ],
        notes: '🎙️ SKRIP LANGKAH:\n"Keberhasilan program ini bergantung pada konsistensi eksekusi. Tiga tahapan ini memberikan kejelasan bagi setiap departemen mengenai apa yang harus dicapai setiap bulannya."',
      },
      {
        id: `gen-${timestamp}-7`,
        type: 'closing',
        nav: 'Penutup',
        kicker: 'Komitmen Bersama',
        title: `Mewujudkan Visi ${title} Menjadi Kenyataan`,
        subtitle: 'Peluang ada di depan mata kita. Dengan komitmen bersama, kerja cerdas, dan sinergi yang kokoh, kita pasti mampu mencapai target terbaik. Terima kasih atas dukungan Anda.',
        foot: 'Mychiara Sliders · Presentasi Interaktif Masa Depan',
        notes: '🎙️ SKRIP PENUTUP:\n"Bapak/Ibu sekalian, sekarang adalah saatnya kita bertindak. Rencana sudah matang, data sudah berbicara, dan tim kita siap mengeksekusi. Saya mengundang rekan-rekan semua untuk memberikan pertanyaan, tanggapan, atau persetujuan program ini. Terima kasih."',
      },
    ],
  };
}
