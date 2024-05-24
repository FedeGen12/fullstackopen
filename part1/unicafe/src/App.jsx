import {useState} from "react";

function App() {
  const [goodComents, setGood] = useState(0);
  const [neutralComents, setNeutral] = useState(0);
  const [badComents, setBad] = useState(0);

  let increaseValue = (setValue, currValue) => {
    return () => { setValue(currValue + 1); }
  }

  return (
      <div>
        <p>Give Feedback!</p>
        <button onClick={increaseValue(setGood, goodComents)}>Good</button>
        <button onClick={increaseValue(setNeutral, neutralComents)}>Neutral</button>
        <button onClick={increaseValue(setBad, badComents)}>Bad</button>

        <p>Statistics</p>
        <p>Good = {goodComents}</p>
        <p>Neutral = {neutralComents}</p>
        <p>Bad = {badComents}</p>
      </div>
  );
}

export default App
