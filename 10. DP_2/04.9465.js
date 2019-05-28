var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('./10. DP_2/04.9465.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


var tc = +input[0], n;
var cursor, ix, jx;
var row1, row2;
var memo = [];


for (ix = 0; ix < tc; ix++) {
    cursor = (ix * 3) + 1;
    memo.length = 0;

    n = +input[cursor].trim();
    row1 = input[cursor + 1].trim().split(' ');
    row2 = input[cursor + 2].trim().split(' ');

    memo[0] = [];
    memo[0][0] = 0;
    memo[0][1] = +row1[0];
    memo[0][2] = +row2[0];

    for (jx = 1; jx < n; jx++) {
        if (!memo[jx]) {
            memo[jx] = [];
        }

        memo[jx][0] = Math.max.apply(null, memo[jx - 1]);
        memo[jx][1] = Math.max(memo[jx - 1][0], memo[jx - 1][2]) + (+row1[jx]);
        memo[jx][2] = Math.max(memo[jx - 1][0], memo[jx - 1][1]) + (+row2[jx]);
    }

    console.log(Math.max.apply(null, memo[n - 1]));
}
