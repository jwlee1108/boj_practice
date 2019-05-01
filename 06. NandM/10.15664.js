var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('06. NandM/10.15664.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function NM(index, start, N, M) {
    var ix;

    if (index === M) {
        console.log(result.join(' '));
        return;
    }

    for (ix = start; ix < N; ix++) {
        if (count[ix] > 0) {
            count[ix]--;
            result[index] = uniqNumbers[ix];
            NM(index + 1, ix, N, M);
            count[ix]++
        }
    }
}

var N = +input[0].split(' ')[0];
var M = +input[0].split(' ')[1];
var numbers = input[1].split(' ');
var uniqNumbers = [], count = [];
var ix, result = [];

for (ix = 0; ix < numbers.length; ix++) {
    numbers[ix] = +numbers[ix];
}

numbers.sort(function (a, b) { return a - b; });

for (ix = 0; ix < numbers.length; ix++) {
    if (!ix) {
        uniqNumbers.push(numbers[ix]);
        count[uniqNumbers.length - 1] = 1;
    } else if (numbers[ix - 1] !== numbers[ix]) {
        uniqNumbers.push(numbers[ix]);
        count[uniqNumbers.length - 1] = 1;
    } else {
        count[uniqNumbers.indexOf(numbers[ix])] += 1;
    }
}

NM(0, 0, N, M);
