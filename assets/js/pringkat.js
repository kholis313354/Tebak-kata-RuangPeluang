function peringkat() {
  const name = document.getElementById("nama").value;
  const score = 80;
  localStorage.setItem("playerData", JSON.stringify({ name, score }));
  window.location.href = "latihan1.html";
  window.location.href = `latihan1.html?name=${name}&score=${score}`;
}
