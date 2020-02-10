function solve(input) {


    let n = parseInt(input[0]);
    

    
    arrayEven = [];
    arrayOdd = [];



    for (i = 1; i <= n; i++) {                                  // Filling the arrays with values

        if (i % 2 === 0) {
            arrayEven.push(parseInt(input[i]));

        } else {
            arrayOdd.push(parseInt(input[i]));
        }
    }


    
    if (arrayEven.length < 1) {
        arrayEven = [0];
    }

    
    if (arrayOdd.length < 1) {
        arrayOdd = [0];
    }


    function addNums(numA, numB) {
        return numA + numB;
    }


    let sumEven = arrayEven.reduce(addNums);
    let sumOdd = arrayOdd.reduce(addNums);


    if (sumEven === sumOdd) {
        console.log("Yes");
        console.log("Sum = " + sumEven);

    } else {
        console.log("No");
        console.log("Diff = " + Math.abs(sumEven - sumOdd));
    }

}
    solve([])