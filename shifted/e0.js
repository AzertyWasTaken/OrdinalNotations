function limit(n) {
    let a = [];
    let p = [0];

    for (let i = 0; i < n; i++) {
        a = a.concat(p.slice());
        p.push(1);
    }
    return a;
}

function lastNumPos(a, s) {
    let i = s;

    while (i > 0 && a[i] == 1) {
        i--;
    }
    return i;
}

function popLastSeq(a, n) {
    let i = a.length;
    let j;

    while (i > 0 && (!j || j - i - 1 >= n)) {
        j = i;
        i = lastNumPos(a, i - 1);
    }
    return a.splice(i);
}

function expand(a, n) {
    let y = a.splice(lastNumPos(a, a.length - 1)).length - 1;

    if (y > 0) {
        let x = popLastSeq(a, y);
            
        for (let i = 0; i < n; i++) {
            a = a.concat(x);
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([0,0,1,0,1,0,0,1,0,1], 3)));
console.log(JSON.stringify(expand([0,0,1,0,1,1,0,1,1], 3)));