const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo .json');
const recipeInfo = require('./data/recipeInfo.json');

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo);
})

app.get('/recipeInfo', (req, res) => {
    res.send(recipeInfo);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})