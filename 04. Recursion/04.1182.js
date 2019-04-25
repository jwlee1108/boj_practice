var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/04.1182.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function sumOfSubset(index, sum) {
    if (index === numbers.length) {
        if (sum === S) {
            count[0]++;
        }
        return;
    }

    sumOfSubset(index + 1, sum + (+numbers[index]));
    sumOfSubset(index + 1, sum);
}

var S = +input[0].split(' ')[1];
var numbers = input[1].split(' ');
var count = [0];

sumOfSubset(0, 0);
if (S === 0) {
    count[0]--;
}
console.log(count[0]);