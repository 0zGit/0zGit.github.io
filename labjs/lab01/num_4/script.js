console.log("teste");

function imprime100Fibo(){
	let An,A0=0,A1=1;
	for(i=0;i<100;i++){
		An = A0 + A1;
		A0 = A1;
		A1 = An;
		console.log(An);
	}
}

imprime100Fibo();