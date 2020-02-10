function solve(input) {

    let floorCount = parseInt(input[0]);
    let roomCount = parseInt(input[1]);
    


    for (let i = floorCount; i >= 1; i--) {                 // This loop prints all floors in a top-down order. In other words, the last printed line is actually the ground floor.

        let floorLabels = [];
        let roomType;

        if (i === floorCount) {                             // Only the first ever iteration (the top floor, because we print from the top down) will rpint "L".
            roomType = "L";
        } else if (i % 2 === 1) {                           // This if-else alternates the floors between O-office and A-apartment
            roomType = "A";
        } else {
            roomType = "O";
        }


        for (let r = 0; r < roomCount; r++) {
            floorLabels.push(`${roomType}${i}${r}`);        // Inserting as many combinations in the floorLabels as there are rooms, while also using the "i" counter from the big loop. The big loop (line 8) counts the floors. This loop (line 23) counts the individual rooms on each floor.
        }

        console.log(floorLabels.join(" "));

    }

}
    solve([])