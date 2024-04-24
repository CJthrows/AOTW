function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id === pageId + 'Page') {
            pages[i].style.display = 'block';
        } else {
            pages[i].style.display = 'none';
        }
    }
}

window.onload = function() {
    const images = document.querySelectorAll('.collage img');
    let index = 0;
    let timer;

    function showImage(indexToShow) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
        images[indexToShow].classList.add('active');
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
        resetTimer();
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextImage, 3000);
    }

    document.querySelector('.collage .controls button:nth-child(1)').addEventListener('click', prevImage);
    document.querySelector('.collage .controls button:nth-child(2)').addEventListener('click', nextImage);
    resetTimer();

    function showHomePage() {
        const pages = document.querySelectorAll('.page');
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }
        document.querySelector('header').style.display = 'block';
        document.querySelector('.collage').style.display = 'flex';
        document.getElementById('aboutPage').style.display = 'none';
        document.getElementById('experiencePage').style.display = 'block';
        document.getElementById('educationPage').style.display = 'block';
        document.getElementById('awardsPage').style.display = 'block';
        document.getElementById('skillsPage').style.display = 'block';
        document.getElementById('projectsPage').style.display = 'block';

        const menuButtons = document.querySelectorAll('nav ul li button');
        for (let i = 0; i < menuButtons.length; i++) {
            menuButtons[i].style.display = 'inline-block';
        }
    }

    showPage('about');

    document.querySelector('nav ul').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const pageId = event.target.textContent.toLowerCase();
            showPage(pageId);
            document.querySelector('header').style.display = 'none';
            document.querySelector('.collage').style.display = 'none';
        }
    });

    document.querySelector('nav ul li button:last-child').addEventListener('click', function() {
        showHomePage();
    });
};
