import React from 'react';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  React.render(
    <Board knightPosition={knightPosition}/>,
    rootEl
  )
);
