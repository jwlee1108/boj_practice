var path = require('path');
var input = require('fs').readFileSync(path.resolve('./06.1929.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

var from = +input[0];
var to = +input[1];
var check = new Array(to + 1);

var i, j;

check[0] = true;
check[1] = true;

for (i = 2; i <= to; i++) {
    if (!check[i]) {
        for (j = i * 2; j <= to; j += i) {
            check[j] = true;
        }
    }
}

for (i = from; i <= to; i++) {
    if (!check[i]) {
        console.log(i);
    }
}