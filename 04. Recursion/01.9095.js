var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/01.9095.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix, count, sum;
var caseCount = +input[0];

function calc123(count, sum, goal) {
    var ix, result = 0;

    if (sum > goal) {
        return 0;
    } else if (sum === goal) {
        return 1;
    } else {
        for (ix = 1; ix <= 3; ix++) {
            result += calc123(count + 1, sum + ix, goal);
        }

        return result;
    }
}

for (ix = 1; ix <= caseCount; ix++) {
    count = 0;
    sum = 0;

    if (+input[ix] < 11) {
        console.log(calc123(count, sum, +input[ix]));
    }
}

