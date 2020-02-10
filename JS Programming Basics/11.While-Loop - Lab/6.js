function solve(input) {

    let studentName = input.shift();

    let currentGrade;
    let i = 0;
    let gradeSum = Number(0);


    while (i <= 11) {

        currentGrade = Number(input.shift());

        if (currentGrade >= 4) {
            gradeSum += currentGrade;
            i++
        }

    }


    let gradeAvg = gradeSum / 12;

    console.log(`${studentName} graduated. Average grade: ${gradeAvg.toFixed(2)}`);

}
    solve([])