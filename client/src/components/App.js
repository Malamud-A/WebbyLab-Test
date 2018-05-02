import React from 'react';

import Store from '../flux/application/store'
import Actions from '../flux/application/actions'

import SearchForm from './SearchForm.js'
import Button from './Button';
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie"

class App extends React.Component {
  constructor() {
    super();
    this.getStateFromFlux = this.getStateFromFlux.bind(this);
    this._onChange = this._onChange.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.sortAlphabetic = this.sortAlphabetic.bind(this);
  }

  getStateFromFlux() {
    return {
      isLoading: Store.isLoading(),
      movies: Store.getMovies(),
      selectedMovie: Store.selectedMovie()
    };
  }

  setInitialState() {
    this.setState(this.getStateFromFlux())
  }

  componentWillMount() {
    Actions.fetchMovies();
    this.setInitialState();
  }

  componentDidMount() {
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    Store.removeListener(this._onChange)
  }

  _onChange() {
    this.setState(this.getStateFromFlux());
    console.log(this.state);
  }

  sortAlphabetic() {
    this.setState({
      movies: this.state.movies.sort((a, b) => {
        if (a.title > b.title)
          return 1;
        if (a.title < b.title)
          return -1;
        if (a.title === b.title)
          return 0
      })
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app-container">
        <h1>Movie Catalog</h1>
        <SearchForm placeholder="Enter a movie title"/>
        <Button
          classname="react-button sort-button"
          onClick={this.sortAlphabetic}
          icon="faSortAlphaDown"
        />
        <MoviesList movies={this.state.movies}/>
        <AddMovie/>
      </div>
    )
  }
}

export default App;