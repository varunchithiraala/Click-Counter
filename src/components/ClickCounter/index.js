import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-container">
        <h1 className="click-counter-heading">
          The button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="click-counter-description">
          Click the button to increase the count!
        </p>
        <div className="button-container">
          <button
            className="click-counter-button"
            onClick={this.onIncrementCount}
            type="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
