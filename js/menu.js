// MENU HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// CERRAR MENÚ AL HACER CLICK EN ENLACE
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => { navMenu.classList.remove("active"); hamburger.classList.remove("open"); });
});

// BOTÓN CERRAR SESIÓN MÓVIL
document.getElementById("logout-btn-mobile").addEventListener("click", () => {
  window.location.href = "login.html";
});
