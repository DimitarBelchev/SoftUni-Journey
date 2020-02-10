function solve(input){
    let dictionary={};
    let parsedItems= input.map(JSON.parse);

    parsedItems
    .forEach((item) => {
        let tuple = Object.entries(item);
        let term=tuple[0][0];
        let definition = tuple[0][1];

        dictionary[term]=definition;
        
    });
    let sortedItems = Object.entries(dictionary)
    .sort((a,b)=>a[0].localeCompare(b[0]));
    console.log(sortedItems);
    }
    solve([])