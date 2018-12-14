import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const URL = "https://inspiration-board.herokuapp.com/boards/KTJ/cards"
const deleteURL = "https://inspiration-board.herokuapp.com/cards/"

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount(){
    axios.get(URL)
    .then((response) => {
      const card = response.data.map((info) => {

        return info.card
      })
        this.setState({
          cards: card
        });
      })
      .catch((error) =>{
        console.log(error.message);

        this.setState({
          errorMessage: error.message,
      })
    })
  }

  deleteCard = (id) => {
    axios.delete(`${deleteURL}${id}`)
      .then((response) => {
        let cardList  = this.state.cards.filter(element => element.id !== response.data.card.id)
        this.setState({cards: cardList});
      })
      .catch((error) => {
        console.log(error.message);
      })
  }


  render() {
    const cards = this.state.cards.map((card, i) =>{
    return <Card
          key={i}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          onDeleteCallback={this.deleteCard}
        />
      })


  return (
    <div className="board">
    {cards}
    </div>
  )
}
}

Board.propTypes = {

};

export default Board;
