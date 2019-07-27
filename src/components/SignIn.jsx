import React, { Component } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../firebase';

class SignIn extends Component {
  state = {
    googleOver: '-gray',
    facebookOver: '-gray'
  }
  /*
  state = { email: '', password: '' };
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };
*/
  handleOnMouseOver = e => {
    switch (e.target.id) {
      case "google-login":
        this.setState({ googleOver: '' })
        break;
      case "facebook-login":
        this.setState({ facebookOver: '' })
        break;
      default: break;
    }
  };

  handleOnMouseOut = e => {
    switch (e.target.id) {
      case "google-login":
        this.setState({ googleOver: '-gray' })
        break;
      case "facebook-login":
        this.setState({ facebookOver: '-gray' })
        break;
      default: break;
    }
  };

  render() {
    //const { email, password } = this.state;

    return (
      <form className="sign-in" onSubmit={this.handleSubmit}>
        <img
          id="google-login"
          src={require(`../assets/google${this.state.googleOver}.png`)}
          onClick={signInWithGoogle}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          alt="log in with google"
        />
        <img
          id="facebook-login"
          src={require(`../assets/facebook${this.state.facebookOver}.png`)}
          onClick={signInWithFacebook}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          alt="log in with facebook"
        />
        {/* FUTURE NOTES: make it with email aswell */}
      </form>

    );
  }
}

export default SignIn;
