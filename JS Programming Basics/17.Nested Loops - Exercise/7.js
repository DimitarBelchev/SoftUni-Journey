function solve(input) {
    let juryPeople = Number(input.shift());
    let teme = input.shift();
    let finalGrade = 0;
    let count = 0;

    while (teme != 'Finish') {
        count++;
        let sumGrades = 0;
        for (let i = 1; i <= juryPeople; i++) {
            sumGrades += Number(input.shift());
        }
        finalGrade += sumGrades / juryPeople;
        console.log(`${teme} - ${(sumGrades/juryPeople).toFixed(2)}.`);
        teme = input.shift()
    }
console.log(`Student's final assessment is ${(finalGrade/count).toFixed(2)}.`);
}
    solve([])