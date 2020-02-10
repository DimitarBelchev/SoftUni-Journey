function solve(input){
    let map=new Map();
    input=input.split(" ");
    let list=input.map(element=>element.toLowerCase());

    for(let word of list){
        if(!map.has(word)){
            map.set(word,1);
        } else {
            map.set(word,map.get(word)+1);
        }}
        let result="";
        for(let[key,value] of map){
            if(value%2!=0){
                result+= key+ " ";
            }
        }
        console.log(result);

    
    }
    