function crackEgg() {
  const egg = document.getElementById("egg");
  const glow = document.getElementById("glow");
  const surprise = document.getElementById("surprise");
  const audio = document.getElementById("moan");

  // Cambia immagine dell'uovo
  egg.style.backgroundImage = 'url("static/egg-broken.png")';

  // Mostra bagliore
  glow.style.opacity = 1;

  // Mostra la sorpresa
  setTimeout(() => {
    surprise.style.opacity = 1;
    surprise.style.transform = "scale(1)";
    audio.play();
  }, 300);
}
