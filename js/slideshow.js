let slideIndex = 1;
let slideshowContainer = document.querySelector(".slideshow-container");
let slides = slideshowContainer.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

handleTouch();
showSlides(slideIndex);

function handleTouch() {
  slideshowContainer.addEventListener('touchstart', handleTouchStart, false);
  slideshowContainer.addEventListener('touchmove', handleTouchMove, false);
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      /* left swipe */
      slideIndex++;
    } else {
      /* right swipe */
      slideIndex--;
    }
    console.log(slideIndex);
  }

  showSlides(slideIndex);
  xDown = null;
  yDown = null;
};

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  checkNotApplicableValues(n);
  hideAllSlides();
  showSelectedSlide(slideIndex - 1);
}

function checkNotApplicableValues(number) {
  if (number > slides.length) { slideIndex = 1 }
  if (number < 1) { slideIndex = slides.length }

}

function hideAllSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
}

function showSelectedSlide(number) {
  slides[number].style.display = "block";
  dots[number].classList.add("active");
}