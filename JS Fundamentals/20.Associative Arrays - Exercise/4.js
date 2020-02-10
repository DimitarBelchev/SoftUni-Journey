party = (input) => {
 
    result = {
        in: []
    };
    let isStarted = false;
    input.forEach(elem => {
        elem === "PARTY" ? isStarted = true : void(0);
        if (elem !== 'PARTY')
            isStarted && elem ? result.in.splice(result.in.indexOf(elem), 1) : result.in.push(elem)
    })
 
    let vip = result.in.filter(a => a[0] == Number(a[0]));
    let regular = result.in.filter(a => a[0] != Number(a[0]));
 
    console.log(result.in.length);
    vip.concat(regular).forEach(elem => console.log(elem))
}