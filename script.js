const miCuadro = document.getElementById("miCuadro");
const cambiarColorBoton = document.getElementById("cambiarColor");

cambiarColorBoton.addEventListener("click", function() {
    // Generar un color aleatorio en formato #RRGGBB
    const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambiar el color de fondo del cuadro
    miCuadro.style.backgroundColor = colorAleatorio;
});
