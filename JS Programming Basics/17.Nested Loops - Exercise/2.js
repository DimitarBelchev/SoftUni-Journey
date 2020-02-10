function solve(input) {
    let n = +(input[0]);
    let current = 1;
    let isBigger = false;
    let output = '';
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            output += current + ' ';
            current++;
        }
        console.log(output);
        output = '';
        if (isBigger){
        break;
        }
    }
}
    solve([])