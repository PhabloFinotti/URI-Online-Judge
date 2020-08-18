var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// X = distance
let X = parseInt(lines.shift())

// Y = gas
let Y = parseFloat(lines.shift())

let consume = X / Y

console.log(consume.toFixed(3) + " km/l")