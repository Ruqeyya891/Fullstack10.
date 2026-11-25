import React from 'react'

const Counter = ({ count , btnPlus, btnReset,btnMinus ,})=>{
    const artirFn =()=>{
        btnPlus(count + 1);
    };

    const azaltFn =()=>{
        btnMinus(count - 1);
    }
    const sifirlaFn =()=>{
        btnReset(0);
    };

    return(
  
        <div className="counter-buttons">
            <button className="minus-btn" onClick={azaltFn}>-</button>
            <button className ="reset-btn" onClick ={sifirlaFn}>Reset</button>
            <button className="plus-btn" onClick={artirFn}>+</button>
        </div>
    );
};

export default Counter;