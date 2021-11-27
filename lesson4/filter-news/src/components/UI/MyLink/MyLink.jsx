import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyLink extends Component {
  render() {
    const {link} = this.props;

    return (
        <a href={link}>
          {this.props.children}
        </a>
    );
  }
}

MyLink.propTypes = {
  link: PropTypes.string
}

MyLink.defaultProps = {
  link: '/'
}

export default MyLink;