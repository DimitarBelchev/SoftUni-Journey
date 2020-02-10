function solve(arr){



    let arrSize = arr.length;

    let currentBiggestNum = Number.MIN_SAFE_INTEGER;



    for(let i = 0; i < arrSize; i++){

        let tempNum = Number(arr[i]);

        if (tempNum >= currentBiggestNum) {

            currentBiggestNum = tempNum;

             console.log(currentBiggestNum)

                        }



    }

}

