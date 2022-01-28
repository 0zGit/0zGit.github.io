console.log("aeiou");

function inverteFrase(){
	var frase = "A cara rajada da jararaca";
	var fraseInvertida;

	for(let i = frase.length;i>=0;i--){
		fraseInvertida += frase[i];
	}
	return fraseInvertida;
}
console.log(inverteFrase());