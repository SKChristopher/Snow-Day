import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defeated: false,
      name: 'TeacherNamePlaceholder',
    };
  }

  render() {
    const { defeated, name } = this.state;
    // give the Teacher a random look
    let imgUrl = 'https://mbtskoudsalg.com/images/cartoon-teacher-png-4.png';
    if (Math.random() >= 0.5) imgUrl = 'http://pluspng.com/img-png/teacher-png-teacher-png-image-512.png';

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

export default Teacher;
