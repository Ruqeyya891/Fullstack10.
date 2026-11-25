import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)
  const data = (value) => {
    setCount(value);
  };

  return (
    <div className="App">
      <div className ="counter-card">
        <h1>Counter App</h1>
        <div className="count-number">{count}</div>

        <Counter 
        count={count}
        btnPlus={data}
        btnMinus={data}
        btnReset={data}
        />

        <div className ="message">
          <Message count={count}/>
        </div>
      </div>
  </div>
  )
}

export default App
