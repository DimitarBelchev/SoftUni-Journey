function solve(array, magicSum){
    for(let i=0;i<array.length;i++){
        let currentEl=array[i];
        for(let j=i+1;j<array.length;j++){
            let nextEl=array[j];
            if(currentEl + nextEl===magicSum){
                console.log(`${currentEl} ${nextEl}`)
            }
        }
    }
    }
    solve([1, 7, 6, 2, 19, 23],8)