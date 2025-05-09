document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider__image');
    const dots = document.querySelectorAll('.slider__dot');
    const prevBtn = document.querySelector('.slider__btn_prev');
    const nextBtn = document.querySelector('.slider__btn_next');

    let index = 0;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove('slider__image_active'));
      dots.forEach(dot => dot.classList.remove('slider__dot_active'));

      slides[i].classList.add('slider__image_active');
      dots[i].classList.add('slider__dot_active');
    }

    nextBtn.addEventListener('click', () => {
      index = index + 1;
      if (index === slides.length) {
        index = 0;
      }
      showSlide(index);
    });

    prevBtn.addEventListener('click', () => {
      index = index - 1;
      if (index < 0) {
        index = slides.length - 1;
      }
      showSlide(index);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
      });
    });

    showSlide(index); // при загрузке страницы
});