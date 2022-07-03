import React from 'react';
import './App.css';
import './Results.css';
// Image imports
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
import ResultButton from './components/ResultButton';

function storeScore(score) {
  localStorage.setItem('score', score);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: localStorage.getItem('score') || 0,
      prevScore: 0,
      choiceMade: false,
      win: false,
      // String references for class names
      playerSymbol: '',
      houseSymbol: '',
      // String reference for result message
      winMessage: 'default',
      // image refrences
      houseSrc: rock,
      playerSrc: rock
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
    // Generate number 1-5 to determine computer choice
    const random = Math.floor(Math.random() * 5);
    let pcChoice = '';
    let pcSymbol = '';
    switch (random) {
      case 1: pcChoice = 'rock'; pcSymbol = rock; break;
      case 2: pcChoice = 'paper'; pcSymbol = paper; break;
      case 3: pcChoice = 'scissors'; pcSymbol = scissors; break;
      case 4: pcChoice = 'lizard'; pcSymbol = lizard; break;
      default: pcChoice = 'spock'; pcSymbol = spock;
    }

    // Check win conditions and change result acocordingly
    const win = 'YOU WIN';
    const lose = 'YOU LOSE';
    let playerChoice = rock;
    let result = '';
    let point = 1;
    let didWin = '';
    switch (event.target.value) {
      case 'rock':
        playerChoice = rock;
        if (pcChoice === 'scissors' || pcChoice === 'lizard') {
          result = win;
          didWin = true;
        } else {
          result = lose;
          didWin = false;
          point = -1;
        }
        break;
      case 'paper':
        playerChoice = paper;
        if (pcChoice === 'rock' || pcChoice === 'spock') {
          result = win;
          didWin = true;
        } else {
          result = lose;
          didWin = false;
          point = -1;
        }
        break;
      case 'scissors':
        playerChoice = scissors;
        if (pcChoice === 'paper' || pcChoice === 'lizard') {
          result = win;
          didWin = true;
        } else {
          result = lose;
          didWin = false;
          point = -1;
        }
        break;
      case 'lizard':
        playerChoice = lizard;
        if (pcChoice === 'paper' || pcChoice === 'spock') {
          result = win;
          didWin = true;
        } else {
          result = lose;
          didWin = false;
          point = -1;
        }
        break;
      case 'spock':
        playerChoice = spock;
        if (pcChoice === 'scissors' || pcChoice === 'rock') {
          result = win;
          didWin = true;
        } else {
          result = lose;
          didWin = false;
          point = -1;
        }
        break;
      default:
        result = 'hm...';
        didWin = false;
    }

    // Tie conditonal
    if (pcChoice === event.target.value) {
      point = 0;
      result = 'IT\'S A TIE';
    }

    // Update state accordingly
    this.setState({
      prevScore: this.state.score,
      score: Number(this.state.score) + point,
      choiceMade: true,
      playerSymbol: event.target.value,
      houseSymbol: pcChoice,
      win: didWin,
      playerSrc: playerChoice,
      houseSrc: pcSymbol,
      winMessage: result
    });

    // Add score animation when moving to the results screen
    document.getElementById('score').classList.add('scoreAnimation');
    document.getElementById('prevScore').classList.add('prevScoreAnimation');

    storeScore(this.state.score + point);
  }

  playAgain() {
    this.setState({ choiceMade: false });
    // Remove score animation when moving back to main screen
    document.getElementById('score').classList.remove('scoreAnimation');
    document.getElementById('prevScore').classList.remove('prevScoreAnimation');
  }


  render() {
    if (this.state.choiceMade) {
      return (
        // Results screen
        <div className="Results">
          <header className='header' >
            <img src={logo} alt='logo' className='logo' />
            <Score value={this.state.score} prevValue={this.state.prevScore} />
          </header>
          <div class='results'>
            <div class='result'>
              <p>YOU PICKED</p>
              <ResultButton src={this.state.playerSrc} symbol={this.state.playerSymbol} party=' player' winner={this.state.win} />
            </div>
            <div class='result'>
              <p>THE HOUSE PICKED</p>
              <ResultButton src={this.state.houseSrc} symbol={this.state.houseSymbol} party=' house' winner={!this.state.win} />
            </div>
          </div>
          <div class='resultMessage'>
            <p className='winMessage'>{this.state.winMessage}</p>
            <button onClick={this.playAgain} className='playAgain'>PLAY AGAIN</button>
          </div>
        </div>
      )
    } else {
      return (
        // Main screen
        <div className="App">
          <header className='header' >
            <img src={logo} alt='logo' className='logo' />
            <Score value={this.state.score} />
          </header>
          <div className='pentaContainer'>
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
          </div>
          <button className='rulesButton' onClick={this.rulesOpen}>RULES</button>
          <Rules rules={rules} close={close} onClick={this.rulesClose} />
        </div>
      );
    }
  }
}

export default App;
