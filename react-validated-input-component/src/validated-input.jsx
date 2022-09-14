import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      password: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const value = event.target.value;
    if (value.length < 8) {
      this.setState({
        validated: false,
        password: value
      });
    } else {
      this.setState({
        validated: true,
        password: value
      });
    }
  }

  render() {
    let validationSymbol;
    let color;
    let errorMessage;

    if (this.state.validated) {
      validationSymbol = faSquareCheck;
      color = 'green';
      errorMessage = '';
    } else if (!this.state.validated && this.state.password.length === 0) {
      validationSymbol = faSquareXmark;
      color = 'red';
      errorMessage = 'A password is required';
    } else {
      validationSymbol = faSquareXmark;
      color = 'red';
      errorMessage = 'Password is too short';
    }

    return (
      <form className='container'>
        <label htmlFor="password">Password</label>
        <input type="password" value={this.state.password} onChange={this.handleUserInput} />
        <FontAwesomeIcon icon={validationSymbol} size="2xl" className={color}/>
        <p className={color}>{errorMessage}</p>
      </form>
    );
  }
}
