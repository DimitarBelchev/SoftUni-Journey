function solve(input) {
    let a = +(input[0]); // i
    let b = +(input[1]); // j
    let c = +(input[2]); // k
    let d = +(input[3]); // l
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let k = c; k <= d; k++) {
                for (let l = c; l <= d; l++) {
                    if (((i + l) == (j + k)) && (i != j) && (k != l)) {
                        console.log (`${i}${j}`);
                        console.log (`${k}${l}`);
                        console.log ();
                    }
                }
            }
        }
    }
}
    solve([])