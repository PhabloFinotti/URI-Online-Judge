var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let linesBroke = lines.shift().split(" ")
let a = parseInt(linesBroke.shift())
let b = parseInt(linesBroke.shift())
let c = parseInt(linesBroke.shift())

let maiorAB = (a + b +Math.abs(a-b)) / 2
let maiorFinal = (maiorAB + c +Math.abs(maiorAB- c)) / 2

console.log(maiorFinal + " eh o maior")