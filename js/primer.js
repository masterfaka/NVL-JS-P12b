//Asumiendo que Math.floor((Math.random() * 100) + 1); 
//saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:
/*Saca 50 números al azar entre 1 y 100
Almacena los números que salgan impares en un array impares
Almacena los números que salgan pares en un array pares*/
//lo mismo pero con funcs
var pares=new Array();
var impares=new Array();
var sacarandom=function(){
	return Math.floor(Math.random()*100)+1;
}
var eligenum=function (a ,b) {
	for (var i = 0; i <= 50; i++) {
		var res=sacarandom();
		if ((res%2)==0) {
			//par
			a.push(res);
		} else {
			b.push(res);
		}
	}
}
eligenum(pares, impares);
	console.log("numeros pares: "+pares);
	console.log("numeros impares: "+impares);