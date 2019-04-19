import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'office-ui-fabric-core/dist/css/fabric.min.css';
import { initializeIcons } from '@uifabric/icons';
import './index.css';

initializeIcons();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
