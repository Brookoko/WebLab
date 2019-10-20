'use strict';

// eslint-disable-next-line no-unused-vars
function swap(obj) {
  const num = Number(obj.pic.value);
  const images = obj.getElementsByTagName('img');
  const len = images.length;
  const temp = images[len - 1].src;
  images[len - 1].src = images[num].src;
  images[num].src = temp;
}

// eslint-disable-next-line no-unused-vars
function zoomIn(obj) {
  obj.picture.width = 250;
  obj.picture.height = 250;

}

// eslint-disable-next-line no-unused-vars
function zoomOut(obj) {
  obj.picture.width = 150;
  obj.picture.height = 150;

}

// eslint-disable-next-line no-unused-vars
function hover() {
  const menuItems = document.getElementsByClassName('menu_item');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseenter',
      e => replaceItem(e, menuItems, i));
    menuItems[i].addEventListener('mouseleave',
      e => bindLeave(e, menuItems, i));
  }
}

// eslint-disable-next-line no-unused-vars
function bindEnter(event, menuItems, index) {
  replaceItem(menuItems[index]);
}

// eslint-disable-next-line no-unused-vars
function bindLeave(event, menuItems, index) {
  replaceItemBack(menuItems[index]);
}

// eslint-disable-next-line no-unused-vars
function replaceItem(item) {
  const arr = item.src.split('/');
  const name = arr[arr.length - 1];
  const names = name.split('.');
  names[0] += '_m';
  const newName = names.join('.');
  console.log(newName);
  item.src = newName;
  item.width = 330;
}

// eslint-disable-next-line no-unused-vars
function replaceItemBack(item) {
  const arr = item.src.split('/');
  const name = arr[arr.length - 1];
  const names = name.split('.');
  names[0] = names[0].substring(0, names[0].length - 2);
  const newName = names.join('.');
  item.src = newName;
  item.width = 250;
}
