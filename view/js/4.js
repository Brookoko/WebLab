function swap(obj) {
	num = Number(obj.pic.value);
	images = obj.getElementsByTagName("img");
	len = images.length;
	temp = images[len - 1].src;
	images[len - 1].src = images[num].src;
	images[num].src = temp;
}

function zoomIn(obj) {
	obj.picture.width = 250;
	obj.picture.height = 250;

}

function zoomOut(obj) {
	obj.picture.width = 150;
	obj.picture.height = 150;

}

function hover() {
	menu_items = document.getElementsByClassName("menu_item");
	for (let i = 0; i < menu_items.length; i++) {
		menu_items[i].addEventListener("mouseenter", e => bind_enter(e, i));
		menu_items[i].addEventListener("mouseleave", e => bind_leave(e, i));
	}
}

function bind_enter(event,index) {
	replace_item(menu_items[index]);
}

function bind_leave(event, index) {
	replace_item_back(menu_items[index]);
}

function replace_item(item) {
	const arr = item.src.split('/');
	const name = arr[arr.length - 1];
	const names = name.split('.')
	names[0] = names[0] + "_m";
	new_name = names.join('.');
	console.log(new_name);
	item.src = new_name;
	item.width = 330;
}

function replace_item_back(item) {
	const arr = item.src.split('/');
	const name = arr[arr.length - 1];
	names = name.split(".");
	names[0] = names[0].substring(0, names[0].length - 2);
	new_name = names.join('.');
	item.src = new_name;
	item.width = 250;
}
