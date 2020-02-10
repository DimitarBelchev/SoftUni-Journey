function solve(input) {

    let batchCount = parseInt(input.shift());


    function baked() {
            
        if (hasFlour && hasEggs && hasSugar) {
            return true;

        } else {
            return false;
        }
    }


    for ( let i = 1; i <= input.length; i ++) {

        var hasFlour = false;
        var hasEggs = false;
        var hasSugar = false;


        let command = input.shift();

        while (!baked()) {

            while (command !== "Bake!") {

                if (command === "flour") {
                    hasFlour = true;
                }
                if (command === "eggs") {
                    hasEggs = true;
                }
                if (command === "sugar") {
                    hasSugar = true;
                }

                command = input.shift();
            }

            if (!baked()) {console.log(`The batter should contain flour, eggs and sugar!`);
                command = input.shift();
            }

        }

        // Successful bake
        console.log(`Baking batch number ${i}...`);

    }


}
    solve([])