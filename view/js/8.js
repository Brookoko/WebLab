function reverse(obj) {
	text = obj.number.value;
	res = "";
	for (var i = text.length - 1; i >= 0; i--) {
		res += text[i];
	}
	obj.result.value = res;
	
}

const allLucky = form => {
	let count = 0;
	for (let i = 0; i < 1000000; i++) {
		let num = i + '';
		num = num.padStart(6, '0');
		if (isLucky(num)) count++;
	}
	form.result.value = count;
};


function isLucky(ticket_number){
	const first = ticket_number.substr(0, 3);
	const second = ticket_number.substr(3, 3);
	return first.split('').reduce((a,b) => Number(a) + Number(b)) == second.split('').reduce((a,b) => Number(a) + Number(b));
}

function isCorrect(ticket_number){
	ticket_number = +ticket_number;
	if(ticket_number.length != 6) return false;
	if(ticket_number == NaN) return false;
	return true;
}

function delimiters(form){
	let number = Number(form.num.value);
	let ul = form.getElementsByTagName('ul')[0];
	ul.innerHTML = '';
	for(let i = 1; i <= number; i++){
		if(number % i == 0){
			li = document.createElement('li');
			li.appendChild(document.createTextNode(`${i}`));
			ul.appendChild(li);
		}
	}
}