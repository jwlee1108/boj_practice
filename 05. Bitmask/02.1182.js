var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('05. Bitmask/02.1182.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var N = +input[0].split(' ')[0];
var S = +input[0].split(' ')[1];
var numbers = input[1].split(' ');
var ix, jx, sum, count = 0;


for (ix = 1; ix < (1 << N); ix++) {
    sum = 0;

    for (jx = 0; jx < N; jx++) {
        if (!!(ix & (1 << jx))) {
            sum += (+numbers[jx]);
        }
    }

    if (sum === S) {
        count++;
    }
}

console.log(count);
