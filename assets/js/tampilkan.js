const playerData = JSON.parse(localStorage.getItem("playerData"));
const namaDariStorage = playerData.name;
const skorDariStorage = playerData.score;
document.getElementById("hasil").innerHTML = `Nama: ${namaDariStorage}<br>Score: ${skorDariStorage}%`;
