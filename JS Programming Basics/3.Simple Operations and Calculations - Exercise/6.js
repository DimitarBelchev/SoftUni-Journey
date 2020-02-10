function solve(input){
    let dni=Number(input.shift());
    let sladkari=Number(input.shift());
    let torti=Number(input.shift());
    let gofreti=Number(input.shift());
    let palachinki=Number(input.shift());
    let cenatorti=torti*45;
    let cenagofreti=gofreti*5.80;
    let cenapalachinki=palachinki*3.20;
    let sumazaden=(cenatorti+cenagofreti+cenapalachinki)*sladkari;
    let sumacql=sumazaden*dni;
    let zablagotvoritelnost=sumacql-(sumacql*1/8);
    console.log(zablagotvoritelnost.toFixed(2));
    }
    solve([])