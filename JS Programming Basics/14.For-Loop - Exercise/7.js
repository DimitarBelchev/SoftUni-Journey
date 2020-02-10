function solve(input) {

    let tabs = parseInt(input[0]);
    let salary = Number(input[1]);


    let fineFB = 150;
    let fineInsta = 100;
    let fineReddit = 50;



    if (tabs === 0) {
        console.log(salary);
        return;
    }



    for (let i = 2; i < input.length; i++) {

        let website = input[i];

        switch (website) {

            case "Facebook":
                salary -= fineFB;
                break;

            case "Instagram":
                salary -= fineInsta;
                break;

            case "Reddit":
                salary -= fineReddit;
                break;

            default:
            break;

        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }

    }


    console.log(salary);

}
    solve([])