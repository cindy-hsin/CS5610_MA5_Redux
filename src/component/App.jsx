import React from 'react';
import {useSelector} from 'react-redux';
import Cell from './Cell';
import './App.css';


function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <div className='counterTitle'>Counter: {counter}</div>
      <div className='grid'>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>

    </div>
  );

}

export default App;