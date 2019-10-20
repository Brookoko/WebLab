function change_width(obj) {
	width_of_line = obj.width.value;
	obj.getElementsByTagName("hr")[0].width = width_of_line;
}

function send_data(obj){
	visited = Array();
	data = obj.getElementsByTagName("input");
	for(let item of data){
		if(!visited.includes(item.name)){
			if(item.type == "radio" && !item.checked){
				continue;
			} 
			else{
				visited.push(item.name);
				console.log(item.name, item.value);
			}
		}
	}
}