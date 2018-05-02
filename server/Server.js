import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import * as db from './utils/dbUtils';

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/movies', (req, res) => {
  req.query.title ?
    db.findMovieByTitle(req.query.title).then(data => res.send(data)) :
    db.listMovies().then(data => res.send(data));
});

app.post('/movies', (req, res) => {
  db.addMovie(req.body).then(data => res.send(data));
});

app.delete('/movies/:id', (req, res) => {
  db.removeMovie(req.param('id')).then(data => res.send(data));
});

const server = app.listen(8080, () => {
  console.log(`Server is up and running on port 8080`);
});
