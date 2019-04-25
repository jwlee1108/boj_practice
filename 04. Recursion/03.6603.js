var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/03.6603.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function lotto(s, idx, cnt, n) {

    if (cnt === 6) {
        console.log(n.join(' '));
        return;
    }

    if (idx === s.length) {
        return;
    }

    n.push(s[idx]);
    lotto(s, idx + 1, cnt + 1, n);
    n.pop();
    lotto(s, idx + 1, cnt, n);
}

var ix, jx;
var numbers, k, s, choice = [];

for (ix = 0; ix < input.length; ix++) {
    numbers = input[ix].split(' ');

    k = +numbers[0];

    if (k > 6 && k < 13) {
        choice.length = 0;
        s = numbers.splice(1, numbers.length);

        for (jx = 0; jx < k; jx++) {
            choice.push(jx < 6 ? 0 : 1);
        }

        lotto(s, 0, 0, []);
        console.log('');
    }
}
