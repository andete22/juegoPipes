var matrizIntermedia = new Array(x);
var x, y;
var name;

function rotar(yo, i, j){
	var s = yo.src;
	s = s.substring(s.length-4, s.length-8);
	var n = s[3]+""+s[0]+""+s[1]+""+s[2];
	yo.src = "fichas/" + n + ".png";
	matrizIntermedia[i][j] = n;
	comprobar();
}

function crearTablero(){
	tiempo();
	x = document.getElementById("px").value;
	y = document.getElementById("py").value;
	name = document.getElementById("name").value;



	var num;
	for (var i = 0; i < x ; i++){
		matrizIntermedia[i] = new Array(x);
		for (var j = 0; j < y ; j++){
			var n0 = Math.floor((Math.random() * 2));
			var n1 = Math.floor((Math.random() * 2));
			var n2 = Math.floor((Math.random() * 2));
			var n3 = Math.floor((Math.random() * 2));
			if(j == 0){
				n3 = 0;
			}
			if(i == 0){
				n0 = 0;
			}
			if(j == y-1){
				n1 = 0;
			}
			if(i == x-1){
				n2 = 0;
			}
			if (j > 0)
				n3 = matrizIntermedia[i][j-1][1];
			if (i > 0)
				n0 = matrizIntermedia[i-1][j][2];
			matrizIntermedia[i][j] = n0+""+n1+""+n2+""+n3;
		}

	}
	desordenarMatriz();
	dibujarMatriz();
}

function tiempo(){
	var num = 0;
	var time = document.getElementById('time');
	window.setInterval(function(){
		num += 1;
		time.innerHTML = num;
	},1000);
}
function desordenarMatriz(){
	var n = 0;
	for (var i = 0; i < x ; i++){
		for (var j = 0; j < y ; j++){
			var s = matrizIntermedia[i][j];
			
			switch(Math.floor((Math.random() * 4))) {
				case 0:
				matrizIntermedia[i][j] =  s[3]+""+s[0]+""+s[1]+""+s[2];
				break;
				case 1:
				matrizIntermedia[i][j] =  s[2]+""+s[3]+""+s[0]+""+s[1];
				break;
				case 2:
				matrizIntermedia[i][j] =  s[1]+""+s[2]+""+s[3]+""+s[0];
				break;
				case 3:
				matrizIntermedia[i][j] =  s[0]+""+s[1]+""+s[2]+""+s[3];
				break;
				default:
				matrizIntermedia[i][j] =  s[3]+""+s[0]+""+s[1]+""+s[2];
			} 
		}
	}
}
function dibujarMatriz(){
	var cadena = '';
	var juego = document.getElementById('juego');
	for (var i = 0; i < x ; i++){
		for (var j = 0; j < y ; j++){
			cadena += "<img src='fichas/"+matrizIntermedia[i][j]+".png' onclick='javascript:rotar(this,"+i+","+j+")'/>";
		}
		cadena += "<br/>";
	}
	juego.innerHTML = cadena;
}

function comprobar(){
	var perfecto = true;
	for (var i = 0; i < x && perfecto; i++){
		for (var j = 0; j < y && perfecto; j++){
			if(j == 0 && matrizIntermedia[i][j][3] == "1"){
				perfecto = false;
			}
			if(i == 0 && matrizIntermedia[i][j][0] == "1"){
				perfecto = false;
			}
			if (j > 0)
				if(matrizIntermedia[i][j][3] != matrizIntermedia[i][j-1][1]){
					perfecto = false;
				}
			if (i > 0)
				if(matrizIntermedia[i][j][0] != matrizIntermedia[i-1][j][2]){
					perfecto = false;
				}
		}
	}
	if(perfecto){
		var time = document.getElementById('time').innerHTML;
		location.href = "fin.php?name=" + name + "&time=" + time + "&dx=" + x + "&dy=" + y;
	}
}