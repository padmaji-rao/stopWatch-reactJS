import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isStart: false,
    seconds: 0,
  }

  onStart = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.timerId = setInterval(this.updateSeconds, 1000)
      this.setState(prevState => ({isStart: !prevState.isStart}))
    }
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isStart: !prevState.isStart}))
  }

  updateSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      isStart: false,
      seconds: 0,
    })
  }

  render() {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const secondsTime = seconds % 60
    const actualSeconds = secondsTime < 10 ? `0${secondsTime}` : secondsTime
    const actualMinutes = minutes < 10 ? `0${minutes}` : minutes
    return (
      <div className="bg-container">
        <h1 className="stopwatch-head">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-logo"
            />
            <p>Timer</p>
          </div>
          <h1 className="time">{`${actualMinutes}:${actualSeconds}`}</h1>
          <div className="buttons-container">
            <button
              onClick={this.onStart}
              type="button"
              className="time-button start"
            >
              Start
            </button>
            <button
              onClick={this.onStop}
              type="button"
              className="time-button stop"
            >
              Stop
            </button>
            <button
              onClick={this.onReset}
              type="button"
              className="time-button reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
