import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
      errorMessage: ''
    };
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
      errorMessage: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddCardCallback({
      text: this.state.text,
      emoji: this.state.emoji,
    })

    console.log(event);
    this.resetState();
  }

  makeEmoji = () => {

    const emojiList = EMOJI_LIST.map((emojiWord) => {
      return (
       <option key="emojiWord"> {emoji.getUnicode(emojiWord)} </option>
    );
  });
  return emojiList
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-card-form" id="new-card-form" className="new-card-form">
        <div className="new-card-form__form">
        <textarea  name="text" className="new-card-form__form-textarea" placeholder="Inspiration goes here!" onChange={this.onFormChange} value={this.state.text} />
        <label className="new-card-form__form-select">Pick an Emoji</label>
        <select name="emoji" className="new-card-form__form-select" onChange={this.onFormChange} value={this.state.emoji}>
        {this.makeEmoji()}
        </select>
        <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
        </div>
      </form>
    );
  }


}

NewCardForm.propTypes = {
  onAddCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
