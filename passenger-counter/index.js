'use strict';

const count = document.getElementById('count');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

increment.addEventListener('click', function () {
  count.value = +count.value + 1;

  if (+count.value >= 1) {
    decrement.removeAttribute('disabled', '');
  }
});

decrement.addEventListener('click', function () {
  count.value = +count.value - 1;

  if (+count.value < 1) {
    decrement.setAttribute('disabled', '');
  }
});
