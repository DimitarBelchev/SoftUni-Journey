function solve(arr){
    arr=arr.sort((a,b)=> b-a);
    let ourArray=[];
    
    while(arr.length>0){
        ourArray.push(arr.shift());
        ourArray.push(arr.pop());
        
    }
    console.log(ourArray.join(" "));
    
    }
    solve([])