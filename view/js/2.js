function dlt(obj) {
	x1 = obj.x1.value;
	x2 = obj.x2.value;
	x3 = obj.x3.value;
	y1 = obj.y1.value;
	y2 = obj.y2.value;
	y3 = obj.y3.value;
	delta = (x1 - x3) * (y2 - y3) - (y1 - y3) * (x2 - x3);
	return(delta);
}


function area(obj) {
	obj.res.value = Math.abs(0.5 * dlt(obj))
}

function len(obj){
	obj.res.value = Math.sqrt(Math.pow(obj.x1.value,2)+ Math.pow(obj.y1.value,2));
}

function swap_var(obj) {
	t = obj.x2.value;
	obj.x2.value = obj.x1.value;
	obj.x1.value = t;
}

