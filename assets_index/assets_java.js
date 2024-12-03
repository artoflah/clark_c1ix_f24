document.getElementById('dressonhanger').addEventListener('click', function () {
    const content = document.getElementById('content');
    const button = document.querySelector('.button');
    
    content.classList.toggle('hidden');
    
    button.style.display = 'none';
});
