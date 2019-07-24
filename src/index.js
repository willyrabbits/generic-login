import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Application from './components/Application';
import UserProvider from './providers/UserProvider'

render(
    <UserProvider>
        <Application />
    </UserProvider>,
    document.getElementById('root')
);
