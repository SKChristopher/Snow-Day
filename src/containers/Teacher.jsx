import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defeated: false,
      imgUrl: 'https://mbtskoudsalg.com/images/cartoon-teacher-png-4.png'
    };
  }

  componentDidMount = () => {
    // give the Teacher a random look
    let { imgUrl } = this.state;
    if (Math.random() >= 0.5) {
      imgUrl = 'http://pluspng.com/img-png/teacher-png-teacher-png-image-512.png';
      this.setState({ imgUrl });
    }
  }

  render() {
    const { defeated, imgUrl } = this.state;
    const { name } = this.props;

    if (!defeated) {
      return (
        <div className="teacher-container">
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
