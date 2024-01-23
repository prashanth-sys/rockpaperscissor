import {Component} from 'react'
import GamePopup from '../GamePopup'
import './index.css'

class GamingComponents extends Component {
  state = {count: 0}

  onClickResultsView = () => {}

  render() {
    const {count} = this.state
    const {choicesList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="heading-container">
            <h1 className="game-name">
              ROCK <br />
              PAPER <br />
              SCISSORS
            </h1>
          </div>

          <div className="score-container">
            <p className="score-heading">score</p>
            <p className="score-heading">{count}</p>
          </div>
        </div>

        <div>
          {choicesList.map(image => (
            <div key={image.id} className="image-container">
              <button
                type="button"
                className="game-button"
                data-testid={`${image.id.toLowerCase()}Button`}
                onClick={this.onClickResultsView}
              >
                <img src={image.imageUrl} alt={image.id} className="image" />
              </button>
            </div>
          ))}
        </div>

        <div className="button-container">
          <GamePopup />
        </div>
      </div>
    )
  }
}

export default GamingComponents
