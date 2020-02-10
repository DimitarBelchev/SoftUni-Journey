function cardGame(input) {
    let playerResult = new Map();
 
    let getPower = function (cardPower) {
        switch (cardPower) {
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            case "A":
                return 14;
            default:
                return cardPower;
        }
    }
    let getCardType = function (cardType) {
        switch (cardType) {
            case "C":
                return 1;
            case "D":
                return 2;
            case "H":
                return 3;
            case "S":
                return 4;
        }
    }
    let getCardValue = function (card) {
        let power;
        let type;
        if (card.length == 2) {
            power = card[0];
            type = card[1];
        } else {
            power = card.substring(0, 2);
            type = card[2];
        }
        return getPower(power) * getCardType(type);
    }
 
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(': ');
        let player = line[0];
        let cards = line[1].split(', ');
 
 
        if (!playerResult.has(player)) {
            playerResult.set(player, new Set());
        }
        let mapValue = playerResult.get(player);
        for (let j = 0; j < cards.length; j++) {
            mapValue.add(cards[j]);
        }
    }
    playerResult.forEach((value, key) => {
        let calculateResult = 0;
        for (let card of value) {
            calculateResult += getCardValue(card);
        }
        console.log(`${key}: ${calculateResult}`);
    });
}