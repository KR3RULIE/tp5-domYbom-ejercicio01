const numeroAleatorio = () => {
  return Math.round(Math.random() * 10 + 1);
};
const comenzarJuego = () => {
  const parrafo = document.getElementsByTagName("p");
  console.log(numAleatorio);
  if (borrarParrafo) {
    parrafo[0].classList.remove(`d-none`);
    borrarParrafo = false;
  }
  btnComenzarJuego.classList.add("disabled");
};

const asDelNumero = (e) => {
  e.preventDefault();
  const numeroDelUsuario = parseInt(document.getElementById("numero").value);
  const div = document.getElementsByTagName("div");
  if (numAleatorio === numeroDelUsuario) {
    alert("😱 Enhorabuena, lo has adivinado 😨");
    div[3].classList.remove("d-none");
  } else if (numeroDelUsuario > numAleatorio) {
    alert("Un poco menos 😆");
  } else {
    alert("Un poco mas 😜");
  }
  btnEnviarNumero.reset();
};

const reiniciarElJuego = () => {
  location.reload();
};
// Variables
const btnComenzarJuego = document.querySelector(".btn-outline-warning");
const btnEnviarNumero = document.getElementById("formEnviar");
const btnReiniciarJuego = document.querySelector(".btn-outline-info");
let borrarParrafo = true;
const numAleatorio = numeroAleatorio();
// Manejador de eventos
btnComenzarJuego.addEventListener(`click`, comenzarJuego);
btnEnviarNumero.addEventListener("submit", asDelNumero);
btnReiniciarJuego.addEventListener("click", reiniciarElJuego);
