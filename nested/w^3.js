function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [a, 2];
    }
    return a;
}

function expand(a, n) {
    if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (a[1] == 2) {
        a[1] = 1;

        for (let i = 0; i < n; i++) {
            a[0] = a.slice();
        }
    } else if (a[1] == 1) {
        a[1] = 0;

        for (let i = 0; i < n; i++) {
            a[0] = a.slice();
        }
    } else {
        a = [];
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[],0],0],0], 3)));
console.log(JSON.stringify(expand([[[],1],1], 3)));
console.log(JSON.stringify(expand([[[],2],2], 3)));