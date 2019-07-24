import React, { useContext } from 'react';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';

import { UserContext } from '../providers/UserProvider'
import { signOut } from '../firebase';

const Authentication = ({ loading }) => {

  const user = useContext(UserContext)

  if (loading) return null;

  return (
    <div>{user ? (<div><CurrentUser {...user} /><button onClick={signOut}>Sign Out</button></div>) : <SignInAndSignUp />}</div>
  );
};

export default Authentication;
