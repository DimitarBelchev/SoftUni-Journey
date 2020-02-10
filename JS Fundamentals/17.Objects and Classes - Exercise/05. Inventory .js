function inventory(input) {
    let heroes = [];
    for (let line of input) {
        let splitted = line.split(" / ");
        let name = splitted[0];
        let level = Number(splitted[1]);
        let items = splitted[2];
        heroes.push({
            name: name,
            level: level,
            items: items
        })
    }
 
    heroes.sort((a, b) => {
        return a.level - b.level;
    });
 
    for (let obj of heroes) {
        let [a, b, c] = Object.entries(obj);
        console.log(`Hero: ${a[1]}`)
        console.log(`level => ${b[1]}`);
        let items = c[1].split(", ").sort((a, b) => (a.localeCompare(b)));
        console.log(`items => ${items.join(", ")}`);
    }
}