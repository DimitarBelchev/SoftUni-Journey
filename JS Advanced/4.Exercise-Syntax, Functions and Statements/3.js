function solve(input) {

    let inputarr = input = String(input).split("");
    let isSame = true;
    let firstDigit = inputarr[0];


    inputarr.forEach(function (element) {
        if (element != firstDigit) {
            isSame = false;
        }
    });
    let sum = inputarr
        .map(Number)
        .reduce((acc, car) => acc + car);
    console.log(isSame);
    console.log(sum)
}