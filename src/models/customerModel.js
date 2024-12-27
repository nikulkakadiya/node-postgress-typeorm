const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: 'customer',
    tableName: 'customers',

    columns:{
        id:{
            type:'int',
            primary:true,
            generated:true
        },
        name:{
            type:'varchar'
        },
        email:{
            type:'varchar',
            unique:true
        },
        password:{
            type:'varchar',
        },
        role_id:{
            type:'integer',
        },
        created_at: {
            type: 'timestamp',
            createDate: true, 
            default: () => "CURRENT_TIMESTAMP"
        },
        updated_at: {
            type: 'timestamp',
            updateDate: true, 
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP" 
        }
    },
    relations: {
        role: {
            type: 'many-to-one',
            target: 'role',     
            joinColumn: {
                name: 'role_id' 
            },
            onDelete: 'CASCADE' 
        },
        books: {
            type: 'one-to-many',
            target: 'book',
            inverseSide: 'customer'          
        }
    }
})