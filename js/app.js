const numeroAleatorio = () => {
  return Math.round(Math.random() * 10 + 1);
};
const comenzarJuego = () => {
  console.log("Desde la funciona comenzar juego");
  const parrafo = document.getElementsByTagName("p");
  numeroAleatorio();
  console.log(numeroAleatorio());
  if (borrarParrafo) {
    parrafo[0].classList.remove(`d-none`);
    borrarParrafo = false;
  }
  btnComenzarJuego.classList.add("disabled");
};

const asDelNumero = (e) => {
  e.preventDefault();
  console.log("Desde la funciona asDelNumero");
  const numeroDelUsuario = document.getElementById("numero").value;
  if (numeroAleatorio() === numeroDelUsuario) {
    alert("Enhorabuena lo as adivinado")
  }
};
// Variables
const btnComenzarJuego = document.querySelector(".btn-outline-warning");
const btnEnviarNumero = document.getElementById("formEnviar");
let borrarParrafo = true;

// Manejador de eventos
btnComenzarJuego.addEventListener(`click`, comenzarJuego);
btnEnviarNumero.addEventListener("submit", asDelNumero);
