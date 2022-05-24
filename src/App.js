import React from 'react';
import './App.css';
// Image imports
import pentagon from './images/bg-pentagon.svg';
import logo from './images/logo-bonus.svg';
import rock from './images/icon-rock.svg';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';
import lizard from './images/icon-lizard.svg';
import spock from './images/icon-spock.svg';
import rules from './images/image-rules-bonus.svg';
import close from './images/icon-close.svg';
// Component imports
import Score from './components/Score.js';
import Button from './components/Button.js';
import Rules from './components/Rules.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      choiceMade: false,
      playerChoice: '',
      houseChoice: '',
      win: 'default'
    }

    this.handleClick = this.handleClick.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  rulesClose() {
    document.getElementById('rulesScreen').classList.add('hideRules');
  }

  rulesOpen() {
    document.getElementById('rulesScreen').classList.remove('hideRules');
  }

  handleClick(event) {
    console.log(`${event.target.value} selected`);
    // Generate number 1-5 to determine computer choice
    console.log(Math.floor(Math.random() * 5));
    const random = Math.floor(Math.random() * 5);
    let pcChoice = '';
    switch (random) {
      case 1: pcChoice = 'rock'; break;
      case 2: pcChoice = 'paper'; break;
      case 3: pcChoice = 'scissors'; break;
      case 4: pcChoice = 'lizard'; break;
      default: pcChoice = 'spock';
    }

    // Check win conditions and change result acocordingly
    const win = 'You Win!'
    const lose = 'You Lose.'
    let result = '';
    let point = 1;
    switch (event.target.value) {
      case 'rock':
        if(pcChoice === 'scissors' || pcChoice === 'lizard') {
          result = win;
        } else {
          result = lose;
          point = -1;
        }
        break;
      case 'paper':
        if(pcChoice === 'rock' || pcChoice === 'spock') {
          result = win;
        } else {
          result = lose;
          point = -1;
        }
        break;
      case 'scissors':
        if(pcChoice === 'paper' || pcChoice === 'lizard') {
          result = win;
        } else {
          result = lose;
          point = -1;
        }
        break;
      case 'lizard':
        if(pcChoice === 'paper' || pcChoice === 'spock') {
          result = win;
        } else {
          result = lose;
          point = -1;
        }
        break;
      case 'spock':
        if(pcChoice === 'scissors' || pcChoice === 'rock') {
          result = win;
        } else {
          result = lose;
          point = -1;
        }
        break;
      default:
        result = lose;
        console.log(lose);
    }

    this.setState({
      score: this.state.score + point,
      choiceMade: true,
      playerChoice: event.target.value,
      houseChoice: pcChoice,
      win: result
    });
  }

  playAgain() {
    this.setState({choiceMade: false});
  }
    

  render() {
    if (this.state.choiceMade) {
      return (
        <div className="App">
          <h1>You selected: {this.state.playerChoice}</h1>
          <p>The house selected: {this.state.houseChoice}</p>
          <p>{this.state.win}</p>
          <button onClick={this.playAgain}>Play again!</button>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className='header' >
            <img src={logo} alt='logo' className='logo' />
            <Score value={this.state.score} />
          </header>
          <img src={pentagon} alt='' className='pentagon' />
          <div className='pentaTop'>
            <Button src={scissors} symbol='scissors' onClick={this.handleClick} />
          </div>
          <div className='pentaMiddle'>
            <Button src={spock} symbol='spock' onClick={this.handleClick} />
            <Button src={paper} symbol='paper' onClick={this.handleClick} />
          </div>
          <div className='pentaBottom'>
            <Button src={lizard} symbol='lizard' onClick={this.handleClick} />
            <Button src={rock} symbol='rock' onClick={this.handleClick} />
          </div>
          <Rules rules={rules} close={close} onClick={this.rulesClose} />
          <button className='rulesButton' onClick={this.rulesOpen}>RULES</button>
        </div>
      );
    }
  }
}

export default App;
