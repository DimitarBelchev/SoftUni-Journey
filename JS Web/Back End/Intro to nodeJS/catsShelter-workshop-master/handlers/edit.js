const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const cats = require('../data/cats.json');
const breeds = require('../data/breeds.json');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.includes('/cats/details/')) {

        if (req.method === 'GET') {

            const filePath = path.normalize(
                path.join(__dirname, '../views/cats/editCat.html'));

            const id = Number(pathname.split('/').pop());

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('File not found.');
                    res.end();
                    return
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });

                const breedOptions = breeds.map(breed => {
                    return `<option value="${breed}">${breed}</option>`
                });


                const modifiedData = data.toString()
                    .replace('{{catBreeds}}', breedOptions)
                    .replace('{{catName}}', cats[id].name)
                    .replace('{{catDescription}}', cats[id].description)
                    .replace('{{catUpload}}', cats[id].upload)
                    .replace('{{catId}}', id);


                res.write(modifiedData);
                res.end();
            });

        } else if (req.method === 'POST') {
            let body = '';
            const id = Number(pathname.split('/').pop());

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

                    const tmp = JSON.parse(data);
                    const newData = {
                        id,
                        name: post.name,
                        description: post.description,
                        upload: post.upload,
                        breed: post.breed,
                    };

                    tmp[id] = newData;

                    fs.writeFileSync(filePath, JSON.stringify(tmp));
                    res.writeHead(301, { "Location": "/" });
                    return res.end();
                });
            });
        }
    }
    else {
        return true
    }
}