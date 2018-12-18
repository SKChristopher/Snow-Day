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

      userInput: '',

      teachersOnField: {
        bill: 1,
        Thomas: 1,
        'Miss. Howard': 1,
      },

    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);

    // send endless wave of teachers
    const createTeacher = () => {
      // TODO: update this makeid function
      function makeid() {
        let text = '';
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < 5; i += 1) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
      const { teachersOnField } = this.state;
      const randomTeacher = makeid(); // TODO: generate random teacher names
      teachersOnField[randomTeacher] = 1;
      this.setState({ teachersOnField });
    };

    setInterval(createTeacher, 2500);
  }

  handleKeyDown = (event) => {
    // update this.state.userInput to be the last 25 characters typed
    let { userInput } = this.state;
    if (event.key.length === 1) userInput = userInput.concat(event.key);
    if (userInput.length > 25) userInput = userInput.substr(1);
    this.setState({ userInput });
    this.checkForDefeatedTeachers();
  }

  checkForDefeatedTeachers = () => {
    const { teachersOnField } = this.state;
    let { userInput } = this.state;
    Object.keys(teachersOnField).forEach((teacher) => {
      if (userInput.includes(teacher) && teachersOnField[teacher] !== 'defeated') {
        // defeat teacher and add to score
        this.updateScore(teacher.length);
        teachersOnField[teacher] = 'defeated';
        userInput = '';
      }
    });
    this.setState({ teachersOnField, userInput });
  }

  updateScore = (num) => {
    let { score } = this.state;
    score += num;
    this.setState({ score });
  }

  loseLife = (name) => {
    const { teachersOnField } = this.state;
    let { lives } = this.state;
    if (teachersOnField[name] !== 'defeated') {
      teachersOnField[name] = 'defeated';
      lives -= 1;
      console.log(name);
    }
    // TODO: add defeat logic here at 0 lives
    this.setState({ lives, teachersOnField });
  }

  render() {
    const {
      level, lives, score, teachersOnField,
    } = this.state;
    const { loseLife } = this;
    return (
      <div>
        <Databar level={level} lives={lives} score={score} />
        <Battlefield level={level} teachersOnField={teachersOnField} loseLife={loseLife} />
      </div>
    );
  }
}

export default App;
