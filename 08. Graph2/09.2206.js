var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/09.2206.txt'), 'utf8').toString().trim().split('\n');
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

function makeMap(w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[ix + 1].trim().split('');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = [];
        }
    }
}

function bfs(w, h) {
    var queue = new Queue(),
        v, kx, nx, ny, z;

    queue.enqueue([0, 0, 0]);
    mark[0][0][0] = 1;

    while (queue.getLength()) {
        v = queue.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];
            z = v[2];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === 0 && !mark[nx][ny][z]) {
                    mark[nx][ny][z] = mark[v[0]][v[1]][z] + 1;
                    queue.enqueue([nx, ny, z]);
                }

                if (!z && map[nx][ny] === 1 && !mark[nx][ny][z + 1]) {
                    mark[nx][ny][z + 1] = mark[v[0]][v[1]][z] + 1;
                    queue.enqueue([nx, ny, z + 1]);
                }
            }
        }
    }

    if (mark[h - 1][w - 1][0] && mark[h - 1][w - 1][1]) {
        return Math.min(mark[h - 1][w - 1][0], mark[h - 1][w - 1][1]);
    } else if (mark[h - 1][w - 1][0]) {
        return mark[h - 1][w - 1][0];
    } else if (mark[h - 1][w - 1][1]) {
        return mark[h - 1][w - 1][1];
    } else {
        return -1;
    }
}

var info, w, h;
var map = [], mark = [],
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
h = +info[0];
w = +info[1];

makeMap(w, h);
console.log(bfs(w, h));

