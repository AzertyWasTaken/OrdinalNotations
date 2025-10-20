function limit(n) {
    let a = [1];
    
    for (let i = 0; i < n; i++) {
        a.push(2);
    }
    return a;
}

function lastSeqPos(a) {
    let i = a.length;
    let c = 1

    while (i >= 0 && c > 0) {
        i--;

        if (a[i] == 0) {
            c++;
        } else {
            c--;
        }
    }
    return i;
}

function popLastNum(a) {
    let i = a.length - 1;

    while (i > 0 && a[i] != 1) {
        i--;
    }
    return a.splice(i);
}

function expand(a, n) {
    let z = a.pop();

    if (z == 2) {
        let y = popLastNum(a);

        for (let i = 0; i < n; i++) {
            a = a.concat(y);
        }
    } else if (z == 1) {
        let l = lastSeqPos(a);

        if (l >= 0) {
            let y = a.splice(l);
            y.push(0);
                
            for (let i = 0; i < n; i++) {
                a = a.concat(y);
            }
        }
    }
    while (a[a.length - 1] == 0) {
        a.pop();
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([1,0,1,0,1], 3)));
console.log(JSON.stringify(expand([1,1,0,1,0,0,1,1,0,1], 3)));
console.log(JSON.stringify(expand([1,1,1,0,1,0,1], 3)));
console.log(JSON.stringify(expand([1,2,0,1,2,0,1], 3)));
console.log(JSON.stringify(expand([1,2,0,2,0,1,2,0,2], 3)));
console.log(JSON.stringify(expand([1,2,2,0,0,2,2], 3)));