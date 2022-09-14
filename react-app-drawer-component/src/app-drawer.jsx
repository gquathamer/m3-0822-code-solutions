import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class Modal extends React.Component {
  render() {
    let visibility;
    this.props.isOpen ? visibility = 'show' : visibility = 'hide';
    return <div onClick={this.props.clickHandler} className={`modal ${visibility}`}></div>;
  }
}

class Menu extends React.Component {
  render() {
    let visibility;
    this.props.isOpen ? visibility = 'show-menu' : visibility = 'menu';
    return (
      <div className={`menu ${visibility}`}>
        <h1>Menu</h1>
        <ul>
          {
            this.props.listItems.map(item => {
              return <li key={item.id} onClick={this.props.clickHandler}>{item.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const listItems = [
  { id: '1', name: 'About' },
  { id: '2', name: 'Get Started' },
  { id: '3', name: 'Sign In' }
];

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
      <div className='container'>
        <FontAwesomeIcon size='2xl' icon={faBars} onClick={this.handleClick} className='absolute' />
        <Menu listItems={listItems} isOpen={this.state.isOpen} clickHandler={this.handleClick}/>
        <Modal clickHandler={this.handleClick} isOpen={this.state.isOpen} />
      </div>
    );
  }
}
