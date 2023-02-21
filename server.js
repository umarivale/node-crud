const express = require('express');
// const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dbConnect = require('./dbConnect');
const {config} = require('dotenv')

//
const app = express();
config();
dbConnect();
const port = process.env.PORT || 5000;
//
app.use(express.json());
// app.use(cookieParser());

// routes
app.use('/',require('./routes/userRoutes'));

app.all('*',(req,res)=>{
    res.status(404).json({message:'404 record not found'});
})

app.listen(port,()=>{
    console.log(`server is running on :${port}`);
});