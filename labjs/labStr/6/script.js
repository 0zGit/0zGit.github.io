var data = new Date("2001-05-30");
var dataAtual = new Date();

function contaDiasDeVida(data,dataAtual){
	console.log(data.toLocaleDateString());
	console.log(dataAtual.toLocaleDateString());

	let dias=0;
	let anos = dataAtual.getFullYear() - data.getFullYear();

	for(let j=data.getFullYear();j<=anos;j++){
		for(let k=data.getMonth();k<=12;k++){
			for(let i=data.getDate();i<=31;i++){
				dias += 1;
			}
		}
	}
	console.log(dias);
}

contaDiasDeVida(data,dataAtual);