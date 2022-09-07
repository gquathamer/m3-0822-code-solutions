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
    const parent = 'parent';
    const toggle = 'toggle';
    let position = 'left';

    if (this.state.isToggled) {
      position = 'right';
    } else {
      position = 'left';
    }

    return (
      <>
        <div className={parent}>
          <div onClick={this.toggle} className={`${toggle} ${position}`}></div>
        </div>
      </>
    );
  }
}
