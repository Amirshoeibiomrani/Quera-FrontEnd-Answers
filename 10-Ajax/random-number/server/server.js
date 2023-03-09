const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 1000) * 1468;
    res.send({ price: randomNumber });
});

app.listen(3000);
