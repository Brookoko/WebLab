'use strict'

const change = (obj, x, y) => () => {
  const cell = obj.childNodes[1].rows[x].cells[y];
  const color = obj.colorValue.value;
  const image = obj.image.value;
  if (color) cell.style.backgroundColor = color;
  if (image) {
    cell.style.backgroundImage = `url(${image})`;
  }
}

const prepare = () => {
  for (const row of document.getElementById("tableToChange").rows) {
    for (const cell of row.cells) {
      cell.onclick = change(document.colorTable, row.rowIndex, cell.cellIndex);
    }
  }
  console.dir(document.products);
}

const calculate = obj => {
  let sum = 0;
  sum += Number(obj.numberA.value) * Number(obj.costA.value);
  sum += Number(obj.numberB.value) * Number(obj.costB.value);
  sum += Number(obj.numberC.value) * Number(obj.costC.value);
  obj.res.value = sum;
}

