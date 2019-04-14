var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02. BruteForce/03.14500.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var size;
var a = [], row;
var ix, jx, n, m, temp, temp2;
var ans = 0;

size = input[0].split(' ');
n = size[0];
m = size[1];

for (ix = 0; ix < n; ix++) {
    if (!a[ix]) {
        a[ix] = [];
    }
    row = input[ix + 1].split(' ');
    for (jx = 0; jx < m; jx++) {
        a[ix][jx] = +row[jx];
    }
}

for (ix = 0; ix < n; ix++) {
    for (jx = 0; jx < m; jx++) {
        if (jx + 3 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix][jx + 2] + a[ix][jx + 3];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 3 < n) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 2][jx] + a[ix + 3][jx];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 1 < n && jx + 2 < m) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 1][jx + 1] + a[ix + 1][jx + 2];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx + 1 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix + 1][jx] + a[ix + 2][jx];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 1 < n && jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix][jx + 2] + a[ix + 1][jx + 2];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx - 1 >= 0) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 2][jx] + a[ix + 2][jx - 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix - 1 >= 0 && jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix][jx + 2] + a[ix - 1][jx + 2];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx + 1 < m) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 2][jx] + a[ix + 2][jx + 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 1 < n && jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix][jx + 2] + a[ix + 1][jx];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx + 1 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix + 1][jx + 1] + a[ix + 2][jx + 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 1 < n && jx + 1 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix + 1][jx] + a[ix + 1][jx + 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix - 1 >= 0 && jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix - 1][jx + 1] + a[ix - 1][jx + 2];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx + 1 < m) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 1][jx + 1] + a[ix + 2][jx + 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 1 < n && jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix + 1][jx + 1] + a[ix + 1][jx + 2];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (ix + 2 < n && jx - 1 >= 0) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 1][jx - 1] + a[ix + 2][jx - 1];
            if (ans < temp) {
                ans = temp;
            }
        }
        if (jx + 2 < m) {
            temp = a[ix][jx] + a[ix][jx + 1] + a[ix][jx + 2];
            if (ix - 1 >= 0) {
                temp2 = temp + a[ix - 1][jx + 1];
                if (ans < temp2) {
                    ans = temp2;
                }
            }
            if (ix + 1 < n) {
                temp2 = temp + a[ix + 1][jx + 1];
                if (ans < temp2) {
                    ans = temp2;
                }
            }
        }
        if (ix + 2 < n) {
            temp = a[ix][jx] + a[ix + 1][jx] + a[ix + 2][jx];
            if (jx + 1 < m) {
                temp2 = temp + a[ix + 1][jx + 1];
                if (ans < temp2) {
                    ans = temp2;
                }
            }
            if (jx - 1 >= 0) {
                temp2 = temp + a[ix + 1][jx - 1];
                if (ans < temp2) {
                    ans = temp2;
                }
            }
        }
    }
}

console.log(ans);