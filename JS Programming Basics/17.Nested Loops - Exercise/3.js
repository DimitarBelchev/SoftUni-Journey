function solve(input){
    let n = input[0];
    for(let i = n.length -1; i >= 0; i--){
        let digit = Number(n[i]);
        if(digit == 0){
            console.log('ZERO');
            continue;
        }
        let symbols = digit + 33;
        symbols = String.fromCharCode(symbols);
        let prin = '';
        for(let x = 0; x < digit; x++){
            symbols += '';
            prin = prin + '' + symbols;
        }
        console.log(prin);
    }    
}
    solve([])