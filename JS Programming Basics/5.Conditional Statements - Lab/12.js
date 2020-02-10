function solve(input){
    let excursionPrice=Number(input.shift());
    let puzzle=Number(input.shift());
    let talkingDoll=Number(input.shift());
    let teddyBear=Number(input.shift());
    let minion=Number(input.shift());
    let truck=Number(input.shift());
    
    let sum=puzzle*2.6+talkingDoll*3.0+teddyBear*4.1+minion*8.2+truck*2;
    let toysCount=puzzle+talkingDoll+teddyBear+minion+truck;
    if(toysCount>=50){
        sum=sum*0.75;
    }
    let totalSum=sum-sum*0.1;
    if (excursionPrice<=totalSum){
        console.log(`Yes! ${(totalSum-excursionPrice).toFixed(2)} lv left.`)}
        else{
            let total=Math.abs(totalSum-excursionPrice);
            console.log(`Not enough money! ${total.toFixed(2)} lv needed.`)}
    
    }
    solve([])