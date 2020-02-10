function solve(input) {

    for (let num of input) {
        console.log(isPalindrome(num));
    }

    function isPalindrome(num) {
        let numAsStr = num.toString();

        for (let i = 0; i < numAsStr.length / 2; i++) {
            if (numAsStr[i] !== numAsStr[numAsStr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

solve([45])