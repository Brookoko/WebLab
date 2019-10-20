function calculator(obj) {
	data = obj.getElementsByTagName('input'); // all inputs in this form.
	for(item of data){
		item.addEventListener('click', e => bind(e, obj, data));
	}
}

function getItemsCost(data){
	visited = new Array();
	total_cost = 0;
	for(let item of data){
		if(item.type == 'radio' && !item.checked){continue;} // if button not clicked skip 
		else if(item.type == 'checkbox' && !item.checked){continue;} // if button not checked skip
		else {
			visited.push(item.name);
			total_cost += Number(item.value);
		}
	}
	return(total_cost);
}

function bind(event, obj, data){
	obj.result.value = getItemsCost(data)
}