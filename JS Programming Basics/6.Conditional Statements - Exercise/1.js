function solve (input){
    let first=Number(input.shift());
    let second=Number(input.shift());
    let third=Number(input.shift());

    let totalseconds=first+second+third;

    let mins=Math.floor(totalseconds/60);
    let secs=totalseconds%60;
    //140%60->20
    if(secs<10){console.log(`${mins}:0${secs}`);
}
else{console.log(`${mins}:${secs}`)}
}
    solve([])