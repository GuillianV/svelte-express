const express = require('express');
const app = express();
const axios = require('axios');
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(express.static('public'));


app.get('/giphy', (req, res) => {
    console.log(`Searching for a gif with the term: ${req.query.term}`);

    let params = req.query.term.replace(/ /g, '+');
    params += '&api_key='+process.env.API_KEY;
    params += '&limit=10';


    axios.get(`https://api.giphy.com/v1/gifs/search?q=${params}`)
        .then(function (response) {
            res.send({
                success: true,
                data: response.data.data
            })
        })
        .catch(function (error) {
            res.send({
                success: false,
                data: []
            })
        });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});