function solve(input) {
    let city = input.shift();
    let sells = Number(input.shift());
    let commission = 0;

    if (city === "Sofia") {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.05;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.07;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.08;
        }  else if (sells > 10000) {
            commission = sells * 0.12;
        }
    } else if (city === "Varna") {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.045;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.075;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.10;
        }  else if (sells > 10000) {
            commission = sells * 0.13;
        }
    } else if (city === "Plovdiv") {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.055;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.08;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.12;
        }  else if (sells > 10000) {
            commission = sells * 0.145;
        }
    }

    if (commission === 0) {
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }
}
    solve([])