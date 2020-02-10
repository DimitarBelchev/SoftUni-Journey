function solve(input) {
    let initialHealth = 100;
    let initialCoins = 0;
    let rooms = input[0].split('|');
    let room = 0;
    let bestRoom = 0;
    let alive = true;
    for (let i = 0; i < rooms.length; i++) {
        room = rooms[i].split(' ');
        bestRoom++;
        if (room[0] === 'potion') {
            if(initialHealth + Number(room[1]) <= 100){
                console.log(`You healed for ${room[1]} hp.`);
                initialHealth += Number(room[1]);
            }
            else{
                console.log(`You healed for ${100 - initialHealth} hp.`);
                initialHealth = 100;
            }
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (room[0] === 'chest') {
            initialCoins += Number(room[1]);
            console.log(`You found ${room[1]} coins.`)
        } else {
            initialHealth -= Number(room[1]);
            if (initialHealth > 0) {
                console.log(`You slayed ${room[0]}.`)
            } else {
                console.log(`You died! Killed by ${room[0]}.`)
                console.log(`Best room: ${bestRoom}`)
                alive = false;
                break;
            }
        }
    }
    if (alive) {
        console.log(`You've made it!`)
        console.log(`Coins: ${initialCoins}`)
        console.log(`Health: ${initialHealth}`)
    }
}