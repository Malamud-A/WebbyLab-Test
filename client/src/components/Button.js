import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faSortAlphaDown from '@fortawesome/fontawesome-free-solid/faSortAlphaDown'



class Button extends React.Component {
  constructor(){
    super();
  }


  render(){
    let icon = null;

    switch (this.props.icon){
      case 'faPlus':
        icon = faPlus;
        break;
      case 'faTimes':
        icon = faTimes;
        break;
      case 'faSortAlphaDown':
        icon = faSortAlphaDown;
        break;
    }

    return(
      <div onClick={this.props.onClick} className={this.props.classname}><FontAwesomeIcon
        icon={icon}/>
      </div>
    )
  }
}

export default Button