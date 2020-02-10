function solve(input) {
    let broiPutnici = Number(input.shift());
    let n = Number(input.shift());

    for (let i = 1; i <= n; i++) {
        let slizashti = Number(input.shift());
        let kachvashti = Number(input.shift());
        broiPutnici += (kachvashti - slizashti);
        if (i % 2 == 0) {
            broiPutnici -= 2;
        }
        else {
            broiPutnici += 2;
        }
    }
    console.log(`The final number of passengers is : ${broiPutnici}`);



}
solve([20, 2, 10, 5, 5, 3]);