const http = require('http');
const PORT = 3000;
const handlers = require('./handlers/index');


http.createServer((req, res) => {

    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(PORT);