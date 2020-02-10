function solve(originalArr) {
    let modifiedArr = [];
    for (let i = 0; i < originalArr.length; i++) {
        let currentEl = originalArr[i];
        if (currentEl % 2 === 0) {
            modifiedArr[i] = currentEl + i;
            //modifiedArr.push(currentEl+i);
        } else {
            modifiedArr[i] = currentEl - i;
            //modifiedArr.push(currentEl-i);
        }
    }
    console.log(modifiedArr);
    //    let originalArrSum=0;
    //    for(let num of originalArr){
    //        originalArrSum+=num;
    //    }
    //    let modifiedArrSum=0;
    //    for(let num of modifiedArr){
    //       modifiedArrSum+=num;
    //    }
    //    console.log(originalArrSum);
    //    console.log(modifiedArrSum);

    let originalArrSum = 0
    let modifiedArrSum = 0;

    for (const index in originalArr) {
        let firstEL = originalArr[index];
        let secondEl = modifiedArr[index];

        originalArrSum += firstEL;
        modifiedArrSum += secondEl;
    }
    console.log(originalArrSum);
    console.log(modifiedArrSum);

}


solve([5, 15, 23, 56, 35]);