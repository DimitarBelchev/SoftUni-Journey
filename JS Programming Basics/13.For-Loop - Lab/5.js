function solve(input) {


    let n = parseInt(input[0]);
    

    
    arrayLeft = [];
    arrayRight = [];



    for (i = 1; i <= n; i++) {                                  // Filling arrayLeft with values
        arrayLeft.push(parseInt(input[i]));
    }


    for (i = (n + 1); i <= (input.length - 1); i++) {           // Filling arrayRight with values
        arrayRight.push(parseInt(input[i]));
    }


    function addNums(numA, numB) {
        return numA + numB;
    }


    let sumLeft = arrayLeft.reduce(addNums);
    let sumRight = arrayRight.reduce(addNums);


    if (sumLeft === sumRight) {
        console.log("Yes, sum = " + sumLeft);

    } else {
        console.log("No, diff = " + Math.abs(sumLeft - sumRight));
    }

}
    solve([4,
        10,
        50,
        60,
        20])