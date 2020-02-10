function solve (input){
    let imeNaFutbolenFen=input.shift();
    let budget=Number(input.shift());
    let broiButilkiBira=Number(input.shift());
    let broiPaketiChips=Number(input.shift());
;
    let biraObshtaCena=broiButilkiBira*1.20;
    let cenaNaChips=biraObshtaCena*0.45;
    let ChipsObshtaCena=Math.ceil(broiPaketiChips*cenaNaChips);
    let totalSum=biraObshtaCena+ChipsObshtaCena;
    if(budget>=totalSum){
        let moneyLeft=budget-totalSum;
        console.log(`${imeNaFutbolenFen} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`)
    } else{
        let moneyLeft=Math.abs(budget-totalSum);
        console.log(`${imeNaFutbolenFen} needs ${moneyLeft.toFixed(2)} more leva!`);
    }
}
solve(['Valentin',5,2,4]);