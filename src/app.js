const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()
const dataSource = require('./config/database');
const authRouter = require('./routes/authRoute');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(bodyParser.json())
app.use('/api/auth',authRouter)
app.use('/api/book',bookRouter)

app.all('*',(req,res,next)=>{
    console.log('hello');
})

app.listen(process.env.PORT,async()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    await dataSource.initialize()
        .then(() => {
            console.log("Connection with PostgreSQL database established...");
            return dataSource; // Return the DataSource instance
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
        });
})