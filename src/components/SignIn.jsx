import React, { Component } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../firebase';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Welcome</h2>
        <button onClick={signInWithGoogle}>Google</button>
        <button onClick={signInWithFacebook}>Facebook</button>
        {/* FUTURE NOTES: make it with email aswell */}
      </form>
    );
  }
}

export default SignIn;
