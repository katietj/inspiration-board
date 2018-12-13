import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUnicode } from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

showEmoji(emoji) {
  return <p className="card__content-emoji"> {getUnicode(emoji)} </p>
}



  render() {
    return (
      <div className="card">
          <div className="card__content">
            <h2 className="card__content-text">{this.props.text}</h2>
            {this.props.emoji ? this.showEmoji(this.props.emoji) : " "}
          </div>
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
