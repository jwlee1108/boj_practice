var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('./10. DP_2/06.11053.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var memo = [1];
var ix, jx, count;

for (ix = 1; ix < len; ix++) {
    count = 1;

    for (jx = ix - 1; jx >= 0; jx--) {
        if (+arr[ix] > +arr[jx]) {
            count = Math.max(count, 1 + memo[jx]);
        }
    }

    memo[ix] = count;
}

console.log(Math.max.apply(null, memo));
