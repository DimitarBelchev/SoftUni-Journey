function solve(input) {
    let line = input.shift();
    let primeNum = 0;
    let nonPrimeNum = 0;

    while (line != 'stop') {
        let num = +(line);
        let isPrime = true;
        if (num < 0) {
            console.log(`Number is negative.`);
            line = input.shift()
            continue;
        }
        if (num === 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < num; i++) { // ПРОВЕРКА ЗА ПРОСТО ЧИСЛО
                if (num % i === 0) {        // ТОВА, КОЕТО СЕ ДЕЛИ НА 1 И НА СЕБЕ СИ.
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNum += num;
        } else {
            nonPrimeNum += num;
        }
        line = input.shift()
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}
    solve([])