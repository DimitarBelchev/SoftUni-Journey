function minerTask(input) {
    let materialsMap = new Map();
 
    for (let i = 0; i < input.length; i += 2) {
        let material = input[i];
        let quantity = Number(input[i + 1]);
        if (!materialsMap.has(material)) {
            materialsMap.set(material, quantity);
        } else {
            let newValue = materialsMap.get(material) + quantity;
            materialsMap.set(material, newValue)
        }
 
    }
    let materialsToPrint = [...materialsMap].forEach(el => {
        console.log(`${el[0]} -> ${el[1]}`);
    })
}