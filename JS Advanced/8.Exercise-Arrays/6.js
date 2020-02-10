function solve(arr){



    return arr.sort((a, b) => sortByLength(a, b)).forEach(element => {

        console.log(element)

    });



          function sortByLength(a, b){

          // ASC  -> a.length - b.length

         // DESC -> b.length - a.length

             return a.length - b.length || sortByName(a, b);

    }

    function sortByName(a, b){

        return a.toLowerCase().localeCompare(b.toLowerCase());

    }

}