console.log("teste");

function calcula30Potencia4(num){
	let result = num;
	for(i=30;i>0;i--){
		console.log(result);
		result = result * num;
	}
}

calcula30Potencia4(4);