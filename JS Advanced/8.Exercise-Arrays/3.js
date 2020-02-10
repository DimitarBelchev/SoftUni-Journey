function solve(arr){



    let result = [];

    let number =1;



    for(let command of arr){

        if(command == 'add'){

            result.push(number);

        }

        else{

            result.pop();



        }

        number++;

    }



    if (result.length ==0) {

        console.log('Empty');        

    }

    else{

        result.forEach(x => console.log(x));

    }

}