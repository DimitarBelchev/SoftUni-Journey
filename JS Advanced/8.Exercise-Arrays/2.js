function solve(arr){



    let step = Number(arr.pop());

    let filter = arr.filter((x, indexx) => indexx % step==0).forEach(x => console.log(x));



}