const express = require('express');
const app = express();
const PORT = 4578
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://viswajithmp321:xNCQIj3YRUh4yX4b@cluster0.6ie1ezi.mongodb.net/")
    .then(()=>{console.log("mongoseDB connected successfully")})
    .catch(()=>{console.log("Error conecting to mongoseDB")})

app.get('/',(req,res) => {
    res.send('server is malfunctoioning')
});

app.get('/about',(req,res) => {
    res.send('About')
})

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);

});