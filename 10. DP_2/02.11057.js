var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02.11057.txt'), 'utf8').toString().trim().split('');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var num = +input[0];
var ix, jx, kx, memo = [null, []], result = 0;

for (ix = 0; ix <= 9; ix++) {
    memo[1][ix] = 1;
}

for (ix = 2; ix <= num; ix++) {
    if (!memo[ix]) {
        memo[ix] = [];
    }

    for (jx = 0; jx <= 9; jx++) {
        memo[ix][jx] = 0;
        for (kx = 0; kx <= jx; kx++) {
            memo[ix][jx] += memo[ix - 1][kx];
            memo[ix][jx] %= 10007;
        }
    }
}

for (ix = 0; ix <= 9; ix++) {
    result += memo[num][ix];
}

console.log(result % 10007);
