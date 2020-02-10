function solve(input) {

    let word = input[0];

    let letters = [];


    for (i = 0; i <= (word.length - 1); i++) {
        letters.push(word[i]);
    }


    function wordValue(valueSum, letter) {      // the reduce method on line 44 will call this function. It will then automatically pass the value of each element from the "letters" array to the SECOND argument of the function, which in this case is called "letter"
        
        switch (letter) {           // Increasing the valueSum ONLY if the letter is one of the vowels, with the appropriate amount
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

        return valueSum;            // Whatever the function RETURNS, will be fed into the first argument of the function the next time. The first argument of the function is called "valueSum" in this case.
    }


    let result = letters.reduce(wordValue, 0);  // Note the zero here. This will automatically be fed as a first argument (initial value) into the wordValue function. If this zero wasn't here, the reduce method will have automatically used the value of the first index of the "letters" array instead. But this value isn't actually a number in our case: it's going to be a letter. So we set it to 0 instead.

    console.log(result);
}
    solve([])