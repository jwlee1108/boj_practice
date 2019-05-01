var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('06. NandM/06.15655.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function NM(index, start, N, M) {
    var ix;

    if (index === M) {
        console.log(result.join(' '));
        return;
    }

    for (ix = start; ix < N; ix++) {
        if (!check[ix]) {
            check[ix] = true;
            result[index] = numbers[ix];

            NM(index + 1, ix + 1, N, M);
            check[ix] = false;
        }
    }
}

var N = +input[0].split(' ')[0];
var M = +input[0].split(' ')[1];
var numbers = input[1].split(' ');
var ix, check = [], result = [];

for (ix = 0; ix < numbers.length; ix++) {
    numbers[ix] = +numbers[ix];
}

numbers.sort(function (a, b) { return a - b; });
NM(0, 0, N, M);
