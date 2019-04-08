var path = require('path');
var input = require('fs').readFileSync(path.resolve('./02.2609.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

var a = +input[0];
var b = +input[1];

var gcd = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

var g = gcd(a, b);
console.log(g);
console.log(g * (a / g) * (b / g));