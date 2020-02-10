function solve(a, b) {
    let resultA = 1;
    let resultB = 1;
 
    for (let i = a; i > 1; i--) {
        resultA *= i;
    }
    for (let i = b; i > 1; i--) {
        resultB *= i;
 
    }
 
 
    resultA /= resultB;
    console.log(resultA.toFixed(2));
};