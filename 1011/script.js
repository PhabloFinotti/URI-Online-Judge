var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseInt(input)
var pi = 3.14159

var volume = (4.0/3) * pi * Math.pow(raio, 3)

console.log("VOLUME = " + volume.toFixed(3))