const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middelware Setup
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send('E-LearningHub Project is Running')
})

app.listen(port, () =>{
    console.log(`The Server Running Port is ${port}`)
})