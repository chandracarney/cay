import React from 'react';
import Radium from 'radium';

@Radium
class Dropdown extends React.Component {
  render() {
    return (
      <div style={styles}>Dropdown</div>
    );
  }
}

var styles = {
  backgroundColor: 'white',
  padding: '10px'
};

export default Dropdown;
