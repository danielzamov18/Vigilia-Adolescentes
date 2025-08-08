document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Pronto te contactaremos.");
  this.reset();
});