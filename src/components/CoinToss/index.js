// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, headCount: 0, tailCount: 0}

  tossCoin = () => {
    const {headCount, tailCount} = this.state
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState({isHead: true, headCount: headCount + 1})
    } else {
      this.setState({isHead: false, tailCount: tailCount + 1})
    }
  }

  render() {
    const {isHead, headCount, tailCount} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {isHead === true ? (
            <img
              className="coin-image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="coin-image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {headCount + tailCount}</p>
            <p className="result">Heads: {headCount}</p>
            <p className="result">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
