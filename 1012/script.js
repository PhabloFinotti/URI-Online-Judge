var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var values = lines.shift().split(" ")

var a = parseFloat(values.shift())
var b = parseFloat(values.shift())
var c = parseFloat(values.shift())
var pi = 3.14159

var areaTriangulo = (a * c) / 2
var areaCirculo =  pi * Math.pow(c, 2)
var areaTrapezio = ((a + b) * c) / 2
var areaQuadrado = b * b
var areaRetangulo = a * b

console.log("TRIANGULO: " + areaTriangulo.toFixed(3) +"\nCIRCULO: "+areaCirculo.toFixed(3)+"\nTRAPEZIO: "+areaTrapezio.toFixed(3)+"\nQUADRADO: " +areaQuadrado.toFixed(3)+"\nRETANGULO: "+areaRetangulo.toFixed(3))