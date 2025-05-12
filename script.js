let opened = false;

function openCard() {
  if (opened) return;
  document.querySelector('.card').classList.add('open');
  typeMessage("Gracias, mamá, por ser mi guía, mi fuerza y mi refugio. Tu amor es el regalo más grande que la vida me dio. Hoy celebro tu ternura, tu entrega y tu infinito corazón. ¡Te amo,  Mamá! 💖");
  opened = true;
}

function typeMessage(text) {
  const el = document.getElementById('message');
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 60);
}

function showHearts(e) {
  e.stopPropagation(); // para que no se cierre la tarjeta al hacer clic en el botón
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.innerText = "💖";
    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
