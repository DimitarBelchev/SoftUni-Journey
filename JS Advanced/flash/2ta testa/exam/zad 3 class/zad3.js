class SkiForum {

    constructor(users, questions, id) {
        this.users = [];
        this.questions = [];
        this.id = Number(1);
    };

    register(username, password, repeatPassword, email) {
        if (username == "" || password == "" || repeatPassword == "" || email == "") {
            throw new Error(`Input can not be empty`)
        }

        let passwordOne = password;
        let passwordTwo = repeatPassword;
        if (passwordOne != passwordTwo) {
            throw new Error("Passwords do not match")
        }

        if (!this.users.includes(username)) {
            this.users.push({
                username,
                password,
                email
            });
            // user[username]={parola:password,imeil:email}
            // console.log(username)
            console.log(`${username} with ${email} was registered successfully! `)
        } else {
            throw new Error("This user already exists")
        }
    }
    loggedIn = [];
    login(username, password) {
        const foundName = this.users.findIndex(s => s.username === name);
        const foundParola = this.users.findIndex(s => s.password === password);
        if (!this.users.includes(username)) {
            throw new error("There is no such user")
        }
        if (foundName > -1 && foundParola > -1) {
            this.loggedIn.push.this.users[username];
            console.log(`Hello! You have logged in successfully`)
        }

    }
    logout(username, password) {
        if (!loggedIn.includes(this.username)) {
            throw new Error("There is no such user")
        }
        const foundName = this.users.findIndex(s => s.username === name);
        const foundParola = this.users.findIndex(s => s.password === password);

        const foundLogged = loggedIn.findIndex(s => s.password === password);

        if (foundName > -1 && foundParola > -1) {
            if (loggedIn.includes(foundLogged)) {
                loggedIn.splice(foundLogged, 1)
                console.log(`You have logged out successfully`)
            }

        }

    }

    postQuestion(username, question) {
        if (loggedIn.includes(username) && this.users.includes(username)) {
            let vupros = question;
            if (vupros == "") {
                throw new error("Invalid question")
            } else {
                question.push(question)
                if (!this.id == 1) {
                    this.id++;
                }
            }

        } else {
            throw new error("You should be logged in to post questions")
        }
    }

    postAnswer(username, questionId, answer) {

    }
}

    // showQuestions(){
    //     return this.id.map(i => {
    //         const userime = i.users;
    //         const vuprosmap=i.
    //             .map(b => `${b.title} by ${b.author}`)
    //             .join(', ');

    //         return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`;

    //     }).join('\n');
    // }
//     "Question {id} by {username}: {question}
// ---{username}: {answer}
// Question {id} by {username}: {question}
// ---{username}: {answer}
// ---{username}: {answer}
// . . . "






    // let forum = new Forum();

    // forum.register('Michael', '123', '123', 'michael@abv.bg');
    // forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
    // forum.login('Michael', '123');
    // forum.login('Stoyan', '123ab7');

    // forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
    // forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
    // forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
    // forum.postAnswer('Michael', 2, "How old is she?");
    // forum.postAnswer('Michael', 2, "Tell us how tall she is.");
    // console.log(forum.toString());
    // console.log(forum.showQuestions());


