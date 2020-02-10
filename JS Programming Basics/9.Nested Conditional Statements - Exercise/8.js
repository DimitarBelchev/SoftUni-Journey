function solve(input) {

    let month = input[0];
    let nights = parseInt(input[1]);


    let range;
    let studioPrice;
    let flatPrice;


    switch (month) {

        case "May":
        case "October":
            range = "A";
            studioPrice = 50;
            flatPrice = 65;
        break;

        case "June":
        case "September":
            range = "B";
            studioPrice = 75.2;
            flatPrice = 68.7;
        break;

        case "July":
        case "August":
            range = "neither A nor B";
            studioPrice = 76;
            flatPrice = 77;
        break;
    }


    if (nights > 14) {
        console.log(+flatPrice)
        flatPrice *= 0.9;
        console.log(+flatPrice)
        
        if (range === "A") {
            studioPrice *= 0.7;
        } else if (range === "B") {
            studioPrice *= 0.8;
        } else {
            studioPrice *= 1;
        }

    } else if (nights > 7) {
        studioPrice = (range === "A") ? (studioPrice * 0.95) : studioPrice;
    }

    
    let flatTotal = flatPrice * nights;
    let studioTotal = studioPrice * nights;


    console.log(`Apartment: ${flatTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);


}
solve(['June',
16])