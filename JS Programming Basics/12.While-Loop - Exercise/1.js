function solve(input) {

    let bookName = input[0];
    let bookCount = parseInt(input[1]);
    let booksChecked = parseInt(0);
    let counter = parseInt(2);


    function isMyBook(title) {
        return title === bookName;
    }


    while (counter < (bookCount + 2)) {

        if (isMyBook(input[counter])) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;   
        }

        booksChecked++;
        counter++;
    }


    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);

}
    solve([])