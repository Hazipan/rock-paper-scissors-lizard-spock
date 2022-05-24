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
      screen: 'app'
    }
  }

  rulesClose() {
    document.getElementById('rulesScreen').classList.add('hideRules');
  }

  rulesOpen() {
    document.getElementById('rulesScreen').classList.remove('hideRules');
  }

  handleClick(event) {
    console.log(event.target.value);
  }

  render() {
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

export default App;
