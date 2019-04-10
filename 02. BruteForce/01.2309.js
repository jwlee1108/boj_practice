var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02. BruteForce/01.2309.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


function checkHeightSum(fst, sec, input) {
    var sum = 0;
    var result = [];
    for (var i = 0; i < input.length; i++) {
        if (i !== fst && i !== sec) {
            result.push(+input[i]);
            sum += +input[i];
        }
    }
    return sum === 100 ? result : false;
}

function findRealDrawf(input) {
    var find;
    for (var i = 0; i < input.length - 1; i++) {
        for (var j = i + 1; j < input.length; j++) {
            find = checkHeightSum(i, j, input)

            if (find) {
                return find;
            }
        }
    }
}

var drawfList = findRealDrawf(input).sort(function(a, b) { return a - b;});
for (var i = 0; i < drawfList.length; i++) {
    console.log(drawfList[i]);
}


