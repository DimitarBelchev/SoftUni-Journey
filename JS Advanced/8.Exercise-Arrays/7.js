function solve(arr){



    let matrix = arr;

    let sum = matrix[0].reduce((a, b) => a+b);

    let isMagic = true;

    let sumCol =0;



    for (let index = 1; index < matrix.length; index++) {



        if (sum != matrix[index].reduce((a, b) => a+b)) {

            isMagic = false;            

        }     

    }



    for (let col = 0; col < matrix[0].length; col++) {



        for (let row = 0; row < matrix.length; row++) {

             sumCol +=matrix[row][col];           

        }        

        if (sumCol != sum) {

            isMagic =  false;

        }

        sumCol = 0;

   }

    

    console.log(isMagic)

}