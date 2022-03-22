import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../action'; //equivalent to import allActions from '../action/index.js'
import './Cell.css';

export default function Cell(props) {
  let className = "cell";
  const [isOn, setIsOn] = useState(false);

  if (isOn) {
    className += " black";
  } else {
    className += " white";
  }


  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  // useEffect(()=> console.log(props.id + ' ' + className));

  useEffect(()=>{
    if (isOn) {
      dispatch(allActions.counterActions.increment());
    } else if (counter > 0) { // to prevent decrementing at the first render
      dispatch(allActions.counterActions.decrement());
    }
  }, [isOn]);

  return (
    <div className={className} onClick={()=>{
      setIsOn(!isOn);
      }}>
    </div>
  )
}
 