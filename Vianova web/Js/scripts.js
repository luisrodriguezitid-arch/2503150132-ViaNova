const Formulario = document.getElementById("miFormulario");

Formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("resultado").textContent = "Gracias por enviar tu informacion";

    Formulario.reset();
});
