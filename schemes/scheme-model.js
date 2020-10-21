const database = require("../data/config.js");

function find() {
    return database.select('*').from("schemes");
}

function findById(id) {
    return database.first('*').from("schemes").where('id', id);
}

function findSteps(userId) {
    return database("steps as St")
    .join('schemes as Sc', 'St.scheme_id', 'Sc.id')
    .where("St.scheme_id", userId)
    .select('St.id', 'Sc.scheme_name', 'St.step_number', 'St.instructions')
    .orderBy('St.step_number');
}

module.exports = {
    find,
    findById,
    findSteps,

}