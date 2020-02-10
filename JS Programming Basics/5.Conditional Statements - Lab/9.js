function solve (input){
    let type=input.shift();
    let result=0;
    
        if (type=="square"){
            let a=Number(input.shift());
            let area=a*a;
            result=area;}
       
        else if(type=="rectangle"){
            let a=Number(input.shift());
            let b=Number(input.shift());
            let area=a*b;
            result=area;}
    
        else if(type=="circle"){
            let r=Number(input.shift());
            let area=Math.PI*r*r;
            result=area;}
    
        else if(type=="triangle"){
            let a=Number(input.shift());
            let h=Number(input.shift());
            let area=(a*h)/2;
            result=area;}
    
    console.log(result.toFixed(3));
    }
    solve([])