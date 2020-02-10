function solve(input) {
    let days = Number(input.shift());
    let typeRoom = input.shift();
    let rating = input.shift();
    let nights = days - 1;
    let discount = 0;
    let result = 0;
    let price = 0;
    let totalPrice = 0;
    switch (typeRoom) {
        case 'room for one person':
            if (days < 10) {
                price = 18 * nights;
                result = price
            } else if (days > 10 && days < 15) {
                price = 18 * nights
                result = price
            } else if (days > 15) {
                price = 18 * nights
                result = price
            }
            break;
        case 'apartment':
            if (days < 10) {
                discount = 0.30;
                price = 25 * nights;
                result = price - (price * discount)
            } else if (days > 10 && days < 15) {
                discount = 0.35;
                price = 25 * nights;
                result = price - (price * discount)
            } else if (days > 15) {
                discount = 0.50;
                price = 25 * nights;
                result = price - (price * discount)
            }
            break;
        case 'president apartment':
            if (days < 10) {
                discount = 0.10;
                price = 35 * nights;
                result = price - (price * discount)
            } else if (days > 10 && days < 15) {
                discount = 0.15;
                price = 35 * nights;
                result = price - (price * discount)
            } else if (days > 15) {
                discount = 0.20;
                price = 35 * nights;
                result = price - (price * discount)
            }
            break;
    }if (rating === 'positive') {
        totalPrice = result + (result * 0.25);
        console.log(totalPrice.toFixed(2));
    } else {
        totalPrice = result - (result * 0.10);
        console.log(totalPrice.toFixed(2));
    }
}
    solve([])