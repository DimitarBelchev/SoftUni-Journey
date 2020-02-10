function solve(input) {

    let cakeA = parseInt(input[0]);
    let cakeB = parseInt(input[1]);
    let cakeArea = cakeA * cakeB;



    function notEnoughCake() {
        return (cakeRemaining - parseInt(userInput)) < 0;
    }



    let cakeRemaining = cakeArea;
    let i = parseInt(2);
    let userInput = input[i];



    while (userInput !== "STOP") {

        if (notEnoughCake()) {

            let shortage = Math.abs(cakeRemaining - parseInt(userInput));
            console.log(`No more cake left! You need ${shortage} pieces more.`);
            
            return;

        }


        cakeRemaining -= parseInt(userInput);

        i++;
        userInput = input[i];
    }

    
    console.log(`${cakeRemaining} pieces are left.`);


}
    solve([])