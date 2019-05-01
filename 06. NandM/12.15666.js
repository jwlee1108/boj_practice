var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('06. NandM/12.15666.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function NM(index, start, N, M) {
    var ix;

    if (index === M) {
        output.push(result.join(' '));
        return;
    }

    for (ix = start; ix < N; ix++) {
        result[index] = uniqNumbers[ix];
        NM(index + 1, ix, N, M);
    }
}


var M = +input[0].split(' ')[1];
var numbers = input[1].split(' ');
var uniqNumbers = [];
var ix, output = [], result = [];

for (ix = 0; ix < numbers.length; ix++) {
    numbers[ix] = +numbers[ix];
}

numbers.sort(function (a, b) { return a - b; });

for (ix = 0; ix < numbers.length; ix++) {
    if (!ix) {
        uniqNumbers.push(numbers[ix]);
    } else if (numbers[ix - 1] !== numbers[ix]) {
        uniqNumbers.push(numbers[ix]);
    }
}
NM(0, 0, uniqNumbers.length, M);
console.log(output.join('\n'));