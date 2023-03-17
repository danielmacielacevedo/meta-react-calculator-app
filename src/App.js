import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputUser = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputUser.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputUser.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result * Number(inputUser.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputUser.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputUser.current.value = '';
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div className="AppContainer">
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p className="ResultCalculator" ref={resultRef}> 
            {result} 
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputUser} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <div className="TopButtonsContainer">
            <div className="TopButtons">
              <button onClick={plus}>add</button> 
              <button onClick={minus}>subtract</button>
            </div>
            <div className="TopButtons">
              <button onClick={times}>multiply</button>
              <button onClick={divide}>divide</button>
            </div>
          </div>
          <div className="BottomButtons">
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset result</button>
          </div>
        </form> 
      </div>
      <div className="PoweredByDanielMacielAcevedo">
        <p>Powered by Daniel Maciel Acevedo</p>
        <a target={"_blank"} rel="noreferrer" href="https://github.com/danielmacielacevedo/react-calculator-app" ><span></span>ver codigo</a>
      </div>
    </div> 
  ); 
} 
 
export default App; 