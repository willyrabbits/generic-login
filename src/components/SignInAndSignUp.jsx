import React, { useContext } from 'react'

import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInAndSignUp = () => (
  <div className="auth">
    <div className="welcome-greeting">
      Welcome
    </div>
    <SignIn />
    {/*<SignUp />*/}
  </div>
)

export default SignInAndSignUp;
