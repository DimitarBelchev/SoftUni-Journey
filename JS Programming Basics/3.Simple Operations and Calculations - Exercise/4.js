function solve(input){
    let masi=Number(input.shift());
    let length=Number(input.shift());
    let width=Number(input.shift());
let ploshtpokrivki=masi*(length+2*0.30)*(width+2*0.30);
let ploshtkareta=masi*(length/2)*(length/2);
let cenausd=ploshtpokrivki*7+ploshtkareta*9;
let cenabgn=cenausd*1.85;
console.log(cenausd.toFixed(2)+" USD");
console.log(cenabgn.toFixed(2)+" BGN");
}
    solve([])