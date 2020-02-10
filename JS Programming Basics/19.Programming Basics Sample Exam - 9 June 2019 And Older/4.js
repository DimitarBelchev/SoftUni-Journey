function solve(input) {

    let predvidenaSuma = Number(input.shift());
    let grupiHora = Number(input.shift());
    let sum = 0;
    let result = 0;
    let broiGosti = 0;
    while (grupiHora != 'The restaurant is full') {
        grupiHora = Number(grupiHora);
        broiGosti += grupiHora;
        if (grupiHora < 5) {
            sum = grupiHora * 100;
        }
        else {
            sum = grupiHora * 70;
        }
        result += sum; 
        grupiHora = input.shift();
    }
    if (result >= predvidenaSuma) {
        console.log(`You have ${broiGosti} guests and ${result - predvidenaSuma} leva left.`);
    }
    else {
        console.log(`You have ${broiGosti} guests and ${result} leva income, but no singer.`);
    }


}
    solve([])