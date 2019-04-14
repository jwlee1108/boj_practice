var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02. BruteForce/04.9095.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function calcSum(n) {
    var ans = 0;

    for (var l1 = 1; l1 <= 3; l1++) {
        if (l1 === n) {
            ans += 1;
        }
        for (var l2 = 1; l2 <= 3; l2++) {
            if (l1 + l2 === n) {
                ans += 1;
            }
            for (var l3 = 1; l3 <= 3; l3++) {
                if (l1 + l2 + l3 === n) {
                    ans += 1;
                }
                for (var l4 = 1; l4 <= 3; l4++) {
                    if (l1 + l2 + l3 + l4 === n) {
                        ans += 1;
                    }
                    for (var l5 = 1; l5 <= 3; l5++) {
                        if (l1 + l2 + l3 + l4 + l5 === n) {
                            ans += 1;
                        }
                        for (var l6 = 1; l6 <= 3; l6++) {
                            if (l1 + l2 + l3 + l4 + l5 + l6 === n) {
                                ans += 1;
                            }
                            for (var l7 = 1; l7 <= 3; l7++) {
                                if (l1 + l2 + l3 + l4 + l5 + l6 + l7 === n) {
                                    ans += 1;
                                }
                                for (var l8 = 1; l8 <= 3; l8++) {
                                    if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 === n) {
                                        ans += 1;
                                    }
                                    for (var l9 = 1; l9 <= 3; l9++) {
                                        if (l1+l2+l3+l4+l5+l6+l7+l8+l9 === n) {
                                            ans += 1;
                                        }
                                        for (var l0=1; l0<=3; l0++) {
                                            if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l0 === n) {
                                                ans += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(ans);
}

for (var ix = 1; ix <= input.length; ix++) {
    if (+input[ix] < 11) {
        calcSum(+input[ix]);
    }
}