var cadena = "Rincón de la Victoria";
//longitud de la cadena
//document.writeln(cadena.length);//muestra 21
//fragmento de cadena
//document.writeln("<br>" + cadena.substring(10));//Muestra "la Victoria"
// document.writeln("<br>" + cadena.substring(0,10));//Muestra "Rincón de"
//document.writeln("<br>" + cadena.substring(-8));//Muestra la cadena original porque tiene un valor negativo
//devuelve un caracter
//document.writeln("<br>" + cadena.charAt(5));//Muestra "n"
//une dos cadenas 
var cadena2 = "Málaga";
var cadena3 = "Málaga"
//document.writeln("<br>" + cadena.concat(cadena2));//Muestra "Rincón de la VictoriaMálaga"
//indexOf
 document.writeln("<br>" + cadena.indexOf("Rincón"));//Devuelve 0, porque la subcadena está dentro de la cadena
 document.writeln("<br>" + cadena.indexOf("V",0));//Devuelve 0, porque la subcadena está dentro de la cadena. Busca desde el índice 0
 document.writeln("<br>" + cadena.indexOf("Málaga"));//Devuelve -1, porque la subcadena no está dentro de la cadena
//replace
//document.writeln("<br>" + cadena.replace("Victoria", "árbol"));//muestra "Calle de la Victoria"
//Split - división de cadena en un array de cadenas
//document.writeln("<br>" + cadena.split(" "));//Devuelve un array de 4 elementos (cadenas)
//document.writeln("<br>" + cadena.split("a"));//Devuelve un array teniendo en cuenta las letras'a'
//document.writeln("<br>" + cadena.split(","));//Devuelve un array teniendo en cuenta las comas 
//document.writeln("<br>" + cadena.split(""));//Devuelve un array formado por todas las letras de la cadena
//ToLowerCase - devuelve la cadena en minúsculas
document.writeln("<br>" + cadena.toLowerCase());//Devuelve "rincón de la victoria"
//ToUpperCase - devuelve la cadena en mayúsculas
document.writeln("<br>" + cadena.toUpperCase());//Devuelve "RINCÓN DE LA VICTORIA "
var str = cadena.toUpperCase();
document.writeln(str);