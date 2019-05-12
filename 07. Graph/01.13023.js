var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('01.13023.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var vc = +input[0].trim().split(' ')[0], vr = +input[0].trim().split(' ')[1];
var ix,
    graph = new Array(vc), edge, v1, v2, rels, result = [], isFind = false;

for (ix = 1; ix <= vr; ix++) {
    edge = input[ix].trim().split(' ');
    v1 = +edge[0];
    v2 = +edge[1];

    if (!graph[v1]) {
        graph[v1] = [];
    }

    if (!graph[v2]) {
        graph[v2] = [];
    }

    if (graph[v1].indexOf(v2) < 0) {
        graph[v1].push(v2);
    }

    if (graph[v2].indexOf(v1) < 0) {
        graph[v2].push(v1);
    }
}


if (vr >= 4) {
    for (ix = 0; ix < vc; ix++) {
        rels = [ix];
        findVertex(ix, graph[ix]);

        if (rels.length >= 5) {
            result.push(rels);
            isFind = true;
            break;
        }
    }
}

function findVertex(curr, next) {
    var ix,
        isFind = false;

    for (ix = 0; ix < next.length; ix++) {
        if (rels.indexOf(next[ix]) < 0) {
            isFind = true;
            rels.push(next[ix]);

            if (rels.length >= 5) {
                return isFind;
            }

            if (!findVertex(next[ix], graph[next[ix]])) {
                rels.pop();
                isFind = false;
            }
        }
    }

    return isFind;
}

console.log(isFind ? 1 : 0);


