const { registration, login, getCustomer } = require("../services.js/authService");

exports.registration = async (req,res)=>{    
    const data = await registration(req,res)
    res.send({
        status: 200,
        message: data
    })
}

exports.login = async (req,res)=>{
    const data = await login(req,res)
    res.send({
        status: 200,
        message: 'Logged in successfully',
        token: data
    })
}

exports.getCustomer = async (req,res)=>{
    console.log(req.user);
    
    const data = await getCustomer(req,res)
    res.send({
        status: 200,
        data: data
    })
}