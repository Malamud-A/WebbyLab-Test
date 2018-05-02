import * as constants from './constants';
import Dispatcher from './dispatcher'
import api from './apiMethods'


const Actions = {
  fetchMovies() {
    Dispatcher.dispatch({
      type: constants.FETCH_MOVIES_REQUEST
    });

    api.showMovies().then( ({ data }) => {
      Dispatcher.dispatch({
        type: constants.FETCH_MOVIES_SUCCESS,
        movies: data
      })
    })
      .catch(err => Dispatcher.dispatch({
        type: constants.FETCH_MOVIES_FAIL,
        error: err
      }))
  },

  findMovie(title) {
    api.getMovieByTitle(title)
      .then( ({ data }) => {
        Dispatcher.dispatch({
          type: constants.GET_MOVIE_BY_TITLE,
          movies: data
        })
      })
      .catch(err => Dispatcher.dispatch({
        type: constants.FETCH_MOVIES_FAIL,
        error: err
      }))
  },

  selectMovie(id) {
    Dispatcher.dispatch({
      type: constants.SELECT_MOVIE,
      id: id,
    })
  },

  addMovie(data) {
    api.addMovie(data)
      .then(() => this.fetchMovies())
      .catch(err => {
        console.error(err);
      })
  },

  removeMovie(movieId) {
    api.removeMovie(movieId)
      .then(() => this.fetchMovies())
      .catch(err => {
        console.error(err)
      })
  }
};

export default Actions;