import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defeated: false,
      imgUrl: 'https://mbtskoudsalg.com/images/cartoon-teacher-png-4.png',
      // could probably consolidate randomTopLocation and position
      randomTopLocation: 0,
      position: 0,
    };
  }

  componentDidMount = () => {
    // give the Teacher a random look
    let { imgUrl } = this.state;
    // TODO: make sure teachers don't stack or offset names if they do
    const randomTopLocation = `${Math.random() * 90}%`; // temporary solution to randomly placing teacher at the top, needs better math
    if (Math.random() >= 0.5) {
      imgUrl = 'http://pluspng.com/img-png/teacher-png-teacher-png-image-512.png';
    }
    // make teacher slide down screen
    this.moveDown();
    this.setState({ imgUrl, randomTopLocation });
  }

  moveDown = () => {
    let { position } = this.state;
    const that = this;
    function frame() {
      if (position === 650) {
        clearInterval(id);
      } else {
        position += 1; 
        that.setState({ position });
      }
    }
    const id = setInterval(frame, 10);
  }

  render() {
    const { defeated, imgUrl, randomTopLocation, position } = this.state;
    const { name } = this.props;
    // const randomTopLocation = Math.random() * 100 + '%';

    if (!defeated) {
      return (
        <div className="teacher-container" style={{ left: randomTopLocation, top: position }}>
          <img alt="Teacher" src={imgUrl} />
          <p>{name}</p>
        </div>
      );
    }
    return null;
  }
}

Teacher.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Teacher;
