for (let i = 0; i <= 100; i++) {
  let box = document.createElement('div');
  box.classList.add('textBox');
  box.innerHTML = 'Just<span>4</span>Fun';
  document.querySelector('.text').appendChild(box);
}

document.body.addEventListener('mousemove', (e) => {
  gsap.to('.textBox', {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.005,
  });
});
