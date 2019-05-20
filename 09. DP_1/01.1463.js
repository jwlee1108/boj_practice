var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('09. DP_1/01.1463.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function makeOneTopDown(n) {
    if (n === 1) {
        return 0;
    }

    if (memo[n] > 0) {
        return memo[n];
    }

    memo[n] = makeOne(n - 1) + 1;

    if (n % 2 === 0) {
        memo[n] = Math.min(makeOne(n / 2) + 1, memo[n]);
    }

    if (n % 3 === 0) {
        memo[n] = Math.min(makeOne(n / 3) + 1, memo[n]);
    }

    return memo[n];
}

function makeOneBottomUp(n) {
    var ix;

    memo[1] = 0;
    for (ix = 2; ix <= n; ix++) {
        memo[ix] = memo[ix - 1] + 1;

        if (ix % 2 === 0 && memo[ix] > memo[ix / 2] + 1) {
            memo[ix] = memo[ix / 2] + 1;
        }

        if (ix % 3 === 0 && memo[ix] > memo[ix / 3] + 1) {
            memo[ix] = memo[ix / 3] + 1;
        }
    }

    return memo[n];
}

var memo = [];
console.log(makeOneBottomUp(+input[0]));
