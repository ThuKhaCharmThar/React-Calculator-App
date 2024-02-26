import { useEffect, useState } from "react";
import "./App.css";
import { MinusIcon, PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "react-bootstrap/Button";

function App() {
  let [num1, setnum1] = useState();
  let [num2, setnum2] = useState();
  let [result, setResult] = useState(null);
  let [operation, setOperation] = useState(null);

  // ! Delete Function
  let clearAll = () => {
    setnum1('');
    setnum2('');
    setResult(null);
    setOperation(null);
  };

  // * Sum Function
  let sumNum = () => {
    if (!num1 || !num2) {
      setResult("Please enter both numbers");
      return;
    }
    setResult(parseFloat(num1) + parseFloat(num2));
    setOperation("Sum");
  };

  //* Subtract Function
  let subNum = () => {
    if (!num1 || !num2) {
      setResult("Please enter both numbers");
      return;
    }
    if (parseFloat(num1) < parseFloat(num2)) {
      // Display message when num2 is less than num1
      setResult("Cannot subtract, first number is smaller");
      setOperation("Subtract");
    } else {
      setResult(parseFloat(num1) - parseFloat(num2));
      setOperation("Subtract");
    }
  };

  // * Division Function
  let divNum = () => {
    if (!num1 || !num2) {
      setResult("Please enter both numbers");
      return;
    }
    if (parseFloat(num2) === 0) {
      setResult("Cannot divide by zero Idiot!");
      setOperation("Division");
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
      setOperation("Division");
    }
  };

  // * Multiplication Function
  let mulNum = () => {
    if (!num1 || !num2) {
      setResult("Please enter both numbers");
      return;
    }
    setResult(parseFloat(num1) * parseFloat(num2));
    setOperation("Multiplication");
  };

  useEffect(() => {
    console.log("Hello Rander");
  }, []);

  return (
    <div className="App">
      <div className="con">
        <h1>Calculator</h1>
        <div className=" mt-5">
          {/* <span className="fs-5">First Number</span> */}
          <input
            className="input"
            inputMode="decimal"
            value={num1}
            required
            type="number"
            placeholder="Enter First Number"
            onChange={(change) => {
              setnum1(change.target.value);
            }}
          ></input>
        </div>
        <div className=" mt-3">
          {/* <span className="fs-5">Second Number</span> */}
          <input
            type="number"
            value={num2}
            inputMode="decimal"
            placeholder="Enter Second Number"
            required
            onChange={(change) => {
              setnum2(change.target.value);
            }}
          ></input>
        </div>
        <div className="mt-3">
          <Button
            className="btn me-lg-3 rounded-circle"
            style={{ backgroundColor: "#8cb0b6" }}
            onClick={sumNum}
          >
            <PlusIcon width={20} />
          </Button>
          <Button
            className="btn me-lg-3 rounded-circle"
            style={{ backgroundColor: "#8cb0b6" }}
            onClick={subNum}
          >
            <MinusIcon width={20} />
          </Button>
          <Button
            className="btn me-lg-3 rounded-circle"
            style={{ backgroundColor: "#8cb0b6" }}
            onClick={mulNum}
          >
            <XMarkIcon width={20} />
          </Button>
          <Button
            className="btn me-lg-3 rounded-circle"
            style={{
              backgroundColor: "#8cb0b6",
              height: "38px",
              width: "46px",
            }}
            onClick={divNum}
          >
            ÷
          </Button>
          
          <Button
            className="btn btn-dark rounded-circle me-lg-3"
            onClick={clearAll}
          >
            <TrashIcon width={20} />
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
