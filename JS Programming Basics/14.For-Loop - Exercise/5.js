function solve(rawInput) {

    let input = rawInput.map(x => parseInt(x));

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;



    for (let i = 1; i < input.length; i++) {

        if (input[i] < 200) {
            p1++;

        } else if (input[i] < 400) {
            p2++;

        } else if (input[i] < 600) {
            p3++;

        } else if (input[i] < 800) {
            p4++;

        } else {
            p5++;

        }
    }



    let percent = (input.length - 1) / 100;
    
    let percent1 = p1 / percent;
    let percent2 = p2 / percent;
    let percent3 = p3 / percent;
    let percent4 = p4 / percent;
    let percent5 = p5 / percent;



    let data = [percent1, percent2, percent3, percent4, percent5];

    for (let i = 0; i < 5; i++) {
        console.log(data[i].toFixed(2) + "%");
    }
}
    solve([])