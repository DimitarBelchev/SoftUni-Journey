function solve(input) {

    let magic = parseInt(input.shift());
    let digits = 6;
    let comboList = [];

    let d1;
    let d2;
    let d3;
    let d4;
    let d5;
    let d6;

    for (let n = 1; n <= 9; n++) {

        let d6 = n;

        for (let m = 1; m <= 9; m++) {

            let d5 = m;

            for (let l = 1; l <= 9; l++) {   

                let d4 = l;

                for (let k = 1; k <= 9; k++) {

                    let d3 = k;

                    for (let j = 1; j <= 9; j++) {

                        let d2 = j;

                        for (let i = 1; i <= 9; i++) {

                            let d1 = i;

                            let comboProduct = d1 * d2 * d3 * d4 * d5 * d6;

                            if (comboProduct === magic) {
                                comboList.push(d6 + "" + d5 + d4 + d3 + d2 + d1);
                            }

                        }

                    }

                }

            }

        }

    }

    
console.log(comboList.join(" "));


}
    solve([2])