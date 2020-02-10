function solve(input) {

    let maxBadMarks = parseInt(input[0]);

    let currentString = input[1];
    let currentMark = Number(input[2]);
    let badMarkCount = Number(0);
    let currentProblem = parseInt(1);

    let gradeSum = parseInt(0);

    function isBad(mark) {
        return mark <= 4;
    }



    function nextProblem() {
        
        gradeSum += currentMark;
        currentProblem++;
        currentString = input[currentProblem * 2 - 1]
        currentMark = Number(input[currentProblem * 2]);
        
    }



    while (currentString !== "Enough") {


        if (isBad(currentMark)) {
            badMarkCount++;

            if (badMarkCount >= maxBadMarks) {
                console.log(`You need a break, ${maxBadMarks} poor grades.`);
                return;
            }

        }

        nextProblem();

    }


    
    let gradeAvg = gradeSum / (currentProblem - 1);



    console.log(`Average score: ${gradeAvg.toFixed(2)}`);
    console.log(`Number of problems: ${currentProblem - 1}`);
    console.log(`Last problem: ${input[(currentProblem - 1) * 2 - 1]}`);
}
    solve([])