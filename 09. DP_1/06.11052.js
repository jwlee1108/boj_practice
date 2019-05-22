var path = require('path');
var input = require('fs').readFileSync(path.resolve('09. DP_1/06.11052.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function buyCards(n) {
    var ix, jx;

    for (ix = 1; ix <= n; ix++) {
        for (jx = 1; jx <= ix; jx++) {
            memo[ix] = Math.max(pack[jx] + memo[ix - jx], (memo[ix] || 0));
        }

        if (ix === n) {
            return memo[n];
        }
    }

    return 0;
}

var memo = [0], pack = [0];
var card = +input[0], pay = input[1].split(' ');
var ix;

for (ix = 1; ix <= card; ix++) {
    pack[ix] = +pay[ix - 1];
}

console.log(buyCards(card));
