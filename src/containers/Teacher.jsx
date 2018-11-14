import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defeated: false,
    };
  }
  render() {
    // give the Teacher a random look
    let imgUrl = 'https://mbtskoudsalg.com/images/cartoon-teacher-png-4.png';
    if (Math.random() >= 0.5) imgUrl = 'http://pluspng.com/img-png/teacher-png-teacher-png-image-512.png';

    return(
      <div className='teacher-container'>
        <img src={imgUrl}></img>
      </div>
    );
  }
};

export default Teacher;
