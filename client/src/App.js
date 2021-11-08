import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Game from './containers/Game/Game'
import Play from './containers/Play/Play'
import Result from './containers/Result/Result'

class App extends Component {

  constructor() {
    super();
    this.state = {
      gameState: 'start',
      questions: {},
      score: 0,
      wrongQuestions: [],
      correctQuestions: []
    }
  }

  getData = async () => {
    let res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

    if (res.data.results) {
      this.setState({
        questions: res.data.results,
        gameState: 'play'
      })
    }
  }

  changeGameState(state, finalScore, finalCorrectQuestions, finalWrongQuestions) {
    if (state === 'play') {
      this.getData()
      return
    }
    if (state === 'end') {
      this.setState({
        gameState: 'end',
        score: finalScore,
        wrongQuestions: finalWrongQuestions,
        correctQuestions: finalCorrectQuestions
      })
    }
    if (state === 'start') {
      this.setState({
        gameState: 'start',
      })
    }

  }

  render() {
    let game = this.state.gameState === 'play' ?
      <Play
        questions={this.state.questions}
        finished={(state, score, finalCorrectQuestions, finalWrongQuestions) => this.changeGameState(state, score, finalCorrectQuestions, finalWrongQuestions)} /> :

      this.state.gameState === 'end' ?
        <Result
          score={this.state.score}
          questions={this.state.questions}
          wrongQuestions={this.state.wrongQuestions}
          correctQuestions={this.state.correctQuestions}
          click={(c) => this.changeGameState(c)}
        /> :

        this.state.gameState === 'start' ?
          <Game
            click={(c) => this.changeGameState(c)} /> : null


    return (
      <div className="App">
        <div className="app-header">
          {game}
        </div>
      </div>
    )
  }
}

export default App;
