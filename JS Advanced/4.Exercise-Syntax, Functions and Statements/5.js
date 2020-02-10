function solve(array){
    let obj={};
    for(let index=0;index<array.length;index+=2){
        let element=array[index];
        let value=Number(array[index+1]);
        obj[element]=value;
    }
    console.log(obj)
}