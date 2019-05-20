var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('09. DP_1/03.11727.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function makeTile(n) {
    var ix;

    memo[1] = 1;
    memo[2] = 3;
    for (ix = 3; ix <= n; ix++) {
        memo[ix] = ((2 * memo[ix - 2]) + memo[ix - 1]) % 10007;
    }

    return memo[n];
}

var memo = [];
console.log(makeTile(+input[0]));
