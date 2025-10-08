function limit(n) {
    let a = [];
    let p = [];
    
    for (let i = 0; i < n; i++) {
        a.push(p.slice());
        p.push(1);
    }
    return a;
}

function rankOrd(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return a[i] == 1;
        }
    }
    return a.length >= b.length
}

function popLastNum(a, n) {
    let i = a.length - 1;

    while (i > 0 && rankOrd(a[i], n)) {
        i--;
    }
    return a.splice(i);
}

function expand(a, n) {
    let z = a.pop();

    if (z && z.length > 0) {
        let y = popLastNum(a, z);
    
        for (let i = 0; i < n; i++) {
            a = a.concat(JSON.parse(JSON.stringify(y)));
            
            if (z[z.length - 1] == 1) {
                y[0].push(0);
            }
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[],[],[]], 3)));
console.log(JSON.stringify(expand([[],[0],[0,0],[0,0]], 3)));
console.log(JSON.stringify(expand([[],[1],[0],[1]], 3)));
console.log(JSON.stringify(expand([[],[1],[1]], 3)));
console.log(JSON.stringify(expand([[],[1],[1,0]], 3)));
console.log(JSON.stringify(expand([[],[1],[1,1]], 3)));