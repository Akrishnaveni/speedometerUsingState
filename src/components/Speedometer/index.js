import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
    })
  }
  applyBreak = () => {
    this.setState(prevState => {
      if (prevState > 0) {
        return {count: prevState.count - 10}
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="description">speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button type="button" className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
