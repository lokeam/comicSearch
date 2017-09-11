import React, { Component } from 'react';
import LetterList from '../containers/letter_list';
import CharacterList from '../containers/character_list';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
      	<LetterList />
      	<CharacterList />
      </div>
    );
  }
}
