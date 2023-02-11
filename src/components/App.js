import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [btn1On, setBtn1On] = useState(false);
  const [btn2On, setBtn2On] = useState(true);
//code here 
  
const handleClick = () => {
  setBtn1On(!btn1On);
  setBtn2On(!btn2On);
}
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
      {btn1On === true ? "ON" : "OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {btn2On === true ? "ON" : "OFF"}
      </button>
    </div>
  );
}


export default App;
