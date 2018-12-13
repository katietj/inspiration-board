import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <h2 className="card__content-text"> {this.props.text}</h2>
        <p className="card__content-emoji">{this.props.emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,

};

export default Card;
