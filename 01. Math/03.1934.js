var path = require('path');
var input = require('fs').readFileSync(path.resolve('./03.1934.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var gcd = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

for (var i = 1; i < input.length; i++) {
    var parsed = input[i].split(' ');
    var a = +parsed[0];
    var b = +parsed[1];
    var g = gcd(a, b);
    console.log(g * (a / g) * (b / g));
}