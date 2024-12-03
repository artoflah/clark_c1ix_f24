document.addEventListener('DOMContentLoaded', () => {
  const necklace = document.getElementById('necklace1');
  let opacity = 0; 

  document.body.addEventListener('click', () => {
    if (opacity < 1) {
      opacity += 0.1; 
      necklace.style.opacity = opacity;

      if (opacity >= 0.1) {
        necklace.style.pointerEvents = 'auto';
      }
    }
  });
});
