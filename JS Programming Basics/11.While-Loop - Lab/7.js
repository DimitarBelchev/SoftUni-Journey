function solve(input) {

    let studentName = input.shift();

    let currentGrade;
    let i = 0;
    let failCount = Number(0);
    let gradeSum = Number(0);
    let failYear;

    while (i <= 11) {

        currentGrade = Number(input.shift());

        if (currentGrade >= 4) {
            gradeSum += currentGrade;
            i++

        } else {
            failCount++;
            failYear = i + 1;
        }

        if (failCount >= 2) {
            console.log(`${studentName} has been excluded at ${failYear} grade`);
            break;
        }

    }


    let gradeAvg = gradeSum / 12;

    if (!failYear) {
        console.log(`${studentName} graduated. Average grade: ${gradeAvg.toFixed(2)}`);
    }
}
    solve([])