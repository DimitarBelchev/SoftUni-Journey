function solve(input) {
 
    let flower = input.shift();
    let quantity = +(input.shift());
    let budget = +(input.shift());
    let sum = 0;
    let check = false;
    switch (flower) {
        case "Roses":
            check = true;
            sum = quantity * 5;
            if (quantity > 80) {
                sum *= 0.90;
            }
            break;
        case "Dahlias":
            check = true;
            sum = quantity * 3.80;
            if (quantity > 90) {
                sum *= 0.85;
            }
            break;
        case "Tulips":
            check = true;
            sum = quantity * 2.80;
            if (quantity > 80) {
                sum *= 0.85;
            }
            break;
        case "Narcissus":
            check = true;
            sum = quantity * 3;
            if (quantity < 120) {
                sum *= 1.15;
            }
            break;
        case "Gladiolus":
            check = true;
            sum = quantity * 2.50;
            if (quantity < 80) {
                sum *= 1.20;
            }
            break;
    }
    if (check) {
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - sum).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
        }
    }
}
    solve([])