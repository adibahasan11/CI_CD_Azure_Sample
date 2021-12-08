const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("Welcome, Adiba!")
})

app.listen(8080, ()=> {
    console.log('Server is listening to port 8080');
})