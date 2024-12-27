const dataSource = require("../config/database")
const { Customer, Role } = require("../models")

const customerRepository = dataSource.getRepository(Customer)
const roleRepository = dataSource.getRepository(Role)

module.exports = {customerRepository,roleRepository}