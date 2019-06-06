var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('07.1699.txt'), 'utf8').toString().trim();
// var input = require('fs').readFileSync('/dev/stdin').toString().trim();

var ix, jx;
var memo = [0];

for (ix = 1; ix <= input; ix++) {
    memo[ix] = ix;

    for (jx = 1; jx * jx <= ix; jx++) {
        if (memo[ix] > (memo[ix - (jx * jx)] + 1)) {
            memo[ix] = memo[ix - (jx * jx)] + 1;
        }
    }
}

console.log(memo[input]);
