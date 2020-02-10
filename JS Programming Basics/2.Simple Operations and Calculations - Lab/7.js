function  triangleArea(input)
{
    let a = Number(input.shift());
    let h = Number(input.shift());

    let S = a * h / 2;
    console.log(S.toFixed(2));
} 
triangleArea(['20', '30']);