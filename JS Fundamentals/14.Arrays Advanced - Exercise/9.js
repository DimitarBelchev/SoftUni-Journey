function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');
 
    for (let i = 0; i < input.length; i++) {
        let operation = input[i].split(' ');
        let command = operation[0];
        let newInventory = operation[1];
 
        if (command==='Buy') {
            if (!inventory.includes(newInventory)){
                inventory.push(newInventory);
            }
        } else if (command==='Trash') {
            if (inventory.includes(newInventory)){
                inventory.splice(inventory.indexOf(newInventory),1);
            }
        } else if (command==='Repair') {
            if (inventory.includes(newInventory)){
                inventory.splice(inventory.indexOf(newInventory),1);
                inventory.push(newInventory);
            }
        } else if (command==='Upgrade') {
            let inventoryForUpgrade=newInventory.split('-');
            if (inventory.includes(inventoryForUpgrade[0])){
                inventory.splice(inventory.indexOf(inventoryForUpgrade[0])+1,0,inventoryForUpgrade[0]+':'+inventoryForUpgrade[1]);
            }
        }
    }
    console.log(inventory.join(' '));
}