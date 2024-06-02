let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".carrossel .slides img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function mostrarFormulario(nomeGato) {
  document.getElementById("formulario-adocao").style.display = "block";
  document.getElementById("gato").value = nomeGato;
}
$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });
});
