const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr")

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define('plot', {

})







module.exports = { db }