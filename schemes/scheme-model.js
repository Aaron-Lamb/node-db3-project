const database = require("../data/config.js");

function find() {
    return database.select('*').from("schemes");
}

module.exports = {
    find,
}