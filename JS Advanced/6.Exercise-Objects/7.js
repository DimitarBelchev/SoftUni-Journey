function solve(input){



    //set

    let userNames = new Set();

    for(let i of input){

        userNames.add(i);

    }



    //array



    Array.from(userNames.keys()).sort((a, b) => sortUsernames(a,b)).forEach(x => console.log(x));



    function sortUsernames(a, b){

        if(a.length != b.length){

            return a.length - b.length;

        }

        else{

            return a.localeCompare(b)

        }

    }

}