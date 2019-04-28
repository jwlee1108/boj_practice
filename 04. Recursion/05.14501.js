var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/05.14501.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0];
var T = [], P = [], row;
var ix, max = 0;

for (ix = 1; ix < input.length; ix++) {
    row = input[ix].split(' ');
    T.push(+row[0]);
    P.push(+row[1]);
}

function goodBye(day, sum) {
    if (day > N) {
        return;
    }

    if (day === N) {
        max = Math.max(max, sum);
        return;
    }

    goodBye(day + T[day], sum + P[day]);
    goodBye(day + 1, sum);
}

goodBye(0, 0);
console.log(max);