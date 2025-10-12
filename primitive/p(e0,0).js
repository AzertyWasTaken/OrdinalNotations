function limit(n) {
    let a = [[],[]];

    for (let i = 0; i < n; i++) {
        a[1].push(i);
    }
    return a;
}

function rankOrd(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] != b[i]) {
            return a[i] > b[i];
        }
    }
    return a.length >= b.length;
}

function popLastSeqOrd(a, b) {
    let i = a.length - 1;

    while (i > 0 && rankOrd(a[i], b)) {
        i--;
    }
    return a.splice(i);
}

function popLastSeqNum(a, n) {
    let i = a.length - 1;

    while (i > 0 && a[i] >= n) {
        i--;
    }
    return a.splice(i);
}

function expandSub(a, n) {
    let z = a.pop();

    if (z && z > 0) {
        let y = popLastSeqNum(a, z);
            
        for (let i = 0; i < n; i++) {
            a = a.concat(y);
        }
    }
    return a;
}

function addOrd(a, b) {
    while (a.length > 0) {
        y = popLastSeqNum(a, 1);

        if (rankOrd(y, b)) {
            a = a.concat(y);
            break;
        }
    }
    a = a.concat(b);
    return a;
}

function expand(a, n) {
    let z = a.pop();

    if (z && z.length > 0) {
        let y = popLastSeqOrd(a, z);
        
        if (z[z.length - 1] > 1) {
            a = a.concat(y);
            a.push(expandSub(z, n));

        } else if (z[z.length - 1] == 1) {
            let zy = popLastSeqNum(z, 1);
            zy.pop();

            for (let i = 0; i < n; i++) {
                a = a.concat(JSON.parse(JSON.stringify(y)));
                y[0] = addOrd(y[0], zy);
            }
        } else {
            for (let i = 0; i < n; i++) {
                a = a.concat(y);
            } 
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[],[],[]], 3)));
console.log(JSON.stringify(expand([[],[0],[0,0],[0,0]], 3)));
console.log(JSON.stringify(expand([[],[0,1],[0,1,0]], 3)));
console.log(JSON.stringify(expand([[],[0,1,1],[0],[0,1,1]], 3)));
console.log(JSON.stringify(expand([[],[0,1,1],[0,1],[0,1,1],[0,1,0],[0,1,1]], 3)));
console.log(JSON.stringify(expand([[],[0,1,1],[0,1,1]], 3)));
console.log(JSON.stringify(expand([[],[0,1,1],[0,1,1,0,1,1]], 3)));
console.log(JSON.stringify(expand([[],[0,1,2,1]], 3)));
console.log(JSON.stringify(expand([[],[0,1,2,2]], 3)));