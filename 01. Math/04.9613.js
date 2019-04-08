var path = require('path');
var input = require('fs').readFileSync(path.resolve('./04.9613.txt'), 'utf8').toString().trim().split('\n');
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
    var ans = 0;
    for (var j = 1; j < parsed.length - 1; j++) {
        for (var k = j + 1; k < parsed.length; k++) {
            ans += gcd(+parsed[j], +parsed[k]);
        }
    }
    console.log(ans);
}
