function limit(n) {
    return [[], [[], n]];
}

function isSuccessor(a) {
    if (a[0].length == 0) {
        return a[1] == 0;
    
    } else {
        return isSuccessor(a[0]);
    }
}

function expandSub(a, n) {
    let z = a[1];

    if (a.length > 0 && a[0].length > 0) {
        a[0] = expandSub(a[0], n);

    } else {
        a = [];

        if (z > 0) {
            for (let i = 0; i < n; i++) {
                a = [a, z - 1];
            }
        }
    }
    return a;
}

function expand(a, n) {
    if (a[0] && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (a[1] && a[1].length > 0) {
        let s = isSuccessor(a[1]);
        a[1] = expandSub(a[1], n);

        if (s) {
            for (let i = 0; i < n; i++) {
                a[0] = a.slice();
            }
         }
    } else {
        a = [];
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[],[]],[]],[]], 3)));
console.log(JSON.stringify(expand([[[],[[[],0],0]],[[[],0],0]], 3)));
console.log(JSON.stringify(expand([[[],[[],2]],[[],2]], 3)));