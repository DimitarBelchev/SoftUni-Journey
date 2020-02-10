function solve(input) {

    let budget = parseInt(input[0]);
    let season = input[1];
    let peopleCount = parseInt(input[2]);


    let seasonPrice;

    switch (season) {

        case "Spring":
            seasonPrice = 3000;
        break;

        case "Summer":
        case "Autumn":
            seasonPrice = 4200;
        break;

        case "Winter":
            seasonPrice = 2600;
        break;
    }


    let groupSizeDiscount;

    if (peopleCount <= 6) {
        groupSizeDiscount = 0.9;
        
    } else if (peopleCount <= 11) {
        groupSizeDiscount = 0.85;

    } else {
        groupSizeDiscount = 0.75;
    }


    let evenDiscount;

    if (!(peopleCount % 2) && (season !== "Autumn")) {
        evenDiscount = 0.95;

    } else {
        evenDiscount = 1;
    }


    let totalPrice = seasonPrice * groupSizeDiscount * evenDiscount;
    let priceDifference = budget - totalPrice;

    let msgEnough = `Yes! You have ${priceDifference.toFixed(2)} leva left.`;
    let msgNotEnough = `Not enough money! You need ${Math.abs(priceDifference).toFixed(2)} leva.`;
    let message;


    if (budget >= totalPrice) {
        message = msgEnough;

    } else {
        message = msgNotEnough;
    }


    console.log(message);
}

    solve([])