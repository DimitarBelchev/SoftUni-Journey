function solve(rawInput) {

    rawInput.shift();
    let input = rawInput.map(x => Number(x));



    let biggerNum = function(acc, val) {
        let bigger = (val > acc) ? val : acc;
        return bigger;
    }



    let largestNum = input.reduce(biggerNum);



    let sumOfRest = function() {

        let totalSum = input.reduce((acc, val) => acc + val);
        return totalSum - largestNum;
    }



    if (largestNum === sumOfRest()) {

        console.log("Yes");
        console.log("Sum = " + largestNum);

    } else {

        console.log("No");
        console.log("Diff = " + Math.abs(largestNum - sumOfRest()));
    }

}
    solve([])