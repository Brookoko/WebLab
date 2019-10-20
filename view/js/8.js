'use strict';

// eslint-disable-next-line no-unused-vars
function reverse(obj) {
  const text = obj.number.value;
  let res = '';
  for (let i = text.length - 1; i >= 0; i--) {
    res += text[i];
  }
  obj.result.value = res;

}

// eslint-disable-next-line no-unused-vars
const allLucky = form => {
  let count = 0;
  for (let i = 0; i < 1000000; i++) {
    let num = i + '';
    num = num.padStart(6, '0');
    if (isLucky(num)) count++;
  }
  form.result.value = count;
};


// eslint-disable-next-line no-unused-vars
function isLucky(ticketNumber) {
  const first = ticketNumber.substr(0, 3);
  const second = ticketNumber.substr(3, 3);
  return first.split('').reduce((a, b) => Number(a) + Number(b)) ===
    second.split('').reduce((a, b) => Number(a) + Number(b));
}

// eslint-disable-next-line no-unused-vars
function isCorrect(ticketNumber) {
  ticketNumber = +ticketNumber;
  if (ticketNumber.length !== 6) return false;
  if (Number.isNaN(ticketNumber)) return false;
  return true;
}

// eslint-disable-next-line no-unused-vars
function delimiters(form) {
  const number = Number(form.num.value);
  const ul = form.getElementsByTagName('ul')[0];
  ul.innerHTML = '';
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${i}`));
      ul.appendChild(li);
    }
  }
}
