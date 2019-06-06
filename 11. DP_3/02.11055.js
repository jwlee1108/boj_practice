var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02.11055.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var memo = [+arr[0]]
var ix, jx;

for (ix = 1; ix < len; ix++) {
    memo[ix] = +arr[ix];

    for (jx = ix - 1; jx >= 0; jx--) {
        if (+arr[ix] > +arr[jx]) {
            if (memo[ix] < +arr[ix] + memo[jx]) {
                memo[ix] = +arr[ix] + memo[jx];
            }
        }
    }
}

console.log(Math.max.apply(null, memo));
