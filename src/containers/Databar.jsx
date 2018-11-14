import React, { Component } from 'react';

class Databar extends Component {
  render() {
    const { lives, level, score} = this.props;
    return(
      <div className='databar-container'>
        Lives : {lives}&nbsp;
        Level : {level}&nbsp;
        Score : {score}&nbsp;
      </div>
    );
  }
};

export default Databar;
