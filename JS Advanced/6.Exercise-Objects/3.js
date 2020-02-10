
function solve(input){



    let quantity = {};

    let bottle = {};



    for(let data of input){

        let tokens = data.split(" => ");

        let fruit = tokens[0];

        let quantityT = Number(tokens[1]);



        let check = !quantity.hasOwnProperty(fruit);



        if(check){

            quantity[fruit] = 0;

        }

        quantity[fruit] +=quantityT;

        if(quantity[fruit]>= 1000){

            bottle[fruit] = parseInt(quantity[fruit]/1000);

        } 

    }



    for(let i in bottle){

        console.log(i+ " => "+bottle[i]);

    }

}