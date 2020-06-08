const http = require('http')
const url = require('url')
const port = 4000

http.createServer((req, res) => {
    const urlPath = url.parse(req.url).pathname

    if (urlPath === '/') {
        res.write('Home Page')
    } else if (urlPath === '/search') {
        res.write('Search Page')
    } else {
        res.write('Error Page')
    }

    console.log(res)
    res.write('Hello World!')
    res.end()
}).listen(port)

console.log(`Server started successfully on port ${port}`)