const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    const databaseUrl = "mongodb+srv://user:pass@cluster0-7zbio.mongodb.net/theater?retryWrites=true&w=majority"
    return mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, databaseStatus);

    function databaseStatus(err) {
        err
            ? console.error(err)
            : console.log('Database is setup and running on port 5000');
    }
}