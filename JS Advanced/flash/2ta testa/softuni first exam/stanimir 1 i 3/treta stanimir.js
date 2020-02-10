class Forum {
    constructor() {
        this._id = 1;
        this._users = [];
        this._questions = [];
    }
 
    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }
 
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }
 
        if (this.findIndexOfUser(username) !== -1) {
            throw new Error('This user already exists!');
        }
 
        let newUser = {
            username,
            password,
            email,
            isLogged: false,
        }
 
        this._users.push(newUser)
        return `${username} with ${email} was registered successfully!`
    }
 
    login(username, password) {
        let userIndex = this.findIndexOfUser(username);
 
        if (userIndex === -1) {
            throw new Error('There is no such user');
        }
 
        if (this._users[userIndex].password === password) {
            this._users[userIndex].isLogged = true;
            return 'Hello! You have logged in successfully'
        }
 
    }
 
    logout(username, password) {
        let userIndex = this.findIndexOfUser(username);
 
        if (userIndex === -1) {
            throw new Error('There is no such user');
        }
 
        if (this._users[userIndex].password === password) {
            this._users[userIndex].isLogged = false;
            return 'You have logged out successfully'
        }
    }
 
    postQuestion(username, question) {
        let userIndex = this.findIndexOfUser(username);
 
        if (userIndex === -1 || this._users[userIndex].isLogged === false) {
            throw new Error('You should be logged in to post questions');
        }
        if (question === '') {
            throw new Error('Invalid question');
        }
        let newQuestion = {
            id: this._id,
            username,
            question,
            answers: [],
        }
 
        this._questions.push(newQuestion);
        this._id++;
 
        //test 7
        return 'Your question has been posted successfully';
    }
 
    postAnswer(username, questionId, answer) {
        let userIndex = this.findIndexOfUser(username);
 
        if (userIndex === -1 || this._users[userIndex].isLogged === false) {
            throw new Error('You should be logged in to post answers');
        }
        if (answer === '') {
            throw new Error('Invalid answer');
        }
 
        let questionIndex = this._questions.findIndex(question => question.id == questionId);
 
        if (questionIndex === -1) {
            throw new Error('There is no such question');
        }
 
        this._questions[questionIndex].answers.push({ username, answer });
 
        return 'Your answer has been posted successfully';
    }
 
    showQuestions() {
 
        // let result = '';
        return this._questions
            .map(q => `Question ${q.id} by ${q.username}: ${q.question}\n` + q.answers.map(ans => { return `---${ans.username}: ${ans.answer}` }).join('\n')).join('\n')
    }
 
    findIndexOfUser(username) {
        return this._users.findIndex(user => user.username === username);
    }
}