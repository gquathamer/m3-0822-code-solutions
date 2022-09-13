import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      seconds: 0
    };
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.setState({
      isPlaying: !this.state.isPlaying
    },
    () => {
      if (this.state.isPlaying) {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      } else {
        clearInterval(this.timerID);
      }
    });
  }

  reset() {
    if (!this.state.isPlaying) {
      this.setState({
        seconds: 0
      });
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  render() {
    let button;
    if (this.state.isPlaying) {
      button = faPause;
    } else {
      button = faPlay;
    }
    return (
      <>
        <div className='container'>
          <div className='circle' onClick={this.reset}>
            <h1 className='time'>{this.state.seconds}</h1>
          </div>
          <FontAwesomeIcon icon={button} size='2xl' onClick={this.play} />
        </div>
      </>
    );
  }
}
