var path = require('path');
var input = require('fs').readFileSync(path.resolve('03. Permutation/07.14888.txt'), 'utf8').toString().trim().split('\n');
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

function calc(a, b, op) {
    switch (op) {
        case 0:
            return a + b;
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a < 0 ? -Math.floor((-a) / b) : Math.floor(a / b);
    }
}

var cnt = +input[0];
var num = input[1].split(' ');
var op = input[2].split(' ');

var opArr = [];
var ix, jx, oc;
var min = 1000000000, max = -1000000000, result;

if (cnt >= 2 && cnt <= 11) {
    for (ix = 0; ix < op.length; ix++) {
        oc = +op[ix];
        for (jx = 0; jx < oc; jx++) {
            opArr.push(ix);
        }
    }

    do {
        result = 0;
        for (ix = 0; ix < num.length - 1; ix++) {
            if (!ix) {
                result = calc(+num[ix], +num[ix + 1], opArr[ix]);
            } else {
                result = calc(result, +num[ix + 1], opArr[ix]);
            }
        }

        min = Math.min(min, result);
        max = Math.max(max, result);
    } while(nextPermutation(opArr, cnt - 1));

    console.log(max);
    console.log(min);
}

