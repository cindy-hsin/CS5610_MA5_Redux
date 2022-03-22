import React from 'react';
import {useSelector} from 'react-redux';
import Cell from './Cell';
import './App.css';


function App() {
  // const [count, setCount] = useState(0);
  const counter = useSelector(state => state.counter);

  // const dispatch = useDispatch();
  
  // To trigger an increment, decrement:
  // dispatch(allActions.counterActions.increment());



  return (
    <div>
      <div>Counter: {counter}</div>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );

}

export default App;