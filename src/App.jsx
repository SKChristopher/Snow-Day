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
    };
  }

  render() {
    const { level, lives, score } = this.state;
    return(
      <div>
        <Databar level={level} lives={lives} score={score} />
        <Battlefield level={level} />
      </div>
    );
  }
};

export default App;