import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import './index.css';
initializeIcons();

import { runWithAdal } from 'react-adal';
import adalContext from './api/adalConfig';
const DO_NOT_LOGIN = false;

runWithAdal(
    adalContext.AuthContext,
    () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    },
    DO_NOT_LOGIN
);
