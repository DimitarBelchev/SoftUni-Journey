function solve(input) {


    let country = input[0];
    let price = Number(input[1]);
    let savings = Number(0);
    let i = 2;
    let command = input[i];



    while ((command !== "End") && (i-2) < input.length) {

        if (Number(command)) {

            savings += Number(command);

            if (savings >= price) {

                console.log(`Going to ${country}!`);
                savings = 0;

            }


        } else {

            country = command;
            i += 1;
            price = Number(input[i]);

        }

        i ++;
        command = input[i];

    }

}
    solve([])