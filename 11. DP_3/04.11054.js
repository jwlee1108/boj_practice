var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04.11054.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var len = +input[0], arr = input[1].trim().split(' ');
var increase = [], decrease = [];
var ix, jx, ans = 0;


for (ix = 0; ix < len; ix++) {
    increase[ix] = 1;

    for (jx = ix - 1; jx >= 0; jx--) {
        if (+arr[ix] > +arr[jx]) {
            increase[ix] = Math.max(increase[ix], 1 + increase[jx]);
        }
    }
}

for (ix = len - 1; ix >= 0; ix--) {
    decrease[ix] = 1;

    for (jx = ix + 1; jx < len; jx++) {
        if (+arr[ix] > +arr[jx]) {
            decrease[ix] = Math.max(decrease[ix], 1 + decrease[jx]);
        }
    }
}

for (ix = 0; ix < len; ix++) {
    if (ans < increase[ix] + decrease[ix] - 1) {
        ans = increase[ix] + decrease[ix] - 1;
    }
}

console.log(ans);
