import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


const RandomThing = () => {
  return (<div>
    {Array.from({length: 5000}, (v, i) => i).map(val =>
      <div key={val}>{val}</div>
    )}
  </div>)
}

function App() {
  const [angle, setAngle] = useState(0)
  useEffect(() => {
    const ret = window.requestAnimationFrame(() => {
      setAngle(angle+4)
    })
    return () => window.cancelAnimationFrame(ret)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img style={{transform: `rotate(${angle}deg)`}} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RandomThing />
    </div>
  );
}

export default App;
