function solve(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let output = '';
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n; k++) {
            for (let m = 97; m < 97 + l; m++) {
                for (let o = 97; o < 97 + l; o++) {
                    for (let p = 1; p <= n; p++) {
                        if (p > i && p > k) {
                            output += `${i}${k}${String.fromCharCode(m)}${String.fromCharCode(o)}${p} `
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}
    solve([])