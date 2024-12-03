
const necklaces = document.querySelectorAll('.necklace');
let currentIndex = 0;

necklaces.forEach((necklace, index) => {
  necklace.addEventListener('click', () => {
    necklaces[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % necklaces.length;

    necklaces[currentIndex].classList.add('active');
  });
});
