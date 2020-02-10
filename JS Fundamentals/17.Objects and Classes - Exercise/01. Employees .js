function exercise(input) {
    let arr = [];
    for (let employee of input) {
        let obj = {
            name: employee,
            number: employee.length
        };
        arr.push(obj)
    }
    arr.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.number}`))
}