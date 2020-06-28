const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    likedTheaters: [{
        type: Schema.Types.ObjectId,
        ref: 'Theater'
    }]
})

module.exports = mongoose.model('User', UserSchema);