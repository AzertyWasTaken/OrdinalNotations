function limit(n) {
    return [[], [[], n]];
}

function isSuccessor(a) {
    if (a[0].length == 0) {
        return a[1] == 0;
    
    } else {
        return isSuccessor(a[0])
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
    let z = a[1];

    if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (z) {
        a = [];

        if (z.length > 0) {
            let s = isSuccessor(z);
            z = expandSub(z, n);

            if (s) {
                for (let i = 0; i < n; i++) {
                    a = [a, z];
                }
            } else {
                a = [a, z];
            }
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[],[]],[]],[]], 3)));
console.log(JSON.stringify(expand([[[],[[[],0],0]],[[[],0],0]], 3)));
console.log(JSON.stringify(expand([[[],[[],2]],[[],2]], 3)));