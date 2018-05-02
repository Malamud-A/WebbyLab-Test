import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import Actions from '../flux/application/actions'

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleFormChange = this.handleFormChange.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }

  handleFormChange(e){
    this.setState({value: e.target.value});
    console.log(this.state.value);
  }

  findMovie(){
    Actions.findMovie(this.state.value)
  }

  render() {
    return (
      <div className="search-container">
        <input value={this.state.value} onChange={this.handleFormChange} type="text" placeholder={this.props.placeholder}/>
        <button onClick={this.findMovie}><FontAwesomeIcon icon={faSearch}/></button>
      </div>
    )
  }
}

export default SearchForm;