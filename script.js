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
};
