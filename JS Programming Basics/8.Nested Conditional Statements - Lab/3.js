function solve(input){
    let x1=Number(input.shift());
    let y1=Number(input.shift());
    let x2=Number(input.shift());
    let y2=Number(input.shift());
    let x=Number(input.shift());
    let y=Number(input.shift());
    
    if((y>=y1)&&(y<=y2)&&(x>=x1)&&(x<=x2)){
        console.log("Inside");}
        else{console.log('Outside')}
    }
    solve([])