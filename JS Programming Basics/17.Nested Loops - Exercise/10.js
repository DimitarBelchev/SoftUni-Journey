function solve(input) {
    let n = Number(input[0]);
    let output = '';
    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let l = 1; l <= 9; l++) {
                for (let o = 1; o <= 9; o++) {
                    if (n % i == 0 && n % k == 0 && n % l == 0 && n % o == 0) {
                        output+=`${i}${k}${l}${o} `;
                    }
                }
            }
        }
    }
    console.log(output);
}
    solve([])