import React from 'react'
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { incNumber } from './actions/actions';
import { decNumber } from './actions/actions';



const App = () => {

  const value = useSelector((state)=>state.changeNum);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        
        <div class="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a onClick={()=>dispatch(decNumber())} class="quantity__minus" title="Decrement" ><span>-</span></a>
            <input name="quantity" type="text" class="quantity__input" value={value} />
            <a onClick={()=>dispatch(incNumber())} class="quantity__plus" title="Increment" ><span>+</span></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
