import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    let positionClass = 'left';
    let textContentClass = 'OFF';
    let backgroundColorClass = 'gray-background';

    if (this.state.isToggled) {
      positionClass = 'right';
      textContentClass = 'ON';
      backgroundColorClass = 'green-background';
    } else {
      positionClass = 'left';
      textContentClass = 'OFF';
      backgroundColorClass = 'gray-background';
    }

    return (
      <>
        <div onClick={this.toggle} className={`parent ${backgroundColorClass}`}>
          <div className={`toggle ${positionClass}`}></div>
          <h2 className='text'>{textContentClass}</h2>
        </div>
      </>
    );
  }
}
