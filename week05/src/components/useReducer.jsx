import React, { useCallback, useMemo, useReducer, useState } from "react";

const ChildComponent = React.memo(({ childState }) => {
  console.log("child comp rerender");
  return (
    <div className="child-box">
      <p>childState: {childState}</p>
    </div>
  );
});

export const ReactMemo = () => {
  const [childState, setChildState] = useState("true");
  const [parentState, setParentState] = useState("true");
  return (
    <div className="parent-box">
      <div className="state-section">
        <p>parentState: {parentState}</p>
        <button onClick={() => setParentState(parentState === "true" ? "false" : "true")}>change parent state</button>
        <button onClick={() => setChildState(childState === "true" ? "false" : "true")}>change child state</button>
      </div>
      <ChildComponent childState={childState} />
    </div>
  );
};

export const UseReducer = () => {
  const counterReducer = (state, action) => {
    switch (action) {
      case "+":
        return ++state;
      case "-":
        return --state;
      default:
        return state;
    }
  };
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const calReducer = (state, action) => {
    switch (action) {
      case "+":
        return Number(a) + Number(b);
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return state;
    }
  };

  const [result, dispatchResult] = useReducer(calReducer, 0);

  return (
    <div className="reducer-container">
      <div className="counter-box">
        <h1>Inc/Dec Counter</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatchCounter("+")}>+</button>
        <button onClick={() => dispatchCounter("-")}>-</button>
      </div>

      <div className="calculator-box">
        <h1>Calculator</h1>
        <input type="number" onChange={(e) => setA(e.target.value)} placeholder="Input A" />
        <input type="number" onChange={(e) => setB(e.target.value)} placeholder="Input B" />
        <div className="calc-buttons">
          <button onClick={() => dispatchResult("+")}>+</button>
          <button onClick={() => dispatchResult("-")}>-</button>
          <button onClick={() => dispatchResult("*")}>*</button>
          <button onClick={() => dispatchResult("/")}>/</button>
        </div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export const UseMemo = () => {
  const heavyFunction = (num) => {
    console.log("run heavyFunction");
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += num;
    }
    return result;
  };

  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => heavyFunction(Number(num)), [num]);

  return (
    <div className="memo-box">
      <p>Result: {result}</p>
      <input type="number" onChange={(e) => setNum(e.target.value)} placeholder="Input number" />
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export const UseCallback = () => {
  const ChildComp = ({ cb }) => {
    return (
      <div className="callback-child-box">
        <button onClick={cb}>call cb</button>
      </div>
    );
  };

  const [state, changeState] = useState("true");
  const propFunc = useCallback(() => {
    console.log("child comp render");
  }, []);

  return (
    <div className="callback-parent-box">
      <p>parent state: {state}</p>
      <button onClick={() => changeState(state === "true" ? "false" : "true")}>change parent comp state</button>
      <ChildComp cb={propFunc} />
    </div>
  );
};
