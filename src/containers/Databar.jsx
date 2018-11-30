import React from 'react';
import PropTypes from 'prop-types';

const Databar = ({ lives, level, score }) => (
  <div className="databar-container">
    Lives :
    {lives}
    &nbsp;
    Level :
    {level}
    &nbsp;
    Score :
    {score}
    &nbsp;
  </div>
);

Databar.propTypes = {
  lives: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Databar;
