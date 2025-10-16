function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [[],[],a];
    }
    return a;
}

function isSuccessor(a) {
    if (a[0].length == 0) {
        return a[1].length == 0;
    
    } else {
        return isSuccessor(a[0]);
    }
}

function expand(a, n) {
    let z = a[2];
    let y = a[1];

    if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (y && y.length > 0) {
        a = [];

        if (y.length > 0) {
            let s = isSuccessor(y);
            y = expand(y, n);

            if (s) {
                for (let i = 0; i < n; i++) {
                    a = [a, y, z];
                }
            } else {
                a = [a, y, z];
            }
        }
    } else if (z) {
        a = [];

        if (z.length > 0) {
            let s = isSuccessor(z);
            z = expand(z, n);

            if (s) {
                for (let i = 0; i < n; i++) {
                    a = [[], a, z];
                }
            } else {
                a = [[], a, z];
            }
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[],[],[]],[],[]],[],[]], 3)));
console.log(JSON.stringify(expand([[[],[[],[],[]],[]],[[],[],[]],[]], 3)));
console.log(JSON.stringify(expand([[],[[],[[],[],[]],[]],[]], 3)));
console.log(JSON.stringify(expand([[],[],[[[],[],[]],[],[]]], 3)));