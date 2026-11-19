

// Botón para volver arriba
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animación de aparición de las secciones
const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".topic, .card").forEach(function(elemento) {
    observador.observe(elemento);
});

console.log("TECHMOBILE iniciado correctamente");
const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".card");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.textContent.toLowerCase()
            + " " + tarjeta.dataset.search;

        tarjeta.style.display = contenido.includes(texto)
            ? "block" : "none";
    });
});