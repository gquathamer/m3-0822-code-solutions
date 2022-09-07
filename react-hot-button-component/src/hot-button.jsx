import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
    this.incrementButton = this.incrementButton.bind(this);
  }

  incrementButton() {
    this.setState(previousState => ({
      numClicks: previousState.numClicks + 1
    }));
  }

  render() {
    let backgroundColor = 'deep-purple';

    if (this.state.numClicks >= 3 && this.state.numClicks < 6) {
      backgroundColor = 'light-purple';
    } else if (this.state.numClicks >= 6 && this.state.numClicks < 9) {
      backgroundColor = 'salmon';
    } else if (this.state.numClicks >= 9 && this.state.numClicks < 12) {
      backgroundColor = 'peach';
    } else if (this.state.numClicks >= 12 && this.state.numClicks < 15) {
      backgroundColor = 'yellow';
    } else if (this.state.numClicks >= 15) {
      backgroundColor = 'white';
    }

    return <button onClick={this.incrementButton} className={`btn ${backgroundColor}`}>Hot Button</button>;
  }
}

export default HotButton;
