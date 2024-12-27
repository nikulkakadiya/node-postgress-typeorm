const { createBook, getBook } = require("../services.js/bookService")

exports.createBook = async(req,res)=>{    
    if(req.user){
        req.body.customerId = req.user.id
    }    
    const data = await createBook(req.body);
    res.send({
        status: 200,
        data: data
    })
}

exports.getBook = async(req,res)=>{
    const data = await getBook();
    res.send({
        status: 200,
        data: data
    })
}