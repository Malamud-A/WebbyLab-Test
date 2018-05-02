import { EventEmitter } from 'events';
import Dispatcher from './dispatcher'
import * as constants from './constants';

const CHANGE_EVENT = "change";

let _movies = [];
let _selectedMovie = null;
let _Error = null;
let _isLoading = true;

function formatMovie(movie) {
  return {
    id: movie._id,
    title: movie.title,
    releaseYear: movie.releaseYear,
    stars: movie.stars
  };
}

const Store = Object.assign({}, EventEmitter.prototype, {
  isLoading(){
    return _isLoading;
  },

  getMovies(){
    return _movies;
  },

  selectedMovie(){
    return _selectedMovie;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function (action) {
  switch (action.type){
    case constants.FETCH_MOVIES_REQUEST: {
      _isLoading = true;
      Store.emitChange();
      break;
    }
    case constants.FETCH_MOVIES_SUCCESS: {
      _isLoading = false;
      _movies = action.movies.map ( formatMovie );
      _Error = null;

      Store.emitChange();
      break;
    }
    case constants.FETCH_MOVIES_FAIL: {
      _Error = action.error;

      Store.emitChange();
      break;
    }
    case constants.GET_MOVIE_BY_TITLE: {
      _isLoading = true;
      _movies = action.movies.map ( formatMovie );

      Store.emitChange();
      break;
    }
    case constants.SELECT_MOVIE: {
      _selectedMovie = action.id;

      Store.emitChange();
      break;
    }
    default: return state;

  }
});

export default Store;