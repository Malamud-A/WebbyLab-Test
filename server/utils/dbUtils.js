import mongoose from 'mongoose';
import '../models/Movie';

// import config from '../../etc/config.json';

const Movie = mongoose.model('Movie');

export function setUpConnection() {
  mongoose.connect(`mongodb://localhost:27017/movies`)
}

export function listMovies() {
  return Movie.find();
}

export function findMovieByTitle(title) {
  return Movie.find({
    title: `${title}`
  });
}

export function addMovie(data) {
  const movie = new Movie({
    title: data.title,
    releaseYear: data.releaseYear,
    stars: data.stars
  });

  return movie.save();
}

export function removeMovie(id) {
    return Movie.findByIdAndRemove(id);
}
