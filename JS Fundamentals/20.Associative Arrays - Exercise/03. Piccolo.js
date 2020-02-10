function solve(arr){
    let parking= new Map()
    for( let i = 0; i<arr.lengt; i++){
        let line = arr[i].split(', ')
        let inOut=line[0]
        let carNum=line[1]
        if(inOut==="IN" && !parking.has(carNum)){
            parking.set(carNum,"in")
        }
        else if(inOut==="IN"&& parking.has(carNum)){
            parking.set(carNum,'in')
        }
        else if(inOut==="OUT"&&!parking.has(carNum)){
            continue
        }
        else if(inOut==="OUT" && parking.has(carNum)){
            parking.set(carNum,"out")
        }
    }
    let changed=Array.from(parking).filter(x=>x[i]==="in")
    if(changed.length>0){
        let sorted=changed.sort()
        for(let el of sorted){
            console.log(el[0]);
        }
    }
    else{
        console.log(`Parking Lot is Empty`);
    }
    }
  