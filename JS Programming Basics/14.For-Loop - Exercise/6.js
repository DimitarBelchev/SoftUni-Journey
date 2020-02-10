function solve(rawInput) {

    let input = rawInput.map(x => parseInt(x));

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;



    for (let i = 1; i < input.length; i++) {

        let thisNum = input[i];


        if (thisNum % 2 === 0) {
            p1++;
        }

        if (thisNum % 3 === 0) {
            p2++;
        }

        if (thisNum % 4 === 0) {
            p3++;
        }
    }



    let percent = (input.length - 1) / 100;

    let percent1 = p1 / percent;
    let percent2 = p2 / percent;
    let percent3 = p3 / percent;



    let data = [percent1, percent2, percent3];

    for (let i = 0; i < 3; i++) {
        console.log(data[i].toFixed(2) + "%");
    }
}
    solve([])