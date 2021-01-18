/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot'; // <<< REACT SNAPSHOT
import Routes from './Routes';

render(
    <Routes />, document.getElementById('root')
);
