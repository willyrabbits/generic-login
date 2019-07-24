import React from 'react';
import { signOut } from '../firebase';

const CurrentUser = ({ displayName, photoURL, email }) => {

  return (
    <section className="CurrentUser">
      {photoURL && <img src={photoURL} alt={displayName} />}
      <div className="CurrentUser--information">
        <h2>{displayName}</h2>
        <p className="email">{email}</p>
        <p className="created-at">today</p>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Mr. X',
  email: 'hello@gmail.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date(),
};

export default CurrentUser;
