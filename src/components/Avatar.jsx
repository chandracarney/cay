import React from 'react';
import Radium from 'radium';

class Avatar extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    size: React.PropTypes.string,
    roundCorners: React.PropTypes.bool
  }

  getStyles(size) {
    let s = {};

    if (size === 'small') {
      s = {
        width: 38,
        height: 38
      };
    } else if (size === 'medium') {
      s = {
        width: 48,
        height: 48
      };
    } else if (size === 'large') {
      s = {
        width: 78,
        height: 78
      };
    }

    if (Number.isInteger(size)) {
      s = {
        width: size - 2,
        height: size - 2
      };
    }

    if (this.props.roundCorners) {
      s = Object.assign({}, s, {borderRadius: s.width / 2 + 1});
    }

    return s;
  }

  render() {
    return (
      <div style={[
        styles.base,
        this.getStyles(this.props.size),
        this.props.style
      ]}>
        <img style={styles.image} src={this.props.src} />
      </div>
    );
  }
}

export default Radium(Avatar);

const styles = {
  base: {
    border: '1px solid rgba(0, 0, 0, .08)',
    overflow: 'hidden'
  },
  image: {
    width: '100%'
  }
};
