var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/07.13549.txt'), 'utf8').toString().trim().split(' ');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

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

function bfs(n, k) {
    var zeroQ = new Queue(), oneQ = new Queue(),
        curr;

    check[n] = true;
    time[n] = 0;
    zeroQ.enqueue(n);

    while (zeroQ.getLength()) {
        curr = zeroQ.dequeue();

        if (curr * 2 <= MAX) {
            if (!check[curr * 2]) {
                zeroQ.enqueue(curr * 2);
                check[curr * 2] = true;
                time[curr * 2] = time[curr];
            }
        }

        if (curr - 1 >= 0) {
            if (!check[curr - 1]) {
                oneQ.enqueue(curr - 1);
                check[curr - 1] = true;
                time[curr - 1] = time[curr] + 1;
            }
        }

        if (curr + 1 <= MAX) {
            if (!check[curr + 1]) {
                oneQ.enqueue(curr + 1);
                check[curr + 1] = true;
                time[curr + 1] = time[curr] + 1;
            }
        }

        if (!zeroQ.getLength()) {
            zeroQ = oneQ;
            oneQ = new Queue();
        }
    }

    return time[k];
}

var n, k;
var check = [], time = [], MAX = 1000000;

n = +input[0];
k = +input[1];

console.log(bfs(n , k));
