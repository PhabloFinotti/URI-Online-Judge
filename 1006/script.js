var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var A = parseFloat(lines.shift()) * 2
var B = parseFloat(lines.shift()) * 3
var C = parseFloat(lines.shift()) * 5

var media = (A + B + C) / 10

console.log("MEDIA = " + media.toFixed(1))