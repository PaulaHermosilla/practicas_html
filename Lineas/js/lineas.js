var margin = {top: 100, right: 200, bottom: 130, left: 100},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;


//Parseo de fecha
/*
var parseTime = 
*/

var svg = d3.select("#lineas").append("svg")
.attr("width", width + margin.left + margin.right+200)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
"translate(" + margin.left + "," + margin.top + ")");


// define las escalas
/*
var x = 
var y = 
var ...
*/

// calcula la línea
/*
var valueline = 

*/


// funciones para dibujar el grid
/*
function lineas_ref_x(){

}

function lineas_ref_y(){

}
*/

   // Cargamos los datos
   d3.csv("", function(error, data) {

   if (error) throw error;

   //formato de los datos
   data.forEach(function(d) {
       d.Date = parseTime(d.Date);
       d.Valor_1 = +d.Valor_1;
       d.Valor_2 = +d.Valor_2;

   });

   // ordenamos las fechas
   data.sort(function(a,b){
       return new Date(b.Date) - new Date(a.Date);
   });


   // anadir linea, puntos, titulo, subtitulo...


   
});



