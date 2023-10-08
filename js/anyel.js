var darkModeBtn = document.getElementById("dark-mode-btn");
var elements = [
  document.getElementById("page-top"),
  document.getElementById("team"),
  document.getElementById("fondo"),
  document.getElementById("hola")

];

darkModeBtn.addEventListener("click", function() {
  elements.forEach(function(element) {
    element.classList.toggle("bg-dark");
    element.classList.toggle("text-light");
  });

  // Cambiar el ícono
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});



    const boton = document.getElementById("boton");

    boton.addEventListener("click", function() {
      // Generar un color aleatorio en formato hexadecimal
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
      // Cambiar el color de fondo del botón
      boton.style.backgroundColor = randomColor;
    });