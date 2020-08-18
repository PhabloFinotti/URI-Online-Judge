var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salary = parseFloat(lines.shift())
var vendas = parseFloat(lines.shift()) * 0.15

var salarioFinal = salary + vendas

console.log("TOTAL = R$ " + salarioFinal.toFixed(2))