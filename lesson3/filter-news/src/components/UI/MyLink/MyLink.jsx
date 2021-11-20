import React, {Component} from 'react';

class MyLink extends Component {
  render() {
    const {link = '/'} = this.props;

    return (
        <a href={link}>
          {this.props.children}
        </a>
    );
  }
}

export default MyLink;