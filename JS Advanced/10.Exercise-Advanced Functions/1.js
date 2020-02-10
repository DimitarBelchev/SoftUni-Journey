  
function sortArray(numeric, command) {
    if (command === 'asc') {
        return numeric.sort((a, b) => a - b);
    } else if (command === 'desc') {
        return numeric.sort((a, b) => b - a);
    }
}