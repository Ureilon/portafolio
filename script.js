document.querySelectorAll('.section').forEach(section => {
    const cover = section.querySelector('.cover');

    cover.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('image-popup');
const popupImage = popup.querySelector('img');
const closeButton = popup.querySelector('.close-btn');

images.forEach(img => {
    img.addEventListener('click', () => {
        popupImage.src = img.src;
        popup.classList.add('active');
    });
});

closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target === closeButton) {
        popup.classList.remove('active');
    }
});
