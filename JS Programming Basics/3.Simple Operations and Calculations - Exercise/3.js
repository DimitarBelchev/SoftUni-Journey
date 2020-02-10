function solve(input){
    let x1=Number(input.shift());
    let y1=Number(input.shift());
    let x2=Number(input.shift());
    let y2=Number(input.shift());
    
    let length=Math.abs(x1-x2);
    let width=Math.abs(y1-y2);
    
    let plosht=length*width;
    let perimetar=length*2+width*2;
    
    console.log(plosht.toFixed(2));
    console.log(perimetar.toFixed(2));
    }
    solve([])