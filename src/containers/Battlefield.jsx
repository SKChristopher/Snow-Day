/* eslint-disable */
import React, { Component } from 'react';

import Teacher from './Teacher.jsx';

class Battlefield extends Component {
  render() {
    const { level, teachersOnField } = this.props;
    const teachersToDeploy = Object.keys(teachersOnField);
    const teachersToInvade = [];
    teachersToDeploy.forEach((teacher, i) => {
      if (teachersOnField[teacher] !== 'defeated') teachersToInvade.push(<Teacher key={`Teacher${i}`} name={teacher} />);
    });
    return(
      <div id='battlefield-container'>
        {teachersToInvade}
      </div>
    );
  }
};

export default Battlefield;
