function myFunction(input) {

    let word = input[0];

    let letters = [];


    for (i = 0; i <= (word.length - 1); i++) {
        letters.push(word[i]);
    }


    function wordValue(valueSum, letter) {     
        
        switch (letter) {          
            case "a":
                valueSum += 1;
            break;

            case "e":
                valueSum += 2;
            break;

            case "i":
                valueSum += 3;
            break;

            case "o":
                valueSum += 4;
            break;

            case "u":
                valueSum += 5;
            break;

            default:
            break;
        }

        return valueSum; 
    }


    let result = letters.reduce(wordValue, 0); 

    console.log(result);
}
