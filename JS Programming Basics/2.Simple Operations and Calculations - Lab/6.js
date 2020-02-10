function solve(input){
    let r=Number(input.shift());

    let area=Math.PI*r*r;
    let parametar= 2*Math.PI*r;
    console.log(area.toFixed(2));
    console.log(parametar.toFixed(2));
}
    solve([])