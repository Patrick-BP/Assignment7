const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routers/UserRouter');


const app = express();

app.use(cors());
app.use(express.json())

app.use('/users', userRouter);

app.use((req, res, next)=>{
    res.status(404).send({error:'API NOT SUPPORTED'})
})
app.use((err, req, res, next)=>{
    res.status(500).send({error: err.message});
})


mongoose.connect('mongodb://127.0.0.1:27017/usersDB')
.then(()=>{
    app.listen(3001,()=>console.log("listening on Port", 3001));
})