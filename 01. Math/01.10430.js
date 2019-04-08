var path = require('path');
var input = require('fs').readFileSync(path.resolve('./01.10430.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

var a = +input[0];
var b = +input[1];
var c = +input[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
