var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('03.2193.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var num = +input[0];
var ix, memo = [null, [0, 1]];

for (ix = 2; ix <= num; ix++) {
    if (!memo[ix]) {
        memo[ix] = [];
    }
    memo[ix][0] = memo[ix - 1][0] + memo[ix - 1][1];
    memo[ix][1] = memo[ix - 1][0];
}

console.log(memo[num][0] + memo[num][1]);
