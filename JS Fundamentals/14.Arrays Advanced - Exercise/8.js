function solve(intArr, strArr) {
 
    for (let i = 0; i < strArr.length; i++) {
        let splittedCommand = strArr[i].split(' ');
        let [command, index, ...elements] = splittedCommand;
        index = Number(index);
        if (command === 'add') {
            intArr.splice(index, 0, Number(elements));
        } else if (command === 'addMany') {
            elements = elements.map(Number);
            intArr.splice(index, 0, ...elements);
        } else if (command === 'contains') {
            console.log(intArr.indexOf(index));
        } else if (command === 'remove') {
            intArr.splice(index, 1);
        } else if (command === 'shift') {
            for (let i = 0; i < index; i++) {
                intArr.push(intArr.shift());
            }
        } else if (command === 'sumPairs') {
            let tempIntArr = [];
            let sum = 0;
            for (let i = 0; i < intArr.length; i += 2) {
                sum = intArr[i] + intArr[i + 1];
                tempIntArr.push(sum);
            }
            if (intArr.length % 2 == 1) {
                tempIntArr[tempIntArr.length - 1] = intArr[intArr.length - 1];
            }
            intArr = tempIntArr;
        } else if (command === 'print') {
            console.log(intArr)
 
            break;
        }
    }
}