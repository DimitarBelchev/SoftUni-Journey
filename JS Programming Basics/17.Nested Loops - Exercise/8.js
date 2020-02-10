function solve(input) {
    let n = Number(input.shift());
    let name = input.shift();
    let count = 0;
    let money = 0;
    while (name != 'Stop') {
        let kg = Number(input.shift());
        let fishValue = 0;
        count++;
        for (let j = 0; j < name.length; j++) {
            fishValue += name.charCodeAt(j);
        }
        if (count % 3 === 0) {
            money += fishValue / kg;
        } else {
            money -= fishValue / kg;
        }
        if (count === n) {
            console.log("Lyubo fulfilled the quota!");
            break;
        }
        name = input.shift();
    }
    if (money < 0) {
        console.log(`Lyubo lost ${(Math.abs(money)).toFixed(2)} leva today.`)
    } else {
        console.log(`Lyubo's profit from ${count} fishes is ${money.toFixed(2)} leva.`)
    }
}
    solve([])