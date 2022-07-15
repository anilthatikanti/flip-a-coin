// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {status: 'head', H: 0, T: 0}

  flipCoin = () => {
    const {H, T} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult) {
      this.setState({status: 'tail', T: T + 1})
    } else {
      this.setState({status: 'head', H: H + 1})
    }
  }

  render() {
    const {status, H, T} = this.state
    const image =
      status === 'tail' ? (
        <img
          className="tossLogo"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
        />
      ) : (
        <img
          className="tossLogo"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      )

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="HeadOrTail">Heads (or) Tails</p>
          {image}
          <button type="button" className="btn" onClick={this.flipCoin}>
            Toss Coin
          </button>
          <div className="report">
            <p className="para">Total: {H + T}</p>
            <p className="para">Heads: {H}</p>
            <p className="para">Tails: {T}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
