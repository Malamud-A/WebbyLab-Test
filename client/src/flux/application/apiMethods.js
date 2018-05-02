import axios from 'axios';

// import { apiPrefix } from '../../../../etc/config';

export default {
  showMovies() {
    console.log('movies requested');
    return axios.get("http://localhost:8080/movies")
  },

  getMovieByTitle(title) {
    return axios.get(`http://localhost:8080/movies?title=${title}`)
  },

  addMovie (data){
    return axios.post(`http://localhost:8080/movies`, data)
  },

  removeMovie(movieId) {
    return axios.delete(`http://localhost:8080/movies/${movieId}` )
  }
}