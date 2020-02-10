function validatePassword(password) {
    let isValid = true;
    //check length
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
 
    //check special symbols
    let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let containsSpecial = false;
    containsSpecial = format.test(password);
 
    if (containsSpecial) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
 
    //check number of digits
    let numbers = /[1234567890]/;
    let numbersCount = 0;
 
    let arr = password.split("");
    let containsNumber = false;
 
    //check if contains numbers
    for (let symb of arr) {
        containsNumber = numbers.test(symb);
        if (containsNumber) {
            numbersCount++;
        }
    }
 
    if (numbersCount < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }
 
 
    if (isValid) {
        console.log("Password is valid");
    }
}