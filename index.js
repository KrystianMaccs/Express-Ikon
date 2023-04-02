const express = require('express');
require('dotenv').config()
const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./app/controllers/album');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/albums', db.getAlbums);
app.get('/albums/:id', db.getAlbumById);
app.post('/albums', db.createAlbum);
app.put('/albums/:id', db.updateAlbum);
app.delete('/albums/:id', db.deleteAlbum);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App running on port ${process.env.PORT || 3000}.`)
});