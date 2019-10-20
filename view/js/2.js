'use strict';

function dlt(obj) {
  const x1 = obj.x1.value;
  const x2 = obj.x2.value;
  const x3 = obj.x3.value;
  const y1 = obj.y1.value;
  const y2 = obj.y2.value;
  const y3 = obj.y3.value;
  const delta = (x1 - x3) * (y2 - y3) - (y1 - y3) * (x2 - x3);
  return delta;
}


// eslint-disable-next-line no-unused-vars
function area(obj) {
  obj.res.value = Math.abs(0.5 * dlt(obj));
}

// eslint-disable-next-line no-unused-vars
function len(obj) {
  obj.res.value = Math.sqrt(Math.pow(obj.x1.value, 2) +
  Math.pow(obj.y1.value, 2));
}

// eslint-disable-next-line no-unused-vars
function swapVar(obj) {
  const t = obj.x2.value;
  obj.x2.value = obj.x1.value;
  obj.x1.value = t;
}

