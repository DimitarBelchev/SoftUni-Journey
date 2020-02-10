function solve(input){



    let cars = new Map();



    for(let line of input){

        let tokens = line.split(" | ");

        let brand = tokens[0];

        let model = tokens[1];

        let quantity = Number(tokens[2]);



        if(!cars.get(brand)){

            cars.set(brand, new Map());

        }

        if(!cars.get(brand).get(model)){

            cars.get(brand).set(model, 0);

        }



        cars.get(brand).set(model, cars.get(brand).get(model)+quantity)

    }



    for(let [brand, modelCount] of cars){

        console.log(brand);



        for(let [model, quantity] of modelCount){

            console.log("###"+model +" -> "+quantity)

        }

    }

}