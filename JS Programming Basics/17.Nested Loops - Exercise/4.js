function solve(input) {
    let num1 = +(input[0]);
    let num2 = +(input[1]);
    let printLine = '';
    for (i = num1; i <= num2; i++) {
        let currentNum = String(i); //ОБРЪЩА ПРОМЕНЛИВАТА В СТРИНГ = ""+i; i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = currentNum.charCodeAt(j);
            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum == evenSum) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}
    solve([])