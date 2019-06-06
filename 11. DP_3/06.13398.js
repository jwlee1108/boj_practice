var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('06.13398.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var left = [+arr[0]], right = [];
var ix, ans;


for (ix = 1; ix < len; ix++) {
    left[ix] = Math.max(left[ix - 1] + +arr[ix], +arr[ix]);
}

right[len - 1] = +arr[len - 1];
for (ix = len - 2; ix >= 0; ix--) {
    right[ix] = Math.max(right[ix + 1] + +arr[ix], +arr[ix]);
}

ans = Math.max.apply(null, left);
for (ix = 1; ix < len - 1; ix++) {
    if (ans < left[ix - 1] + right[ix + 1]) {
        ans = left[ix - 1] + right[ix + 1];
    }
}

console.log(ans);
