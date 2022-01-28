console.log("aeiou");

var frase = "Anotaram a data da maratona.";
var palavraList = frase.split(" ");

function removeDigEspeciais(palavra){
	let palavraLimpa = "";
	if('.,;:!@#$%&*(){}[]'.indexOf(palavra.charAt(0)) == 0) palavraLimpa = palavra.substring(1,-1);
	else palavraLimpa = palavra;
	if('.,;:!@#$%&*(){}[]'.indexOf(palavra.charAt(palavra.length-1)) != -1) palavra = palavra.substring(0,palavra.length-2);

	return palavraLimpa;
}

function buscaPalavraEmOcorrencia(palavra,lista){
	for(let i = 0; i<lista.length; i++){
		let ocorrencia = lista[i];
		if (palavra.toLowerCase() == ocorrencia.palavra.toLowerCase()){
			return i;
		}
	}
	return -1;
}

function contaPalavras(palavraList){
	let ocorrenciaArray = [];

	let palavrasLimpasArray = [] ;

	for(palavra in palavraList) removeDigEspeciais(palavra);

	for(palavra in palavraList){
		let indice = buscaPalavraEmOcorrencia(palavra,ocorrenciaArray);
		if(indice!=-1){
			ocorrenciaArray[indice].ocorrencia++;
		}
		else{
			ocorrenciaArray.push({palavra:palavra,ocorrencia:1});
		}
	}


	for(termo in ocorrenciaArray){
		console.log(`Termo: ${termo.palavra} - ${termo.ocorrencia}`);
	}
}

contaPalavras(palavraList);