function solve (input){
    let shipwidth=Number(input.shift());
    let shiplength=Number(input.shift());
    let shipheight=Number(input.shift());
    let astronautavgheight=Number(input.shift());
;
    let rocketSize=shipheight*shiplength*shipwidth;
    let roomSize=(astronautavgheight+0.40)*2*2;
    let totalsize=Math.floor(rocketSize/roomSize);
    if(totalsize<3){
        console.log(`The spacecraft is too small.`)
    } else if(totalsize>=3&&totalsize<=10){
        console.log(`The spacecraft holds ${totalsize} astronauts.`);
    } else{
        console.log(`The spacecraft is too big.`);
    }
}
solve([3.5,4,5,1.70]);