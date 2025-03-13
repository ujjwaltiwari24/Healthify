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


/*Feature image*/

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  // This function ensures elements stay visible once they appear
  function checkScroll() {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the element is in the viewport, add the 'show' class
      if (position < windowHeight - 100 && position > 50) {
        element.classList.add("show");
      }
    });
  }

  // Check scroll position immediately after DOM content is loaded
  checkScroll();

  // Add event listener to handle scrolling
  window.addEventListener("scroll", checkScroll);

  // Optional: Listen for resize events to ensure it works well on window resizing
  window.addEventListener("resize", checkScroll);
});
