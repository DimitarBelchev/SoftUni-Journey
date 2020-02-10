function solve(input) {
    let map = new Map();
    input = input.map(e => e.split(' -> '));
    input.map(e => map.set(e[0], []));
    for (let i = 0; i < input.length; i++) {
        let [company, employee] = input[i];
        let employees = [];
        if (map.has(company)) {
            if (map.get(company).includes(employee)) {
                employees = map.get(company);
            } else {
                map.get(company).push(employee);
                employees = map.get(company);
            }
        }
        map.set(company, employees);
    }
 
    let result = [...map.entries()].sort();
    for (let i = 0; i < result.length; i++) {
        let line = result[i];
        console.log(line[0]);
        line[1].forEach(e => console.log(`-- ${e}`));
    }
 
}