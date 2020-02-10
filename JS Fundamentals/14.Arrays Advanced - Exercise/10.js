function legendaryFarming(input) {
    input = input.split(' ');
    let keyMaterials = new Map();
    keyMaterials.set('shards', 0);
    keyMaterials.set('fragments', 0);
    keyMaterials.set('motes', 0);
    let junkMaterials = new Map();
 
    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = String(input[i + 1]).toLowerCase();
 
        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            let currentQuantity = keyMaterials.get(material);
            quantity += currentQuantity;
            if (quantity >= 250) {
                keyMaterials.set(material, quantity - 250);
                keyMaterialRichNeededQuantity(material);
                break;
            } else {
                keyMaterials.set(material, quantity);
            }
        } else {
            if (junkMaterials.has(material)) {
                let currentQuantity = junkMaterials.get(material);
                quantity += currentQuantity;
                junkMaterials.set(material, quantity);
            } else {
                junkMaterials.set(material, quantity);
            }
        }
    }
 
    keyMaterials = [...(keyMaterials.entries())];
    keyMaterials.sort(mySort);
    function mySort(a, b) {
        if (a[1] > b[1]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
    keyMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
 
    junkMaterials = [...(junkMaterials.entries())];
    junkMaterials.sort((a, b) => a[0].localeCompare(b[0]));
    junkMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
 
    function keyMaterialRichNeededQuantity(input) {
        switch (input) {
            case ('shards'):
                console.log('Shadowmourne obtained!');
                break;
            case ('fragments'):
                console.log('Valanyr obtained!');
                break;
            case ('motes'):
                console.log('Dragonwrath obtained!');
                break;
        }
    }
}