// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    var ix, g = [], max = 0;
    var revBin = convertRevertBinary(N).split('');


    for (ix = 0; ix < revBin.length; ix++) {
        if (revBin[ix] > 0) {
            g.push(ix);
        }
    }

    if (g.length >= 2) {
        for (ix = 0; ix < g.length - 1; ix++) {
            max = Math.max((g[ix + 1] - g[ix] - 1), max);
        }
    }

    return max;
}

function convertRevertBinary(N) {
    var d = N, r;
    var bin = '';


    while (Math.floor(d / 2) > 0) {
        r = d % 2;
        d = Math.floor(d / 2);

        bin += (r + '');
    }

    bin += '1';

    return bin;
}