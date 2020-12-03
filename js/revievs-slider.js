
const prevBtn = document.querySelector('.revievs-prev-btn'), // Previous button
  nextBtn = document.querySelector('.revievs-next-btn'), // Next button
  slides = document.querySelectorAll('.reviev-block'); // Nodelist of slides

let counter = 1 // Counter of slides 

const prevSlide = () => {
  if (counter == 1) {
    counter = slides.length - 1;
    activeSlide(counter);
  } else {
    counter--;
    activeSlide(counter);
  }
}

const nextSlide = () => { // Установить остановку на последнем слайде. Не перескакивать на первый слайд. 
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
