function solve(input) {
    let n = input.shift();
    let first = n % 10;
    n -= first;
    let second = (n / 10) % 10;
    n /= 10;
    let third = (n - second) / 10;

    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let m = 1; m <=third; m++){
                console.log(`${i} * ${j} * ${m} = ${i*j*m};`);

                  
            }           
       }
    }

}
    solve([])