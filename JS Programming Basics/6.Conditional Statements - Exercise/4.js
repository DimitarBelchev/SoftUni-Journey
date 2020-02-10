function solve(input){
    let num = Number(input.shift());
    let from =input.shift();
    let to =input.shift();
switch(from){
case'mm':num/=1000;
break;
case'cm':num/=100;
break;
}
switch(to){
case'mm':num*=1000;
break;
case'cm':num*=100;
break;
}
console.log(num.toFixed(3));
}
    solve([])