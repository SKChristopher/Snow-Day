import React, { Component } from 'react';

import Battlefield from './containers/Battlefield.jsx';

import './styles.scss';

class App extends Component {
  render() {
    return(
      <div>
        <Battlefield />
      </div>
    );
  }
};

export default App;