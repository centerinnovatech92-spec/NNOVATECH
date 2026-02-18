// =============================
// TOAST BIENVENIDA
// =============================
const toast = document.getElementById("welcome-toast");

window.addEventListener("load", () => {
  if(toast){
    toast.textContent = "¡Bienvenidos a CENTER INNOVATECH!";
    toast.classList.add("show");
    setTimeout(()=> toast.classList.remove("show"), 3000);
  }
});

// =============================
// SCROLL SUAVE BOTONES
// =============================
document.getElementById("btnServicios")?.addEventListener("click",()=> 
  document.querySelector("#servicios").scrollIntoView({behavior:"smooth"})
);
document.getElementById("cta-contact")?.addEventListener("click", ()=>{
  const modal = document.getElementById("contact-modal");
  modal.classList.add("show");
});

// =============================
// ANIMACIONES INTERSECTION OBSERVER
// =============================
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add("show"); }
  });
},{threshold:0.3});
document.querySelectorAll(".about-text, .service-card, .testimonial-card, .stat-card").forEach(el=>observer.observe(el));

// =============================
// MODAL CONTACTO
// =============================
const modal = document.getElementById("contact-modal");
const closeBtn = document.querySelector(".modal .close");
closeBtn?.addEventListener("click", ()=> modal.classList.remove("show"));
window.addEventListener("click", e=>{ if(e.target===modal) modal.classList.remove("show"); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") modal.classList.remove("show"); });
document.getElementById("contact-form")?.addEventListener("submit", e=>{
  e.preventDefault();
  modal.classList.remove("show");
});

// =============================
// HAMBURGUESA
// =============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger?.addEventListener("click", ()=>{
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});
navLinks?.querySelectorAll("a, button").forEach(link=>{
  link.addEventListener("click", ()=>{
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

// =============================
// CERRAR SESIÓN
// =============================
document.getElementById("logout-link")?.addEventListener("click", ()=>{
  if(toast){
    toast.textContent = "Has cerrado sesión 🔒";
    toast.classList.add("show");

    // Esperamos 1.5s antes de redirigir
    setTimeout(()=> {
      toast.classList.remove("show");
      window.location.href = "login.html";
    }, 1500);
  } else {
    window.location.href = "login.html";
  }
});

// =============================
// ESTADÍSTICAS ANIMADAS
// =============================
const stats = document.querySelectorAll(".stat-card");
const statsObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const numberEl = entry.target.querySelector(".stat-number");
      const target = +numberEl.getAttribute("data-target");
      const duration = 2000;
      const start = performance.now();
      const animate = (now)=>{
        const elapsed = now - start;
        const progress = Math.min(elapsed/duration,1);
        numberEl.textContent = Math.floor(progress * target);
        if(progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      statsObserver.unobserve(entry.target);
    }
  });
},{threshold:0.3});
stats.forEach(stat=>statsObserver.observe(stat));

// =============================
// EFECTO SCROLL NAVBAR
// =============================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// =============================
// EFECTO 3D DINÁMICO VIDEO
// =============================
const videoContainer = document.querySelector('.about-video');
const video = videoContainer?.querySelector('video');
if(videoContainer && video){
  videoContainer.addEventListener('mousemove', (e) => {
    const rect = videoContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx)/cx;
    const dy = (y - cy)/cy;
    video.style.transform = `rotateY(${dx*10}deg) rotateX(${-dy*10}deg) scale(1.05)`;
  });
  videoContainer.addEventListener('mouseleave', () => {
    video.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
}
