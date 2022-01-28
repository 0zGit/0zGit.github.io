console.log("aeiou");

var frase = "Lá vou eu em meu eu oval";
var vogais = "AEIOUaeiouá";
var letra; 

function isVogal(letra){
	for(let i = vogais.length;i>=0;i--) if(letra == vogais[i]) return true;
	else return false;
}

function manipulaFrase(frase){
	var fraseVogal;

	for(let i = frase.length;i>=0;i--) if(isVogal(frase[i])) fraseVogal += frase[i].bold();

	return fraseVogal;
}

console.log(manipulaFrase(frase));