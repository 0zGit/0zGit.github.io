console.log("teste");

function somaParesPositivos1000(){
	let max,result=0;
	for(max=1000;max>0;max--){
		if(max%2 == 0){
			result += max;
			console.log(result);
		}
	}
}

somaParesPositivos1000();