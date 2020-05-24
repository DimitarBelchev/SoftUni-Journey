const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const qs = require('querystring');


const load = (req, res, source) => {
    const catTemplate = (cat) => {
        const template =
            `<li><img src="${cat.upload}"><h3>${cat.name}</h3><p><span>Breed: </span>${cat.breed}</p><p><span>Description: </span>${cat.description}</p>
            <ul class="buttons"><li class="btn edit"><a href="/cats/details/${cat.id}">Details</a></li>
            <li class="btn delete"><a href="/cats/remove/${cat.id}">New Home</a></li></ul></li>`;
        return template
    };

    const filePath = path.normalize(
        path.join(__dirname, '../views/home/index.html'));

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File not found.');
            res.end();
            return
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });

        const viewTemplate = source.map(cat => {
            return catTemplate(cat);
        });
        const modifiedData = data.toString()
            .replace('{{cats}}', viewTemplate);

        res.write(modifiedData);
        return res.end();
    });
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        if (req.method === 'GET') {
            load(req, res, cats);

        } else if (req.method === 'POST') {
            let body = '';

            req.on('data', function (data) {
                body += data;

                if (body.length > 1e6)
                    req.connection.destroy();
            });

            req.on('end', function () {
                const post = qs.parse(body);

                const filePath = path.normalize(
                    path.join(__dirname, `../data/cats.json`));


                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.write('File not found.');
                        res.end();
                        return
                    }
                    const tmp = Array.from(JSON.parse(data));
                    const filteredByName = tmp.filter(x => (x.name).toLocaleLowerCase() === post.search.toLocaleLowerCase());
                    const filteredByBreed = tmp.filter(x => (x.breed).toLocaleLowerCase() === post.search.toLocaleLowerCase());
                    const filtered = filteredByName.concat(filteredByBreed);

                    load(req, res, filtered);
                });
            });
        }
    } else {
        return true
    }
}