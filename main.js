function openlist() {
  document.getElementById("open").style.display = "flex";
  document.getElementById("flechas").style.position = "relative";
  document.getElementById("open").style.position = "fixed";
}
function cerrarlist() {
  document.getElementById("open").style.display = "none";
  document.getElementById("flechas").style.position = "fixed";
}
