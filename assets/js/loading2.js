// Fungsi untuk menghentikan animasi loading dan menampilkan game-container
function stopLoading() {
    // Hentikan animasi loading
    $(".loading-container").fadeOut();
  
    // Tampilkan game-container
    const gameContainer = document.querySelector(".game-container");
    gameContainer.style.display = "inline-block";
  }
  
  // Jalankan loading saat halaman dibuka
  $(window).on("load", function () {
    // Hentikan animasi loading dan tampilkan game-container
    setTimeout(stopLoading, 2000);
  });
  