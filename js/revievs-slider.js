
const prevBtn = document.querySelector('.revievs-prev-btn'),
  nextBtn = document.querySelector('.revievs-next-btn'),
  slides = document.querySelectorAll('.reviev-block');

let counter = 1

const prevSlide = () => {
  if (counter == 1) {
    counter = slides.length - 1;
    activeSlide(counter);
  } else {
    counter--;
    activeSlide(counter);
  }
}

const nextSlide = () => {
  if (counter == slides.length - 1) {
    counter = 1;
    activeSlide(counter);
  } else {
    counter++;
    activeSlide(counter);
  }
}

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active-block');
  }
  slides[n - 1].classList.add('active-block');
  slides[n].classList.add('active-block');
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
