import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInfo from '@fortawesome/fontawesome-free-solid/faInfo'
import Actions from '../flux/application/actions';
import Store from '../flux/application/store'
import Button from './Button'


class Movie extends React.Component {
  constructor() {
    super();
    this.selectMovie = this.selectMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  selectMovie() {
    Actions.selectMovie(this.props.id)
  }
  deleteMovie(){
    console.log(this.props.id);
    Actions.removeMovie(this.props.id)
  }

  render() {
    return (
      <div className="movie-container">
        <div className="movie-brief">
          <div className="movie-id"><span>{this.props.index}</span></div>
          <div className="movie-title"><span>{this.props.title}</span></div>
          <button onClick={this.selectMovie} className="more-details-button"><FontAwesomeIcon icon={faInfo}/></button>
        </div>
        <div className={this.props.id === Store.selectedMovie() ? "movie-info visible" : "movie-info"}>
          <ul>
            <li>Release Year: {this.props.release}</li>
            <li>Stars:
              <ul>
                {this.props.stars.map(item => {
                  return <li>{item}</li>
                })}
              </ul>
            </li>
          </ul>
          <Button onClick={this.deleteMovie} icon="faTimes" classname="react-button delete-button" />
        </div>
      </div>
    )
  }
}

export default Movie;