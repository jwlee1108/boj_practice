var path = require('path');
var input = require('fs').readFileSync(path.resolve('09. DP_1/08.15990.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var memo = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1]];
var tc = +input[0];
var ix;

for (ix = 4; ix <= 100000; ix++) {
    if (!memo[ix]) {
        memo[ix] = [];
    }

    memo[ix][0] = (memo[ix - 1][1] + memo[ix - 1][2]) % 1000000009;
    memo[ix][1] = (memo[ix - 2][0] + memo[ix - 2][2]) % 1000000009;
    memo[ix][2] = (memo[ix - 3][0] + memo[ix - 3][1]) % 1000000009;

}

for (ix = 1; ix <= tc; ix++) {
    console.log((memo[+input[ix]][0] + memo[+input[ix]][1] + memo[+input[ix]][2]) % 1000000009);
}

