import { useEffect, useState } from "react";
import "./App.css";
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Button from "react-bootstrap/Button";

function App() {
  let [num1, setnum1] = useState();
  let [num2, setnum2] = useState();
  let [sum, setSum] = useState();
  let [sub, setSub] = useState();
  let [div, setDiv] = useState();
  let [mul, setMul] = useState();
  let [result, setResult] = useState();
  let [operation, setOperation] = useState(null);

  // Sum Function
  let sumNum = () => {
    setResult(parseInt(num1) + parseInt(num2));
    setOperation("Sum");
  };

  // Sub Function
  let subNum = () => {
    if (parseInt(num1) < parseInt(num2)) {
      // Display message when num2 is less than num1
      setResult("Cannot subtract, first number is smaller");
      setOperation("Subtract");
    } else {
      setResult(parseInt(num1) - parseInt(num2));
      setOperation("Subtract");
    }
  };

  // Div Function
  let divNum = () => {
    if (parseInt(num2) === 0) {
      setResult("Cannot divide by zero Idiot!");
      setOperation("Division");
    } else {
      setResult(parseInt(num1) / parseInt(num2));
      setOperation("Division");
    }
  };
  // Mul Function
  let mulNum = () => {
    setResult(parseInt(num1) * parseInt(num2));
    setOperation("Multiplication");
  };

  useEffect(() => {
    console.log("rander again");
  }, []);

  return (
    <div className="App">
      <div className="con">
        <h1>Calculator</h1>
        <div>
          <span className="fs-5">First Number</span>
          <input
            className="input"
            type="number"
            placeholder="Enter First Number"
            onChange={(change) => {
              setnum1(change.target.value);
            }}
          ></input>
        </div>

        <div>
          <span className="fs-5">Second Number</span>
          <input
            type="number"
            placeholder="Enter Second Number"
            onChange={(change) => {
              setnum2(change.target.value);
            }}
          ></input>
        </div>

        <div className="mt-3">
          <Button className="btn me-lg-4" style={{ backgroundColor:'#8cb0b6' }} onClick={sumNum}>
            <PlusIcon width={20} />
          </Button>
          <Button className="btn me-lg-4"  style={{ backgroundColor:'#8cb0b6' }} onClick={subNum}>
            <MinusIcon width={20} />
          </Button>
          <Button className="btn me-lg-4" style={{ backgroundColor:'#8cb0b6' }}  onClick={mulNum}>
            <XMarkIcon width={20} />
          </Button>
          <Button className="btn me-lg-4" style={{ backgroundColor:'#8cb0b6', height:'38px', width:'46px'}} onClick={divNum}>
            {/* <span style={{ fontSize:'23px'}}> */}
            ÷
            {/* </span> */}
          </Button>
          {operation && (
            <h5 className="mt-2">
              {operation} : <span className="col">{result}</span>
            </h5>
          )}
          {!operation && result && (
            <h5 className="mt-2">
              <span className="text-danger">{result}</span>
            </h5>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
