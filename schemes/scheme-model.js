const database = require("../data/config.js");

function find() {
    return database.select('*').from("schemes");
}

function findById(id) {
    return database.first('*').from("schemes").where('id', id);
}

module.exports = {
    find,
    findById,

}