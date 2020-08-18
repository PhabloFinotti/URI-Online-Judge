var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infoItem1 = lines.shift().split(" ")
var infoItem2 = lines.shift().split(" ")

var codigo1 = parseInt(infoItem1.shift())
var quant1 = parseInt(infoItem1.shift())
var valor1 = parseFloat(infoItem1.shift()) * quant1

var codigo2 = parseInt(infoItem2.shift())
var quant2 = parseInt(infoItem2.shift())
var valor2 = parseFloat(infoItem2.shift()) * quant2

console.log("VALOR A PAGAR: R$ " + (valor1 + valor2).toFixed(2))