function solve(fruit, weight, price) {
    let weightInKG = weight / 1000;
    let sum = weightInKG * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}