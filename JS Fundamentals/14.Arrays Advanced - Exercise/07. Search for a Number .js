function solve(arr1, arr2) {
    let array = arr1
    let arrLength = Number(arr2.shift());
    let deleteNum = Number(arr2.shift());
    let num = Number(arr2.shift());
    let match = 0;
    array = array.splice(0, arrLength);
    for (let i = 0; i < deleteNum; i++) {
        array.shift();
    }
    for (let j of array) {
        if (j == num) {
            match++;
        }
    }
    console.log(`Number ${num} occurs ${match} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])