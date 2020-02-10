function solve(input) {

    let numberCount = parseInt(input[0]);
    let sum = Number(0);

    for (i = 1; i <= numberCount; i++) {
    
        sum += Number(input[i]);
    
    }

    console.log(sum);

}
    solve([])