function limit(n) {
    let a = [1];

    for (let i = 0; i < n; i++) {
        a.unshift(0);
    }
    return a;
}

function firstNonZero(a) {
    let i = 0;

    while (i < a.length-1 && a[i] == 0) {
        i++;
    }
    return i;
}

function expand(a, n) {
    if (a.length > 0) {
        let p = firstNonZero(a);
        a[p]--;

        if (p > 0) {
            a[p - 1] = n;
        }
        if (a[a.length - 1] == 0) {
            a.pop();
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([3], 3)));
console.log(JSON.stringify(expand([0,0,2], 3)));
console.log(JSON.stringify(expand([0,0,0,1], 3)));