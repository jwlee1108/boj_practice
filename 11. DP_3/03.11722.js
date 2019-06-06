var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('03.11722.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var memo = [];
var ix, jx;


for (ix = len - 1; ix >= 0; ix--) {
    memo[ix] = 1;

    for (jx = ix + 1; jx < len; jx++) {
        if (+arr[ix] > +arr[jx]) {
            memo[ix] = Math.max(memo[ix], 1 + memo[jx]);
        }
    }
}

console.log(Math.max.apply(null, memo));
