var path = require('path');
var input = require('fs').readFileSync(path.resolve('03. Permutation/06.6603.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function nextPermutation(p, n) {
    var ix = n - 1;
    while (ix > 0 && +p[ix - 1] >= +p[ix]) {
        ix -= 1;
    }

    if (ix <= 0) {
        return false;
    }

    var jx = n - 1;
    while (+p[jx] <= +p[ix - 1]) {
        jx -= 1;
    }
    swap(p, ix - 1, jx);
    jx = n - 1;
    while (ix < jx) {
        swap(p, ix, jx);
        ix += 1;
        jx -= 1;
    }
    return true;
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function lotto(choice, k, s) {
    var ix;
    var result = [];

    do {
        result.length = 0;
        for (ix = 0; ix < choice.length; ix++) {
            if (!choice[ix]) {
                result.push(+s[ix]);
            }
        }

        console.log(result.join(' '));
    } while(nextPermutation(choice, k));
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

        lotto(choice, k, s);
        console.log('');
    }
}
