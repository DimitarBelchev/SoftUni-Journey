function solve(num) {
    num = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < num.length; i++) {
        let  digit = Number(num[i]);
        if (digit % 2 !== 0) {
            oddSum += digit;
        }
        if (digit % 2 === 0) {
            evenSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(3495892137259234) 