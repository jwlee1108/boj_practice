var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/04.7576.txt'), 'utf8').toString().trim().split('\n');
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

function makeMap(start, w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[start + ix].trim().split(' ');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = -1;
        }
    }
}

function checkTomato() {
    var ix, jx;

    for (ix = 0; ix < h; ix++) {
        for (jx = 0; jx < w; jx++) {
            if (map[ix][jx] === 1) {
                queue.enqueue([ix, jx]);
                mark[ix][jx] = 0;
            }
        }
    }
}

function bfs(w, h) {
    var v, kx, nx, ny;

    while (queue.getLength()) {
        v = queue.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === 0 && mark[nx][ny] === -1) {
                    queue.enqueue([nx, ny]);
                    mark[nx][ny] = mark[v[0]][v[1]] + 1;
                }
            }
        }
    }
}

var info, w, h;
var ix, jx, map = [], mark = [], queue = new Queue(), result = 0, isFind = false,
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
h = +info[1];
w = +info[0];

makeMap(1, w, h);
checkTomato();
bfs(w, h);

for (ix = 0; ix < h; ix++) {
    for (jx = 0; jx < w; jx++) {
        result = Math.max(result, mark[ix][jx]);

        if (map[ix][jx] === 0 && mark[ix][jx] === -1) {
            result = -1;
            isFind = true;
            break;

        }
    }

    if (isFind) {
        break;
    }
}
console.log(result);
