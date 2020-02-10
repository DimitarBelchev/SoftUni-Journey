function solve(input) {
    let array = input;
    let income = 0;
    array.forEach(element => {
        let regEx = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d*)\$/g;
        let line = regEx.exec(element);
        if(line){
            let price = Number(line[3]) * Number(line[4]);
            income += price;
            console.log(`${line[1]}: ${line[2]} - ${price.toFixed(2)}`);
        }
    });
     console.log(`Total income: ${income.toFixed(2)}`);
}