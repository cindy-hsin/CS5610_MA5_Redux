import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import allActions from '../action'; //equivalent to import allActions from '../action/index.js'
import './Cell.css';


export default function Cell(props) {
  console.log("Cell re-rendered");
  
  let className = "cell";
  const [isOn, setIsOn] = useState(false);

  if (isOn) {
    className += " black";
  } else {
    className += " white";
  }

  const dispatch = useDispatch();

  function changeColorAndCount2() {
    if (isOn) {
      setIsOn(false);
      dispatch(allActions.counterActions.decrement());
    } else {
      setIsOn(true);
      dispatch(allActions.counterActions.increment());
    }
  }


  return (
    <div className={className} onClick={()=>{
      changeColorAndCount2();
      // changeColorAndCount1();
      }}>
    </div>
  )



   // function changeColorAndCount1() {
  //   // call changeColorAndCount1 would result in count:-1 at the beginning.
  //   // because setIsOn() will not take effect immediately.
    
  //   setIsOn(!isOn);
  //   // So here, we can't expect ths isOn has the updated value.
  //   // So if it's the first click after the app has started,
  //   // the isOn here will still be false, and therefore a 
  //   // decrement action will be dispatched, resulting in a count:-1.
  //   if (isOn) {
  //     dispatch(allActions.counterActions.decrement());
  //   } else {
  //     dispatch(allActions.counterActions.increment());
  //   }
  // }
}


