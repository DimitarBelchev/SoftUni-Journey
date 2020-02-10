function solve(input) {

    let roomA = parseInt(input[0]);
    let roomB = parseInt(input[1]);
    let roomC = parseInt(input[2]);



    let roomVolume = roomA * roomB * roomC;
    let freeSpace = roomVolume;


    let currentDelivery = 3;
    let currentVolume;
    let totalBoxVolume = 0;
    let spaceNeeded;



    while (freeSpace > 0) {

        currentVolume = input[currentDelivery];
        totalBoxVolume += Number(currentVolume);


        if (currentVolume === "Done") {
            console.log(`${freeSpace} Cubic meters left.`);
            return;

        } 

        freeSpace -= parseInt(currentVolume);

        currentDelivery++;

    }

    spaceNeeded = roomVolume - totalBoxVolume;

    console.log(`No more free space! You need ${Math.abs(spaceNeeded)} Cubic meters more.`);


}
    solve([])