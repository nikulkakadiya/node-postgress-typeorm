const dataSource = require("../config/database")
const { Book } = require("../models")

const bookRepository = dataSource.getRepository(Book);

module.exports = bookRepository;