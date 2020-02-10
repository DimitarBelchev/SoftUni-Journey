function solve(input){



    let arraySet = [];



    for(let line of input ){

        let arr = JSON.parse(line);

        arraySet.push(arr.map(Number).sort((a,b) => b - a));

    }



    for(let i = 0; i < arraySet.length; i++){



        for(let j = i + 1; j < arraySet.length; j++){



            if(compareArr(arraySet[i], arraySet[j])){



                arraySet.splice(j, 1)

                j--;

            }

        }

    }



    arraySet.sort((a, b) => a.length - b.length);

    arraySet.forEach(a => console.log("["+a.join(", ")+"]"))



    function compareArr(arr1, arr2){

        if(arr1.length != arr2.length){

            return false;

        }else{

            for (let index = 0; index < arr1.length; index++) {

              

                if(arr1[index]!=arr2[index]){

                    return false;

                }                

            }

        }

        return true;



    }

}