var path = require('path');
var input = require('fs').readFileSync(path.resolve('01. Math/07.6588.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var maxValue = 1000000;
var check = new Array(maxValue + 1);

var i, j, k,
    p, value;

check[0] = true;
check[1] = true;

for (i = 2; i <= maxValue; i++) {
    if (!check[i]) {
        for (j = i * 2; j <= maxValue; j += i) {
            check[j] = true;
        }
    }
}

for (i = 0; i < input.length; i++) {
    value = +input[i];

    if (value > 0 && value % 2 === 0) {
        for (j = 3; j <= value; j+= 2) {
            if (!check[j]) {
                p = j;

                if (!check[value - p]) {
                    console.log(value + ' = ' + p + ' + ' + (value - p));
                    break;
                }
            }
        }
    }
}
