import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Increment and Decrement</div>
      <div onClick={() => setCount(count-1)}>
        -
      </div>
      <div>
        {count}
      </div>
      <div onClick={() => setCount(count+1)}>
        +
      </div>
    </div>
  );
}

export default App;
