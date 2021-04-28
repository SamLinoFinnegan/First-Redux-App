import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, signIn } from "./actions"
import './App.css';

function App() {
  const counter = useSelector(state => state.count)
  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The State of my counter is: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>Sign in</button>



      {isLogged === true ? <h3>Something Something Something</h3> : ""}
    </div>
  );
}

export default App;
