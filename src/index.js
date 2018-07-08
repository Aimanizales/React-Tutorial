import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Game';
import { FormTutorial } from './FormTutorial';
import LiftingStateUp from './LiftingStateUp';
import ThinkingInReact from './ThinkingInReact';
import './index.css';

const container1 = document.getElementById('root');
const container2 = document.getElementById('root2');
const container3 = document.getElementById('root3');
const container4 = document.getElementById('root4');

ReactDOM.render(<FormTutorial />, container1);
ReactDOM.render(<Game />, container2);
ReactDOM.render(<LiftingStateUp />, container3);
ReactDOM.render(<ThinkingInReact />, container4);

/* 
ReactDOM.render(<input type="text" value="hi" />, container3);
setTimeout(() => ReactDOM.render(<input type="text" value={null} />, container3), 1000);
*/