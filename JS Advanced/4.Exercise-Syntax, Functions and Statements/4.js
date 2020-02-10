function solve(step, lengthOfStep, speed) {

    let distance = step * lengthOfStep / 1000;

    let speedPerSecond = speed / 3600;



    let seconds = Math.round(distance / speedPerSecond);

    let minutes = Math.floor(step * lengthOfStep / 500);

    let hours = 0;



    while (seconds > 60) {

        seconds -= 60;

        minutes++;

    }



    while (minutes > 60) {

        minutes -= 60;

        hours++;

    }



    hours = hours > 10 ? hours : `0${hours}`;

    minutes = minutes > 10 ? minutes : `0${minutes}`;

    seconds = seconds > 10 ? seconds : `0${seconds}`;

    console.log(`${hours}:${minutes}:${seconds}`);

}