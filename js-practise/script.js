let slideIndex = 1;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dot = document.getElementsByClassName('dot');

prev.addEventListener('click', function () {
  showSlides((slideIndex -= 1));
});

next.addEventListener('click', function () {
  showSlides((slideIndex += 1));
});

for (let j = 0; j < dot.length; j++) {
  dot[j].addEventListener('click', function () {
    showSlides((slideIndex = j + 1));
    dots[j].className = dots[j].className.replace(' active', '');
  });
}

function showSlides(n) {
  var slides = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);
