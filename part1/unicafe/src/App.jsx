import {useState} from "react";

function App() {
  const [goodComents, setGood] = useState(0);
  const [neutralComents, setNeutral] = useState(0);
  const [badComents, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);


  let increaseValue = (setValue, currValue) => {
      let newValue = currValue + 1;
      setValue(newValue);
      return newValue;
  }

  let increaseGood = () => {
    let newValue = increaseValue(setGood, goodComents);
    let newTotal = increaseValue(setTotal, total);
    setAverage((newValue - badComents) / newTotal);
    setPositive(newValue / newTotal * 100);
  }

  let increaseNeutral = () => {
    let newValue = increaseValue(setNeutral, neutralComents);
    let newTotal = increaseValue(setTotal, total);
    setTotal(newTotal);
    setPositive(goodComents / newTotal * 100);
  }

  let increaseBad = () => {
    let newValue = increaseValue(setBad, badComents);
    let newTotal = increaseValue(setTotal, total);
    setAverage((goodComents - newValue) / newTotal);
    setPositive(goodComents / newTotal * 100);
  }

  return (
      <div>
        <p>Give Feedback!</p>
        <button onClick={increaseGood}>Good</button>
        <button onClick={increaseNeutral}>Neutral</button>
        <button onClick={increaseBad}>Bad</button>

        <p>Statistics</p>
        <p>Good = {goodComents}</p>
        <p>Neutral = {neutralComents}</p>
        <p>Bad = {badComents}</p>
        <p>All = {total}</p>
        <p>Average = {average}</p>
        <p>Positive = {positive}%</p>
      </div>
  );
}

export default App
