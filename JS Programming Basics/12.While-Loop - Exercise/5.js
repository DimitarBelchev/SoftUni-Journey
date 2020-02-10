function solve(input) {

    
    let leva = Math.trunc(Number(input[0]));

    
    let changeString = input[0].toString();
    let decimalIndex = changeString.indexOf(".");
    let stotinkiMalkiString = changeString.slice(decimalIndex + 1, decimalIndex + 3);
    let stotinkiMalki = Number(stotinkiMalkiString);

    let stotinki = leva * 100 + stotinkiMalki;




    let ofDvaLeva = 0;
    let ofOneLev = 0;
    let ofFifty = 0;
    let ofTwenty = 0;
    let ofTen = 0;
    let ofFive = 0;
    let ofTwo = 0;
    let ofOne = 0;


    while (stotinki >= 200) {
        stotinki -= 200;
        ofDvaLeva++;
    }

    while (stotinki >= 100) {
        stotinki -= 100;
        ofOneLev++;
    }

    while (stotinki >= 50) {
        stotinki -= 50;
        ofFifty++;
    }

    while (stotinki >= 20) {

        stotinki -= 20;
        ofTwenty++;
    }

    while (stotinki >= 10) {

        stotinki -= 10;
        ofTen++;
    }

    while (stotinki >= 5) {

        stotinki -= 5;
        ofFive++;
    }

    while (stotinki >= 2) {

        stotinki -= 2;
        ofTwo++;
    }

    while (stotinki >= 1) {

        stotinki -= 1;
        ofOne++;
    }

    let coins = ofDvaLeva + ofOneLev + ofFifty + ofTwenty + ofTen + ofFive + ofTwo + ofOne;

    console.log(coins);
}
    solve([])