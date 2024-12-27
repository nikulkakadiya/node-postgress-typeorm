const bookRepository = require("../repository/bookRepo");

exports.createBook = async(data)=>{
    try {
        await bookRepository.save(data);
        return "Book created successfully"
    }catch(e){
        console.log(e);        
    }
}

exports.getBook = async()=>{
    try {
        const data = await bookRepository.find({
            select:{
                id:true,
                name:true,
                customer:{
                    id:true,
                    name:true
                }
            },
            relations: ['customer']
        });
        return data;
    }catch(e){
        console.log(e);
        
    }
}