var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/10.3055.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function Queue(){
    var queue  = [];
    var offset = 0;

    this.getLength = function(){
        return (queue.length - offset);
    }

    this.enqueue = function(item){
        queue.push(item);
    }
    this.dequeue = function(){
        if (!queue.length) {
            return undefined;
        }

        var item = queue[offset];

        if ((++offset) * 2 >= queue.length){
            queue  = queue.slice(offset);
            offset = 0;
        }

        return item;
    }
}

function makeMap() {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        water[ix] = [];
        move[ix] = [];

        data = input[ix + 1].trim().split('');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = data[jx];
            water[ix][jx] = 0;
            move[ix][jx] = 0;

            if (data[jx] === 'S') {
                sp = [ix, jx];
            }

            if (data[jx] === 'D') {
                dp = [ix, jx];
            }

            if (data[jx] === '*') {
                queue.enqueue([ix, jx]);
            }
        }
    }
}

function waterBFS() {
    var v, kx, nx, ny;

    while (queue.getLength()) {
        v = queue.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === '.' && !water[nx][ny]) {
                    queue.enqueue([nx, ny]);
                    water[nx][ny] = water[v[0]][v[1]] + 1;
                }
            }
        }
    }
}

function sonicBFS() {
    var v, kx, nx, ny;

    queue.enqueue([sp[0], sp[1]]);

    while (queue.getLength()) {
        v = queue.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (!move[nx][ny] && (map[nx][ny] === '.' || map[nx][ny] === 'D')) {
                    if (!water[nx][ny] || (water[nx][ny] > move[v[0]][v[1]] + 1)) {
                        move[nx][ny] = move[v[0]][v[1]] + 1;
                        queue.enqueue([nx, ny]);
                    }
                }
            }
        }
    }

    return move[dp[0]][dp[1]] ? move[dp[0]][dp[1]] : 'KAKTUS';
}

var info, w, h, sp, dp;
var map = [], water = [], move = [], queue = new Queue(),
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
h = +info[0];
w = +info[1];

makeMap();
waterBFS();
console.log(sonicBFS());
