'use strict';

// eslint-disable-next-line no-unused-vars
function calculator(obj) {
  const data = obj.getElementsByTagName('input');
  for (const item of data) {
    item.addEventListener('click', e => bind(e, obj, data));
  }
}

// eslint-disable-next-line no-unused-vars
function getItemsCost(data) {
  const visited = new Array();
  let totalCost = 0;
  for (const item of data) {
    if (item.type === 'radio' && !item.checked) continue;
    else if (item.type === 'checkbox' && !item.checked) continue;
    else {
      visited.push(item.name);
      totalCost += Number(item.value);
    }
  }
  return (totalCost);
}

function bind(event, obj, data) {
  obj.result.value = getItemsCost(data);
}
