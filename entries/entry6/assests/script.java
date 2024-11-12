document.querySelectorAll('.container img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.classList.add('shake');
  });

  img.addEventListener('animationend', () => {
    img.classList.remove('shake');
  });
});
