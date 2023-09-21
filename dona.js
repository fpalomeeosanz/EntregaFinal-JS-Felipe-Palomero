//variables del DOM luego de crear div
const montoDonaciones = document.getElementById("montoDonacion");
const donarMasButton = document.getElementById("donarMas");
const donarMenosButton = document.getElementById("donarMenos");
const hacerDonacionButton = document.getElementById("hacerDonacion");
const messageElement = document.getElementById("message");

//para totalizar las donaciones
let montoTotal = 0;

//loguica para agregar mas 10 con el boton
donarMasButton.addEventListener("click", () => {
  const montoMas = parseInt(montoDonaciones.value);
  if (!isNaN(montoMas) && montoMas > 0) {
    montoTotal += montoMas;
    updateDonationMessage();
  }
});

//para quitar 10
donarMenosButton.addEventListener("click", () => {
  const montoMenos = parseInt(montoDonaciones.value);
  if (!isNaN(montoMenos) && montoMenos> 0) {
    montoTotal -= montoMenos;
    updateDonationMessage();
  }
});

//mensaje al donarn
hacerDonacionButton.addEventListener("click", () => {
    if (montoTotal > 0) {
      swal({
        title: "¡Gracias por tu donación! Si quieres hacer más aportes, por favor da clic al boton donar mas abajo"
      });
    } else {
      swal("Por favor, si puedes, agrega un monto antes de donar :)");
    }
  });
  
//funcion para mostar el monto de la donacion
function updateDonationMessage() {
  messageElement.textContent = `Total de donación: $${montoTotal}`;
}

