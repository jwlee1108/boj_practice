var path = require('path');
var input = require('fs').readFileSync(path.resolve('09. DP_1/04.9095.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function sum123(n) {
    var ix;

    for (ix = 4; ix <= n; ix++) {
        memo[ix] = (memo[ix - 1] + memo[ix - 2] + memo[ix - 3]) % 1000000009;
    }

    return memo[n];
}

var memo = [0, 1, 2, 4];
var tc = +input[0];
var ix;

for (ix = 0; ix < tc; ix++) {
    console.log(sum123(+input[ix + 1].trim()));
}

