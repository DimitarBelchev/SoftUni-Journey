const homeHandler = require('./home');
const staticFiles = require('./static-files');
const cats = require('./cats');
const edit = require('./edit');
const remove = require('./remove');


module.exports = [homeHandler, cats, edit, remove, staticFiles];
