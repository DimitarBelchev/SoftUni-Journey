function solve(input) {

    let operandOne = Number(input[0]);
    let operandTwo = Number(input[1]);
    let operator = input[2];
    let result;

    let oddEven = "";
    let decimal = "";


    function isEven(num) {
        return (num % 2 === 0) ? "even" : "odd";
    }


    switch (operator) {

        case "+":
            result = operandOne + operandTwo;
            oddEven = `- ${isEven(result)}`;

        break;

        case "-":
            result = operandOne - operandTwo;
            oddEven = `- ${isEven(result)}`;

        break;

        case "*":
            result = operandOne * operandTwo;
            oddEven = `- ${isEven(result)}`;

        break;

        case "/":
            result = operandOne / operandTwo;

        break;

        case "%":
            result = operandOne % operandTwo;

        break;

        default:
        break;
    }


    result = (operator == "/") ? result.toFixed(2) : result.toFixed(0);

    let details = [oddEven, decimal];
    let detailsClean = details.join('');


    if (((operator === "/") || (operator === "%")) && (operandTwo == 0)) {
        console.log(`Cannot divide ${operandOne} by zero`);
        return;

    } else {
        console.log(`${operandOne} ${operator} ${operandTwo} = ${result} ${detailsClean}`);
    
    }

}
    solve([10,
        12,
        '+'])
    