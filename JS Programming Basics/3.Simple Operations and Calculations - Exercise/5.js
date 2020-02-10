function solve(input){
    let hallLength=Number(input.shift());
    let hallWidth=Number(input.shift());
    let wardrobeside=Number(input.shift());
    
    let hallsize=(hallLength*100)*(hallWidth*100);
    let wardrobesize=(wardrobeside*100)*(wardrobeside*100);
    let benchsize=hallsize/10;
    let freespace=hallsize-wardrobesize-benchsize;
    let dancers=Math.floor(freespace/(40+7000));
    console.log(dancers);
    }
    solve([])