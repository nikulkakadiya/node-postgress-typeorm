const {DataSource} = require("typeorm")
const { Customer, Role, Book } = require("../models")

const dataSource = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Customer,Role, Book],
    synchronize:true
})
module.exports = dataSource