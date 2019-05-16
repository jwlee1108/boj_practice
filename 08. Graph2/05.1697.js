var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/05.1697.txt'), 'utf8').toString().trim().split(' ');
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
    var queue = new Queue(),
        curr;

    check[n] = true;
    time[n] = 0;

    queue.enqueue(n);
    while (queue.getLength()) {
        curr = queue.dequeue();

        if (curr - 1 >= 0) {
            if (!check[curr - 1]) {
                queue.enqueue(curr - 1);
                check[curr - 1] = true;
                time[curr - 1] = time[curr] + 1;
            }
        }

        if (curr + 1 <= MAX) {
            if (!check[curr + 1]) {
                queue.enqueue(curr + 1);
                check[curr + 1] = true;
                time[curr + 1] = time[curr] + 1;
            }
        }

        if (curr * 2 <= MAX) {
            if (!check[curr * 2]) {
                queue.enqueue(curr * 2);
                check[curr * 2] = true;
                time[curr * 2] = time[curr] + 1;
            }
        }
    }

    return time[k];
}

var n, k;
var check = [], time = [], MAX = 100001;

n = +input[0];
k = +input[1];

if (n < k) {
    console.log(bfs(n, k));
} else {
    console.log(n - k);
}
