function crackEgg() {
  console.log("Egg clicked!"); // Per il debug
  const egg = document.getElementById("egg");
  const glow = document.getElementById("glow");
  const surprise = document.getElementById("surprise");

  // Cambia immagine dell'uovo
  egg.style.backgroundImage = 'url("static/egg-broken.png")';

  // Mostra bagliore
  glow.style.opacity = 1;

  // Mostra la sorpresa
  setTimeout(() => {
    console.log("Showing surprise..."); // Per il debug
    surprise.style.opacity = 1;
    surprise.style.transform = "scale(1)";
  }, 300);
}
