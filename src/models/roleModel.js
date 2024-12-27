const {EntitySchema} = require('typeorm')

module.exports = new EntitySchema({
    name:'role',
    tableName: 'roles',
    columns:{
        id:{
            type: 'int',
            primary: true,
            generated: true
        },
        name:{
            type: 'enum',
            enum: ['admin', 'customer'],
            default: 'customer'
        }
    },
    relations:{
        customers:{
            type: 'one-to-many',
            target:'customer',
            inverseSide: 'role'
        }
    }
})