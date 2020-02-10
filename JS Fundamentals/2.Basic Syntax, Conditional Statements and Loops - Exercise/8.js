function solve(input)
{
    let n = Number(input);
    for(let i=1; i<=10;i++){
      let result=0;
      result=n*i;
      console.log(`${n} X ${i} = ${result}`);
    }
}
    solve([])