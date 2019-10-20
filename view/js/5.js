'use strict';

// eslint-disable-next-line no-unused-vars
function changeWidth(obj) {
  const widthOfLine = obj.width.value;
  obj.getElementsByTagName('hr')[0].width = widthOfLine;
}

// eslint-disable-next-line no-unused-vars
function sendData(obj) {
  const visited = Array();
  const data = obj.getElementsByTagName('input');
  for (const item of data) {
    if (!visited.includes(item.name)) {
      if (item.type === 'radio' && !item.checked) {
        continue;
      } else {
        visited.push(item.name);
        console.log(item.name, item.value);
      }
    }
  }
}
