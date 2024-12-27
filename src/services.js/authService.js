const jwt = require('jsonwebtoken');
const { customerRepository,roleRepository } = require("../repository/customerRepo")

exports.registration = async(req,res)=>{
    try {
        const findCustomer = await customerRepository.findOne({where:{email: req.body.email}});  
        if(findCustomer) return "Email already exists"
        req.body.role_id = 2;
        await customerRepository.save(req.body);
        return 'Customer registered successfully';
    } 
    catch (error) {
        console.log(error);
    }
}

exports.login = async(req,res)=>{
    try {
        const findCustomer = await customerRepository.findOne({where:{email: req.body.email}});      
        if(!findCustomer) return 'Email or Password is incorrect';
        if(findCustomer.password!==req.body.password) return 'Email or Password is incorrect';
        const token = jwt.sign({ id: findCustomer.id, email: findCustomer.email }, process.env.JWT_SECRET, { expiresIn: '15m' });
        return token;
    } 
    catch (error) {
        console.log(error);
    }
}

exports.getCustomer = async(req,res)=>{
    try {
        const data = await customerRepository.find({
            relations:['role','books']
        })
        return data;
    } 
    catch (error) {
        console.log(error);
    }
}



// const data = await customerRepository.find({
    //     relations:['role']
    // })
    // const data = await roleRepository.find({
    //     relations:['customers']
    // })