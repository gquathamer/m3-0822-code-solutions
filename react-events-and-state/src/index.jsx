import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button onClick={this.handleClick}>Button</button>;
    } else {
      return <button onClick={this.handleClick}>Thanks!</button>;
    }
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<CustomButton />);