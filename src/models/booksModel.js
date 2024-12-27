const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name:"book",
    tableName: "books",
    columns:{
        id:{
            type:'int',
            primary:true,
            generated:true
        },
        name:{
            type:'varchar'
        },
        customerId:{
            name:'customer_id',
            type:'int'
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
    relations:{
        customer:{
            type: 'many-to-one',
            target:'customer',
            joinColumn: {
                name: 'customer_id',
            }
        }
    }
});