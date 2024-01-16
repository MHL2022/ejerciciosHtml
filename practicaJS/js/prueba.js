
//1.creamos array
var colores = new Array(10);

//2.creamos array
var colores2;
colores2 = new Array(10);
colores2 [9] = "negro";
colores2 [0] = "rojo";
colores2 [2] = "azul";
colores2 [5] = "rosa";

//3.creamos array
var diasSemana = new Array("lunes", "martes", "miércoles");

//4.creamos array

var numeros = [1, 2, 3, 4];

//Sacamos por pantalla colores2
for (var i= 0; i < 2; i++) {
    document.writeln(colores2[i] + "<br>");   
}
for (var i= 0; i < colores2.length; i++) {
    document.writeln(colores2[i] + "<br>");   
}

document.writeln("<br>");
document.writeln(colores2[5]);

