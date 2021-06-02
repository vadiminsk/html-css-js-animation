'use strict';

const count = document.getElementById('count');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const saveBtn = document.getElementById('save');
const saveEl = document.getElementById('save-el');

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

saveBtn.addEventListener('click', function () {
  let countStr = count.value + '' + '-';
  saveEl.innerText += countStr;
});
