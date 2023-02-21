// Contact
function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  document.getElementById("ct").innerHTML = x;
  display_c();
}

// HERO
document.getElementById("title").innerHTML = "KESSOKU BAND";
document.getElementById("text").innerHTML = "- Bochi The Rock -";

// FORM INPUT
const nama = document.getElementById("nama");
const setnama = document.getElementById("setnama");
const tanggalahir = document.getElementById("tanggallahir");
const settanggalahir = document.getElementById("settanggallahir");
const laki = document.getElementById("laki");
const perempuan = document.getElementById("perempuan");
const setjeniskelamin = document.getElementById("setjeniskelamin");
const pesan = document.getElementById("pesan");
const setpesan = document.getElementById("setpesan");
const btnsubmit = document.getElementById("btnsubmit");

function fun1() {
  setnama.innerHTML = nama.value;
  settanggalahir.innerHTML = tanggalahir.value;
  setpesan.innerHTML = pesan.value;
  var radio = document.querySelector("input[type=radio][name=jk]:checked");
  radio.checked = false;
}

laki.addEventListener("click", () => {
  setjeniskelamin.innerHTML = laki.value;
});

perempuan.addEventListener("click", () => {
  setjeniskelamin.innerHTML = perempuan.value;
});

btnSubmit.addEventListener("click", fun1);
