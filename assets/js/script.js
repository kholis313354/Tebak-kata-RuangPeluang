// Daftar bahasa pemrograman yang akan ditebak
var jawaban = [
    "banyak",
    "konsultasi",
    "notifikasi",
    "portal",
    "tersimpan",
    "personalisasi",
    "akun",
    "deadline",
    "riwayat",
    "kartu",
  ];
  
  // Daftar pertanyaan untuk masing-masing bahasa pemrograman
  var pertanyaan = {
    banyak: "Apa tujuan utama dari aplikasi Ruang Pintar?",
    konsultasi: " Fitur apa yang memungkinkan pengguna berkonsultasi langsung dengan mentor profesional di Ruang Pintar?",
    notifikasi: "Bagaimana aplikasi Ruang Pintar membantu pengguna agar tidak ketinggalan peluang penting?",
    portal:
      "Apa istilah untuk daftar peluang seperti beasiswa, magang, dan lomba?",
      tersimpan: "Apa nama tempat di aplikasi untuk menyimpan peluang favorit?",
      Personalisasi: "Formulir apa yang digunakan untuk mengatur preferensi pengguna?",
      Akun: "Apa yang diakses pengguna untuk mengatur informasi pribadi mereka?",
      deadline: "Notifikasi di Ruang Pintar ditujukan untuk mengingatkan pengguna tentang apa?",
      riwayat: "Apa istilah untuk rangkuman aktivitas yang sudah dilakukan pengguna?",
      kartu:
      "Apa fitur di Ruang Pintar yang membantu pengguna mendapatkan inspirasi profesi?",
  };
  
  // Element HTML yang diperlukan
  var wordDisplay = document.getElementById("garis-display");
  var guessInput = document.getElementById("kholis-ganteng");
  var guessButton = document.getElementById("tebak-button");
  var hintButton = document.getElementById("petunjuk-button");
  var hintElement = document.getElementById("petunjuk-text");
  var correctCountElement = document.getElementById("jawaban-benar");
  var levelButton = document.getElementById("level-button");
  
  var selectedWord, hiddenWord;
  var correctCount = 0;
  var maxCorrectCount = 3; // Jumlah maksimal jawaban benar
  
  // Fungsi untuk menginisialisasi permainan
  function initGame() {
    // Memilih secara acak sebuah kata dari daftar bahasa pemrograman
    selectedWord = jawaban[Math.floor(Math.random() * jawaban.length)];
  
    // Membuat sebuah array dengan dash untuk setiap huruf dalam selectedWord
    hiddenWord = Array(selectedWord.length).fill("-");
  
    // Menampilkan kata yang belum ditebak awal
    wordDisplay.textContent = hiddenWord.join(" ");
  
    // Menampilkan petunjuk untuk kata yang dipilih
    hintElement.textContent = pertanyaan[selectedWord];
  }
  
  // Event listener saat tombol "Tebak" ditekan
  guessButton.addEventListener("click", function () {
    var guess = guessInput.value.toLowerCase();
  
    // Memeriksa apakah tebakan benar
    if (guess === selectedWord) {
      hiddenWord = selectedWord.split("");
      wordDisplay.textContent = hiddenWord.join(" ");
      alert("Selamat, kamu berhasil menebak kata!");
  
      // Menambah jumlah jawaban benar
      correctCount++;
  
      // Menampilkan jumlah jawaban benar
      correctCountElement.textContent = "Jawaban Benar: " + correctCount;
  
      // Memeriksa apakah sudah mencapai jumlah maksimal jawaban benar
      if (correctCount === maxCorrectCount) {
        // Mengaktifkan dan menampilkan tombol "Level Selanjutnya"
        levelButton.removeAttribute("disabled");
        levelButton.style.display = "inline-block";
      }
  
      // Melanjutkan ke kata berikutnya
      resetGame();
    } else {
      alert("Tebakan salah, coba lagi!");
    }
  
    // Mengosongkan input tebakan
    guessInput.value = "";
  });
  
  // Event listener saat tombol "Petunjuk 1 Huruf" ditekan
  hintButton.addEventListener("click", function () {
    var indices = [];
    for (var k = 0; k < selectedWord.length; k++) {
      if (hiddenWord[k] === "-") {
        indices.push(k);
      }
    }
  
    // Jika tidak ada dash yang tersisa, tidak ada petunjuk yang bisa ditampilkan
    if (indices.length === 3) {
      alert("Tidak ada petunjuk yang tersedia.");
      return;
    }
  
    var randomIndex = indices[Math.floor(Math.random() * indices.length)];
    hiddenWord[randomIndex] = selectedWord[randomIndex];
    wordDisplay.textContent = hiddenWord.join(" ");
  });
  
  // Event listener saat tombol "Level Selanjutnya" ditekan
  levelButton.addEventListener("click", function () {
    // Mengarahkan ke halaman index2.html
    window.location.href = "level2.html";
  });
  
  // Fungsi untuk mengulang permainan
  function resetGame() {
    initGame();
  }
  
  // Menginisialisasi permainan saat script dimuat
  initGame();