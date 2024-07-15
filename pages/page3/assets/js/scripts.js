function plusSlides(n, projectId) {
    showSlides(slideIndex[projectId] += n, projectId);
}

function currentSlide(n, projectId) {
    showSlides(slideIndex[projectId] = n, projectId);
}

function showSlides(n, projectId) {
    let i;
    let slides = document.querySelectorAll(`.mySlides:not([data-project="${projectId}"])`);
    let dots = document.querySelectorAll(`.dots-container[data-project="${projectId}"] .dot`);
    if (n > slides.length) { slideIndex[projectId] = 1 }
    if (n < 1) { slideIndex[projectId] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[projectId] - 1].style.display = "block";
    dots[slideIndex[projectId] - 1].className += " active";
}

let slideIndex = {};
slideIndex[4] = 1;
slideIndex[5] = 1;

showSlides(1, 4);
showSlides(1, 5);

document.querySelector('.prev').addEventListener('click', () => plusSlides(-1, 4));
document.querySelector('.next').addEventListener('click', () => plusSlides(1, 4));
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1, 5));
document.querySelector('.next').addEventListener('click', () => plusSlides(1, 5));
