import React, { Component } from 'react';

import Teacher from './Teacher.jsx';

class Battlefield extends Component {
  render() {
    const { level } = this.props;
    const teachersToInvade = [];
    for (let i = 0; i < level; i += 1) teachersToInvade.push(<Teacher />);
    return(
      <div id='battlefield-container'>
        {teachersToInvade}
      </div>
    );
  }
};

export default Battlefield;
