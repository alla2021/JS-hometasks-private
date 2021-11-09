import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className={'btn ' + (this.state.active ? 'active' : 'disable')} >
        Click!!!
      </button>
    );
  }
}         

export default Button;

