document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});


/*Scrollable banners*/

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.banner-slide img');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const slideWidth = slides[0].clientWidth;
  const newTransformValue = -currentIndex * slideWidth;
  document.querySelector('.banner-slide').style.transform = `translateX(${newTransformValue}px)`;
}
