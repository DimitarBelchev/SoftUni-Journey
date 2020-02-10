function solve(input) {

    let n = parseInt(input[0]);

    let variants = 0;

    for (let i = 0; i <= n; i++) {

        for (let j = 0; j <= n; j++) {

            for (let k = 0; k <= n; k++) {

                for (let l = 0; l <= n; l++) {

                    for (let m = 0; m <= n; m++) {

                        let thisSum = i + j + k + l + m;

                        if (thisSum === n) {
                            variants++;
                        }

                    }

                }

            }

        }

    }


    console.log(variants);
}
    solve([])