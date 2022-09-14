import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class Modal extends React.Component {
  render() {
    let visibility;
    this.props.toggle ? visibility = 'show' : visibility = 'hide';
    return <div className={`modal ${visibility}`}></div>;
  }
}

export class Menu extends React.Component {
  render() {
    let visibility;
    this.props.toggle ? visibility = 'show-menu' : visibility = '';
    return (
      <div className={`menu ${visibility}`}>
        <h1>Menu</h1>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Get Started</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='container' onClick={this.handleClick}>
        <FontAwesomeIcon size='2xl' icon={faBars} onClick={this.handleClick} className='absolute' />
        <Menu toggle={this.state.isOpen} />
        <Modal toggle={this.state.isOpen} />
      </div>
    );
  }
}
