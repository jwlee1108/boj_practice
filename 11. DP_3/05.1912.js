var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('05.1912.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var memo = [+arr[0]];
var ix;


for (ix = 1; ix < len; ix++) {
    memo[ix] = Math.max(memo[ix - 1] + +arr[ix], +arr[ix]);
}

console.log(Math.max.apply(null, memo));
