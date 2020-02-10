perfect = (num) => {
    let result = 0
    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            result += i;
        }
    }
    if (num === result) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}