function solve(input) {

    let currentAge = parseInt(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = parseInt(input[2]);

    
    
    let giftMoney = parseInt(10);
    let savings = Number(0);
    let toyCount = parseInt(0);



    for (i = 1; i <= currentAge; i++) {

        if (i % 2 === 0) {
            savings += giftMoney - 1;
            giftMoney += 10;

        } else {
            toyCount += 1;
        }
    }



    let moneyFromToys = toyCount * toyPrice;
    let totalMoneySaved = savings + moneyFromToys;
    let difference = Math.abs(totalMoneySaved - washingMachinePrice);


    
    let msg1 = `Yes! ${difference.toFixed(2)}`;
    let msg2 = `No! ${difference.toFixed(2)}`;
    let message = (totalMoneySaved >= washingMachinePrice) ? msg1 : msg2;



    console.log(message);
}
    solve([])