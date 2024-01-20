const express = require("express");
require('dotenv').config()
const { connectToMongoDB } = require("./connect");
const cors = require('cors');

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth');
const corsOptions = require("./config/corsOptions");

const app = express();

connectToMongoDB(process.env.MONGODB_URI).then(()=>
    console.log("MongoDb connected")
);

app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


app.get('/api', (req,res)=>{
    res.send('<h1>Server route</h1>')
})

app.listen(8000, () => console.log("Server running on port 8000"))