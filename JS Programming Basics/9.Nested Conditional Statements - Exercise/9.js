function solve(input) {

    let examHour = parseInt(input[0]);
    let examMin = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMin = parseInt(input[3]);



    let arrivalTime = (arrivalHour * 60) + arrivalMin;
    let examTime = (examHour * 60) + examMin;
    let difference = examTime - arrivalTime;



    let displayHour = Math.abs(Math.trunc(difference / 60));
    let displayMin = Math.abs(difference % 60);
    console.log(displayMin)
    
    
    
    let displayMinPadded = (displayMin < 10) ? ("0" + displayMin) : (displayMin);



    let state;
    let adjective;

    if (difference > 0) {
        adjective = "before";
        state = (difference <= 30) ? "On time" : "Early";
    
    } else if (difference === 0) {
        state = "On time";
    
    } else {
        adjective = "after";
        state = "Late";
    }



    console.log(state);



    if ((state === "On time") && (difference === 0)){
        return;

    } else if (Math.abs(difference) >= 60) {
            console.log(`${displayHour}:${displayMinPadded} hours ${adjective} the start`);
        
    } else {
            console.log(`${displayMin} minutes ${adjective} the start`);
    } 
}
    solve([9,
        30,
        9,
        50])