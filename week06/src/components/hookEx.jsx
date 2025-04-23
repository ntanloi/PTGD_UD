import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";

export const HookSample = () => {
  return (
    <div className="hook-sample-container">
      <UseStateSample />
      <UseRefSample />
      <UseEffectSample />
      <UseReducerSample />
      <UseMemoSample />
      <ReactMemoSample />
    </div>
  );
};

const UseStateSample = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="hook-card">
      <p className="hook-title">useState sample</p>
      <p>num: {num}</p>
      <input
        type="number"
        className="hook-input"
        onChange={(e) => {
          setNum(e.target.value);
          console.log("rerender bởi useState Sample");
        }}
        placeholder="nhập num"
      />
    </div>
  );
};

const UseRefSample = () => {
  const focusInput = useRef(null);
  const countRef = useRef(0);

  return (
    <div className="hook-card">
      <p className="hook-title">useRef sample</p>
      <input
        type="text"
        ref={focusInput}
        onChange={(e) => {
          countRef.current = e.target.value;
          console.log("countRef:", countRef);
        }}
        className="hook-input"
      />
      <button onClick={() => focusInput.current.focus()}>Focus input</button>
    </div>
  );
};

const UseEffectSample = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <div className="hook-card">
      <p className="hook-title">useEffect sample</p>
      <div className="hook-list">
        {data.map((item, index) => (
          <p key={index}>- {item.name}</p>
        ))}
      </div>
    </div>
  );
};

const UseReducerSample = () => {
  const counterReducer = (state, action) => {
    switch (action) {
      case "+":
        return state + 1;
      case "-":
        return state - 1;
      default:
        return state;
    }
  };
  const [counter, counterDispatch] = useReducer(counterReducer, 0);
  return (
    <div className="hook-card">
      <p className="hook-title">useReducer sample</p>
      <p>counter: {counter}</p>
      <button onClick={() => counterDispatch("+")}>+</button>
      <button onClick={() => counterDispatch("-")}>-</button>
    </div>
  );
};

const UseMemoSample = () => {
  const [state, setState] = useState(1);
  const [number, setNumber] = useState(0);
  const superHeavyCalculation = (number) => {
    let result = 0;
    for (let i = 0; i < 10; i++) result += number;
    console.log("vừa tính toán siu nặng");
    return result;
  };
  const result = useMemo(() => superHeavyCalculation(number), [number]);

  return (
    <div className="hook-card">
      <p className="hook-title">useMemo sample</p>
      <p>result = {result}</p>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="thay đổi số để useMemo thực hiện phép tính"
        className="hook-input"
      />
      <button onClick={() => setState(state === 1 ? 2 : 1)}>
        đổi state để comp re render
      </button>
    </div>
  );
};

const ChildCompReactMemo = React.memo(({ num }) => {
  console.log("childcomp re render trong React.memo sample");
  return (
    <div className="hook-memo-child">
      <p>prop truyền vào là số {num % 2 === 0 ? "chẵn" : "lẻ"}</p>
    </div>
  );
});

const ReactMemoSample = () => {
  const [num, setNum] = useState(0);
  const inputRef = useRef(null);
  return (
    <div className="hook-card">
      <p className="hook-title">React.memo sample</p>
      <input type="number" className="hook-input" ref={inputRef} />
      <button onClick={() => setNum(Number(inputRef.current.value))}>
        bấm để truyền prop
      </button>
      <ChildCompReactMemo num={num} />
    </div>
  );
};
