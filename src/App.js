import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const RotatingThingy = () => {
  const [angle, setAngle] = useState(0)
  useEffect(() => {
    const ret = window.requestAnimationFrame(() => {
      setAngle(angle+4)
    })
    return () => window.cancelAnimationFrame(ret)
  })
  return (
    <img style={{transform: `rotate(${angle}deg)`}} src={logo} className="App-logo" alt="logo" />
  )
}

const RandomThing = () => {
  console.log('here')
  return (<div>
    {Array.from({length: 200000}, (v, i) => i).map(val =>
      <div key={val}>{val}</div>
    )}
  </div>)
}

function App() {

  return (
    <div className="App">
      <RotatingThingy />
      <RandomThing />
    </div>
  );
}

export default App;
