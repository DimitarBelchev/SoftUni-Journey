function solve(input){
    let distinctArr=[];

    for (let i=0;i<input.length;i++){
        let indexOfEl=input.indexOf(input[i]);

        if(i===indexOfEl){
            distinctArr.push(input[i]);
        }
        }
        console.log(distinctArr.join(' '));
    }
    
    
    solve([])