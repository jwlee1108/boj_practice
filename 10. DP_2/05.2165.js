var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('./10. DP_2/05.2165.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix;
var wine = input.slice(1);
var memo = [];

memo[0] = [0, +wine[0], 0];


for (ix = 1; ix < wine.length; ix++) {
    if (!memo[ix]) {
        memo[ix] = [];
    }

    memo[ix][0] = Math.max.apply(null, memo[ix - 1]);
    memo[ix][1] = memo[ix - 1][0] + (+wine[ix]);
    memo[ix][2] = memo[ix - 1][1] + (+wine[ix]);
}

console.log(Math.max.apply(null, memo[+input[0] - 1]));
