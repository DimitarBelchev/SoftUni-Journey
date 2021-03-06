function solve(input) {
    let list = {};
 
    for (const line of input) {
        let [country, town, price] = line.split(' > ');
        price = Number(price)
 
        if (!(country in list)) {
            list[country] = {};
            list[country][town] = price;
        } else if (country in list) {
            if (town in list[country]) {
                if (price < list[country][town]) {
                    list[country][town] = price;
                }
            } else {
                list[country][town] = price
            }
        }
    }
     list = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]))
 
    for (const line of list) {
        let obj = [...Object.entries(line[1])].map(e => e.join(' -> '))
        console.log(`${line[0]} -> ${obj.join(' ')}`)
    }
}