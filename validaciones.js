function mostrarDialogo() {

    var dialogo = document.getElementById("dialogo");
    dialogo.show();

}

function cerrarDialogo() {

    var dialogo = document.getElementById("dialogo");
    dialogo.close();
    
}

$(() => {

    $("#borrar").on('click', () => {
        mostrarDialogo();
    });

    $("#aceptar").on("click", () => {
        cerrarDialogo();
    });
    $("#cancelar").on("click", () => {
        cerrarDialogo();
    });
});
  
  
  