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

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefInfo.find(n=> n.id === id);
    res.send(selectedChef);
})

app.get('/recipeInfo', (req, res) => {
    res.send(recipeInfo);
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe= recipeInfo.filter(n => n._id === id);
    res.send(selectedRecipe);
})

app.listen(port, () => {
    console.log(`Chinese Food API is running on port: ${port}`)
})