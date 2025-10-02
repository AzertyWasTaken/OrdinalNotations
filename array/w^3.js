function limit(n) {
    return [0,0,n];
}

function expand(a, n) {
    if (a[0] > 0) {
        a[0]--;

    } else if (a[1] > 0) {
        a[1]--;
        a[0] = n;
        
    } else if (a[2] > 0) {
        a[2]--;
        a[1] = n;
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([3,0,0], 3)));
console.log(JSON.stringify(expand([0,2,0], 3)));
console.log(JSON.stringify(expand([0,0,2], 3)));