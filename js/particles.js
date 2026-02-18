const canvas = document.getElementById("bgParticles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function initParticles() {
  w = canvas.width = canvas.offsetWidth;
  h = canvas.height = canvas.offsetHeight;

  particles = [];
  for(let i=0;i<80;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*3+1,
      dx: (Math.random()-0.5)*0.5,
      dy: (Math.random()-0.5)*0.5
    });
  }
}

function drawParticles(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.08)';
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>w)p.dx*=-1;
    if(p.y<0||p.y>h)p.dy*=-1;
  });
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", initParticles);
initParticles();
drawParticles();
