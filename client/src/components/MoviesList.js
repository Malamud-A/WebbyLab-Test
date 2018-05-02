import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component {
  constructor() {
    super();
  }


  render() {
    console.log(this.props.movies);
    return (
      this.props.movies.length >= 1 ?
        (<div className="movies-container">
          {this.props.movies.map((item, i) => {
            return <Movie index={i + 1} title={item.title} id={item.id} release={item.releaseYear} stars={item.stars}/>
          })}
        </div>)
        : <div className="movies-container">
          <span>There is no movies</span>
        </div>
    )
  }
}

export default MoviesList;