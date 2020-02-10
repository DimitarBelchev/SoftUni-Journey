function solve(groupSize, type, dayOfWeek){
    let priceForPerson=0;
    switch(type){
        case 'Students':
            if (dayOfWeek==='Friday'){
                priceForPerson=8.45;
            } else if (dayOfWeek==='Saturday'){
                priceForPerson=9.8;
             } else {
                    priceForPerson=10.46;
                }
               break;

               case 'Business':
            if (dayOfWeek==='Friday'){
                priceForPerson=10.9;
            } else if (dayOfWeek==='Saturday'){
                priceForPerson=15.6;
             } else {
                    priceForPerson=16;
                }
                if(groupSize>=100){
                    groupSize-=10;
                }
               break;

               case 'Regular':
            if (dayOfWeek==='Friday'){
                priceForPerson=15;
            } else if (dayOfWeek==='Saturday'){
                priceForPerson=20;
             } else {
                    priceForPerson=22.5;
                }
               break;
            }
            let totalPrice=groupSize*priceForPerson;
            if(type==='Students'&& groupSize>=30){
                totalPrice*=0.85;
            }
            if(type==='Regular'&& (groupSize>=10&&groupSize<=20)){
                totalPrice*=0.95;
            }

console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
    solve([])