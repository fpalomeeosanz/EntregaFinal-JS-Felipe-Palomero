//busqueda y preparacion de audios 
let queryCuentos = window.location.search.substring(1).split("=");
let audioEscucha = document.getElementById("audioEscucha");

//empate de busquedas y play
audioEscucha.src = "../audios/" + queryCuentos[1];
//arreglado el problema del auto play sin hacer funciones extras, solo ".load"
audioEscucha.load();



//mensaje de error cuando no hay cuentos crgados 
audioEscucha.addEventListener('error', function () {
  swal({
    title: "UPS!! Estamos trabajando para ti!!!",
    text: "Este audiocuento está en proceso, pero puedes elejir: Aventuras, Dinosaurio, Espacio, Varita o Fantasías, Astronauta, Castillo, Cohete o Risas, Unicornio, Bosque, Bicicleta",
    icon: "warning",
    buttons: true,
    dangerMode: true,
})
.then((play) => {
    if (play) {
        swal("¡Dale a Jugar Otra Vez!",);
    } else {
        swal("¡Vuelve pronto!", "Estamos agregando nuevos cuentos constantemente.", "info");
    }
});
});













  