function solve(input){



    let heroisData = [];



    for(let data of input){

        let delimeter = /\s*\/s*/;

        let tokens = data.split(delimeter);

        let name = tokens[0].trim();

        let level = Number(tokens[1].trim());

        let items = [];

        let tempItems = [];



        if(tokens.length>2){

            items = tokens[2].split(",");

            for(let i =0; i < items.length; i++){



                tempItems[i] = (items[i].trim());

            }

        }



        let tempHeroicData = {name: name, level: level, items: tempItems}



        heroisData.push(tempHeroicData);





    }

    console.log(JSON.stringify(heroisData));



}