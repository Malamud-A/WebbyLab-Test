import React from 'react';
import Actions from '../flux/application/actions';
import Button from './Button';

class addMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      releaseYear: null,
      starsString: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleReleaseChange = this.handleReleaseChange.bind(this);
    this.handleStarsChange = this.handleStarsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTitleChange(e){
    this.setState({ title: e.target.value })
  }

  handleReleaseChange(e){
    this.setState({ releaseYear: Number(e.target.value) })
  }

  handleStarsChange(e){
    this.setState({ starsString: e.target.value });
    console.log(this.state.starsString);
  }

  handleSubmit() {
    console.log(this.state);
    Actions.addMovie({
      title: this.state.title,
      releaseYear: this.state.releaseYear,
      stars: this.state.starsString.split(',')
    });
  }

  render() {
    return(
      <div className="add-movie-container">
        <span>Add a new movie</span>
        <div className="form">
          <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" type="text"/>
          <input onChange={this.handleReleaseChange} value={this.state.releaseYear} placeholder="Release Year" type="text"/>
          <input onChange={this.handleStarsChange} value={this.state.starsString} placeholder="Stars(coma separated)" type="text"/>
          <Button onClick={this.handleSubmit} classname="react-button add-button" icon="faPlus"/>
        </div>
      </div>
    )
  }
}

export default addMovie;