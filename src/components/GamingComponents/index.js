import {Component} from 'react'

import './index.css'

class GamingComponents extends Component {
  state = {count: 1}

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="game-name">ROCK</h1>
            <h1 className="game-name">PAPER</h1>
            <h1 className="game-name">SCISSORS</h1>
          </div>
          <div className="score-container">
            <h1 className="score-heading">score</h1>
            <h1 className="score-heading">{count}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default GamingComponents
