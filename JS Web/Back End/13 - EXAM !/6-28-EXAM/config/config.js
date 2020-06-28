const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        tokenKey: 'Top Secret'
    },
    production: {}
}

module.exports = config[env];