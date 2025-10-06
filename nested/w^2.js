function limit(n) {
    let a = [[],0];
    
    for (let i = 0; i < n; i++) {
        a = [a,0];
    }
    return a;
}

function expand(a, n) {
    if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (a[1] == 1) {
        a = [];

        for (let i = 0; i < n; i++) {
            a = [a,0];
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