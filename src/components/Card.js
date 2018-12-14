import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUnicode } from 'emoji-dictionary';

import './Card.css';



class Card extends Component {

showEmoji(emoji) {
  return <p className="card__content-emoji"> {getUnicode(emoji)} </p>
}

onDeleteHandler = (event) => {
   event.preventDefault();
   this.props.onDeleteCallback(this.props.id);
   console.log(this.id);
 }

  render() {
    return (
      <div className="card">
          <div className="card__content">
            <h2 className="card__content-text">{this.props.text}</h2>
            {this.props.emoji ? this.showEmoji(this.props.emoji) : " "}
            <button
              type="button"
              className="card__delete"
              onClick={this.onDeleteHandler}
            >
              x
            </button>
          </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDeleteCallback: PropTypes.func,

};

export default Card;
