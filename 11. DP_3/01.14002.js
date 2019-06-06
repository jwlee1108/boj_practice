var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('01.14002.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var memo = [1], value = [-1], result = [];
var ix, jx, count, maxP = 0, ans = memo[0];

for (ix = 1; ix < len; ix++) {
    count = 1;
    value[ix] = -1;

    for (jx = ix - 1; jx >= 0; jx--) {
        if (+arr[ix] > +arr[jx]) {
            if (count < 1 + memo[jx]) {
                count = 1 + memo[jx];
                value[ix] = jx;
            }
        }
    }

    memo[ix] = count;
}

for (ix = 0; ix < len; ix++) {
    if (ans < memo[ix]) {
        ans = memo[ix];
        maxP = ix;
    }
}

console.log(ans);

ix = maxP;

while (ix >= 0) {
    if (ix === -1) {
        break;
    }

    result.push(+arr[ix]);
    ix = value[ix];
}

console.log(result.reverse().join(' '));
