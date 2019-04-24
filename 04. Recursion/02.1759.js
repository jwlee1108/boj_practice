var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/02.1759.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function checkRule(password) {
    var ix;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var cc = 0, vc = 0; // 자음 모음
    var pass = password.split('');

    for (ix = 0; ix < pass.length; ix++) {
        if (vowels.indexOf(pass[ix]) > -1) {
            vc++;
        } else {
            cc++;
        }
    }

    return !!(cc >= 2 && vc >= 1);
}

function makePassword(L, charset, password, ix) {
    if (password.length === L) {
        if (checkRule(password)) {
            console.log(password);
        }
        return;
    }

    if (ix < charset.length) {
        makePassword(L, charset, password + charset[ix], ix + 1);
        makePassword(L, charset, password, ix + 1);
    }
}

var L = +input[0].split(' ')[0], C = +input[0].split(' ')[1];
var charset = input[1].trim().split(' ').sort(function(a, b) { return a < b ? -1 : 1; });
makePassword(L, charset, '', 0);

