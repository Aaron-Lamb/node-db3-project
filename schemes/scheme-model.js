const database = require('../data/config');

function find() {
    return database.select('*').from("schemes");
}

module.exports = {
    find,
}