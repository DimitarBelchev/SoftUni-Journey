function solve(input) {

    let i = 0;
    let winner = "";
    let highScore = 0;

    while (input[i] !== "STOP") {

        var name = input[i];
        let nameSum = 0;

        for (let j = 0; j < name.length; j++) {
            nameSum += Number(name.charCodeAt(j));
        }

        if (nameSum > highScore) {
            highScore = nameSum;
            winner = name;
        }

        i ++;
    }

    console.log(`Winner is ${winner} - ${highScore}!`);

}
    solve([])