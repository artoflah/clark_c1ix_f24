document.getElementById('dressonhanger').addEventListener('click', function () {
    const content = document.getElementById('content');
    const button = document.querySelector('.button');

    content.classList.toggle('hidden');

    if (button) {
        button.style.display = 'none';
    } else {
        console.warn('Button element not found');
    }

    document.body.style.cursor = "url('cursor/customcursor.png'), auto";
});

