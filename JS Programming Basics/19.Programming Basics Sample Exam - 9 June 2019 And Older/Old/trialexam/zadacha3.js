function solve(input) {
    let vidSushi = input.shift();
    let imeNaRestorant = input.shift();
    let broiPorcii = Number(input.shift());
    let poruchkaSimvol = input.shift();
    let sum = 0;

    if (imeNaRestorant === 'Sushi Zone') {
        switch (vidSushi) {
            case 'sashimi': sum = 4.99 * broiPorcii;
                break;
            case 'maki': sum = 5.29 * broiPorcii;
                break;
            case 'uramaki': sum = 5.99 * broiPorcii;
                break;
            case 'temaki': sum = 4.29 * broiPorcii;
                break;

        }
    } else if (imeNaRestorant === 'Sushi Time') {
        switch (vidSushi) {
            case 'sashimi': sum = 5.49 * broiPorcii
                break;
            case 'maki': sum = 4.69 * broiPorcii
                break;
            case 'uramaki': sum = 4.49 * broiPorcii
                break;
            case 'temaki': sum = 5.19 * broiPorcii
                break;

        }
    } else if (imeNaRestorant === 'Sushi Bar') {
        switch (vidSushi) {
            case 'sashimi': sum = 5.25 * broiPorcii
                break;
            case 'maki': sum = 5.55 * broiPorcii
                break;
            case 'uramaki': sum = 6.25 * broiPorcii
                break;
            case 'temaki': sum = 4.75 * broiPorcii

                break;
        }

    } else if (imeNaRestorant === 'Asian Pub') {
        switch (vidSushi) {
            case 'sashimi': sum = 4.50 * broiPorcii
                break;
            case 'maki': sum = 4.80 * broiPorcii
                break;
            case 'uramaki': sum = 5.50 * broiPorcii
                break;
            case 'temaki': sum = 5.50 * broiPorcii;
                break;
        }

    } else {
        console.log(`${imeNaRestorant} is invalid restaurant!`);
    }
    if (sum != 0) {
        if (poruchkaSimvol === "Y") {
            sum *= 1.2;
            console.log(`Total price: ${Math.ceil(sum)} lv.`);
        }
        else {
            console.log(`Total price: ${Math.ceil(sum)} lv.`);
        }
    }



}

solve(['maki', 'Sushi Zone', 4, 'Y'])