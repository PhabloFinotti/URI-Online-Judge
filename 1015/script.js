var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let linesBroke1 = lines.shift().split(' ')
let linesBroke2 = lines.shift().split(' ')

let x1 = parseFloat(linesBroke1.shift())
let y1 = parseFloat(linesBroke1.shift())

let x2 = parseFloat(linesBroke2.shift())
let y2 = parseFloat(linesBroke2.shift())

let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

console.log(distance.toFixed(4))