import React from 'react';
import Radium from 'radium';

import Icon from '../Icon';
import IconButton from '../IconButton';

@Radium
class Searchbar extends React.Component {
  render() {
    return (
      <form style={[styles.form, this.props.style]} action="#" method="GET">
        <input className="searchBar__input" style={styles.input} name="search" placeholder="Search..." type="text" />
        <IconButton name="fa-search" />
      </form>
    );
  }
}

const styles = {
  form: {
    borderLeft: '1px solid #F87F70',
    borderRight: '1px solid #F87F70',
    float: 'left',
    height: '50px',
    margin: '0px 0px 0px 10%',
    outline: 'none'
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    height: '100%',
    paddingLeft: '10px',
    fontSize: '20px',
    transition: 'background-color .3s',
    ':focus': {
      background: 'white',
      color: '#ccc',
      outline: 'none'
    }
  }
}

export default Searchbar;
