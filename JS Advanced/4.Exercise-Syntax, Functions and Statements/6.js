function solve(input){



    let speed = input[0];

    let area = input[1];







    let print = "";

    if(area == 'residential'){

        let temp = 20 - speed;

        if(temp<0){

            temp*=-1;



            if(temp<=20){

                print = "speeding";

            }

            else if(temp<=40){

                print = "excessive speeding";

            }

            else{

                print = "reckless driving";

            }

        }

    }

    if(area == 'city'){

        let temp = 50 - speed;

        if(temp<0){

            temp*=-1;



            if(temp<=20){

                print = "speeding";

            }

            else if(temp<=40){

                print = "excessive speeding";

            }

            else{

                print = "reckless driving";

            }

        }

    }

    if(area == 'interstate'){

        let temp = 90 - speed;

        if(temp<0){

            temp*=-1;



            if(temp<=20){

                print = "speeding";

            }

            else if(temp<=40){

                print = "excessive speeding";

            }

            else{

                print = "reckless driving";

            }

        }

    }

    if(area == 'motorway'){

        let temp = 130 - speed;

        if(temp<0){

            temp*=-1;



            if(temp<=20){

                print = "speeding";

            }

            else if(temp<=40){

                print = "excessive speeding";

            }

            else{

                print = "reckless driving";

            }

        }

    }

    console.log(print);

}

