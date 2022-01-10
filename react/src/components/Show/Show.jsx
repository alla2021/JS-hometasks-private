 import React from 'react'
class Show extends React.Component {
  constructor() {
    super();
    this.state = { 
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((prevState) => {
      return {open: !prevState.open}
    })
  }

  render() {
    const content = "Lorem"
    return (
      <>
      <button onClick={this.handleClick} className='btn'>
        {this.state.open ? "Show" : "Hide"}
      </button>
      <div className='text'>
        {this.state.open ? `${content}` : null}
      </div>
      </>
    )
  }
};


export default Show;
