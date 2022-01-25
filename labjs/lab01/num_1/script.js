console.log("teste");

function fatorial(num){
	let result = num;
	if(num == 0) console.log(1);
	else if(num < 0) console.log("Parâmetro inválido");
	else{
		while(num!=0){
			console.log(result);
			result = result * (num-1);
			num -= 1;
		}
	}
}

fatorial(12);