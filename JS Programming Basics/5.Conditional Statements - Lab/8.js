function solve(input){
    let firstWord=input.shift();
    let secondWord=input.shift();
    firstWord=firstWord.toLowerCase();
    secondWord=secondWord.toLowerCase();
    if(firstWord==secondWord){console.log("yes");}
    else{console.log("no");}
}
    solve([])