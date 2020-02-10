function solve(input) {

    let yearType = input[0];
    let holidays = parseInt(input[1]);
    let homeGames = parseInt(input[2]);


    let sofiaWeekends = 48 - homeGames;
    let sofiaGames = sofiaWeekends * 3 / 4;


    let totalGames = sofiaGames + homeGames + (holidays * 2 / 3);
    let result = (yearType === "leap") ? (totalGames * 1.15) : (totalGames);

    console.log(Math.trunc(result));
}
    solve([])