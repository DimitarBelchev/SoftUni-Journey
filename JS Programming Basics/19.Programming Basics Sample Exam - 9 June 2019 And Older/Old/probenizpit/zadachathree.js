function solve(input) {
    let otbor=input.shift();
    let vidSuvenir=input.shift();
    let BroizakupeniSuveniri=Number(input.shift());
    let sum=0;
    let isValid=true;
    if (otbor==='Argentina')  {
switch(vidSuvenir){
    case'flags': sum=3.25*BroizakupeniSuveniri;
    break;
    case'caps': sum=7.20*BroizakupeniSuveniri;
    break;
    case'posters': sum=5.10*BroizakupeniSuveniri;
    break;
    case'stickers': sum=1.25*BroizakupeniSuveniri;
    break;
    default:
    console.log('Invalid stock!')
     isValid=false;
    break;
}
    } else if(otbor==='Brazil') {
        switch(vidSuvenir){
        case'flags': sum=4.20*BroizakupeniSuveniri
        break;
        case'caps': sum=8.50*BroizakupeniSuveniri
        break;
        case'posters': sum=5.35*BroizakupeniSuveniri
        break;
        case'stickers': sum=1.20*BroizakupeniSuveniri
        break;
        default:
        console.log('Invalid stock!')
     isValid=false;
        break; 
        }
    } else if(otbor==='Croatia'){
        switch(vidSuvenir){
        case'flags': sum=2.75*BroizakupeniSuveniri
    break;
    case'caps': sum=6.90*BroizakupeniSuveniri
    break;
    case'posters': sum=4.95*BroizakupeniSuveniri
    break;
    case'stickers': sum=1.10*BroizakupeniSuveniri
    break;
    default:
    console.log('Invalid stock!')
     isValid=false;
    break;
        }

    }else if(otbor==='Denmark'){
        switch(vidSuvenir){
        case'flags': sum=3.10*BroizakupeniSuveniri
    break;
    case'caps': sum=6.50*BroizakupeniSuveniri
    break;
    case'posters': sum=4.80*BroizakupeniSuveniri
    break;
    case'stickers': sum=0.90*BroizakupeniSuveniri
    break;
    default:
    console.log('Invalid stock!')
     isValid=false;
    break;
        }
        
    }else{
console.log("Invalid country!");
isValid=false;
    }
    
    if (isValid){
        console.log(`Pepi bought ${BroizakupeniSuveniri} ${vidSuvenir} of ${otbor} for ${sum.toFixed(2)} lv.`)
    }


        
}
solve(['Brazil','hoodies',5]);