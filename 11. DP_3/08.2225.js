var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08.2225.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

var ix, jx, kx;
var n = +input[0], k = +input[1]; // 20 2
var memo = [];

for (ix = 0; ix <= k; ix++) {
    memo[ix] = [];
    for (jx = 0; jx <= n; jx++) {
        memo[ix][jx] = 0;
    }
}

memo[0][0] = 1;
for (ix = 1; ix <= k; ix++) {
    for (jx = 0; jx <= n; jx++) {
        for (kx = 0; kx <= jx; kx++) {
            memo[ix][jx] += memo[ix - 1][jx - kx];
            memo[ix][jx] %= 1000000000;
        }
    }
}

console.log(memo[k][n]);
