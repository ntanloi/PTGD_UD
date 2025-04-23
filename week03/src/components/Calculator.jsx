import { useState } from "react";

export default function Calculator() {
  let [money, setMoney] = useState(0);
  let [rating, setRating] = useState(0);
  let [goal, setGoal] = useState(0);
  let [rowList, setRowlist] = useState([]);

  function handelChangeMoney(e) {
    setMoney(parseFloat(e.target.value));
  }

  function handelChangeRating(e) {
    setRating(parseFloat(e.target.value));
  }

  function handelChangeGoal(e) {
    setGoal(parseFloat(e.target.value));
  }

  function calcute() {
    let newRowList = [];
    let tempMoney = money;
    let tempResult = tempMoney * (1 + rating / 100);
    let year = new Date().getFullYear();
    newRowList.push({ year: year, money: tempMoney, rate: rating, result: tempResult });
    while (tempResult < goal) {
      year++;
      tempMoney = tempResult;
      tempResult = tempMoney * (1 + rating / 100);
      newRowList.push({ year: year, money: tempMoney, rate: rating, result: tempResult });
    }
    setRowlist(newRowList);
  }

  return (
    <div>
        <h1>Investment Calculator</h1>
      <div className="input-row">
        <p>Money</p>
        <input type="number" onChange={handelChangeMoney} />
      </div>
      <div className="input-row">
        <p>Rating</p>
        <input type="number" onChange={handelChangeRating} />
      </div>
      <div className="input-row">
        <p>Goal</p>
        <input type="number" onChange={handelChangeGoal} />
      </div>
      <button onClick={calcute}>Calculate</button>
      <table className="calculator-table">
        <thead>
          <tr>
            <td>Year</td>
            <td>Money</td>
            <td>Rate</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {rowList.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.money.toFixed(1)}</td>
              <td>{item.rate}</td>
              <td>{item.result.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}