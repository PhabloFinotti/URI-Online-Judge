var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())
var hours = parseInt(lines.shift())
var perHour = parseFloat(lines.shift())

var salary = hours * perHour

console.log("NUMBER = " +number + "\n" + "SALARY = U$ " + salary.toFixed(2))