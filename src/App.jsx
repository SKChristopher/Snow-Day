import React, { Component } from 'react';

import Databar from './containers/Databar.jsx';
import Battlefield from './containers/Battlefield.jsx';

import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      lives: 3,
      score: 0,
      userInput: '',
    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // update this.state.userInput to be the last 15 characters typed
    let { userInput } = this.state;
    if (event.key.length === 1) userInput = userInput.concat(event.key);
    if (userInput.length > 15) userInput = userInput.substr(1);
    this.setState({ userInput });
  }

  render() {
    const { level, lives, score } = this.state;
    return (
      <div>
        <Databar level={level} lives={lives} score={score} />
        <Battlefield level={level} />
      </div>
    );
  }
}

export default App;
