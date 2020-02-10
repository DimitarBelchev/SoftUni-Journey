function solve(rawInput) {

    let input = rawInput.map(x => Number(x));
    let n = input[0];



    let oddSum = 0;
    let evenSum = 0;



    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;
    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;



    for (let i = 1; i <= n; i++) {

        let num = input[i];
        
        if (i % 2 === 1) {
            oddSum += num;
            oddMin = (num < oddMin) ? num : oddMin;
            oddMax = (num > oddMax) ? num : oddMax;

        } else {
            evenSum += num;
            evenMin = (num < evenMin) ? num : evenMin;
            evenMax = (num > evenMax) ? num : evenMax;
        }
    }



    console.log("OddSum=" + oddSum.toFixed(2) + ",");

    if (oddMin !== 1000000000) {

        console.log("OddMin=" + oddMin.toFixed(2) + ",");

    } else {
        console.log("OddMin=No" + ",");
    }

    if (oddMax !== -1000000000) {

        console.log("OddMax=" + oddMax.toFixed(2) + ",");
    } else {
        console.log("OddMax=No" + ",");
    }



    console.log("EvenSum=" + evenSum.toFixed(2) + ",");

    if (evenMin !== 1000000000) {

        console.log("EvenMin=" + evenMin.toFixed(2) + ",");

    } else {
        console.log("EvenMin=No" + ",");
    }

    if (evenMax !== -1000000000) {

        console.log("EvenMax=" + evenMax.toFixed(2));
    } else {
        console.log("EvenMax=No");
    }


}
    solve([])