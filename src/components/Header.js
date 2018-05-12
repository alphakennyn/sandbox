import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{opacity: this.props.ratio}}>
        <div className="content-box"></div>
      </div>
    );
  }
}

export default Header;
