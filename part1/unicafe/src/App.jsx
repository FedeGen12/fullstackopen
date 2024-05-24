import {useState} from "react";

const Statistics = ({goodComents, neutralComents, badComents}) => {

  let total = goodComents + neutralComents + badComents;

  if (total === 0) {
    return (
        <div>
          <p>No feedback given</p>
        </div>
    );
  }

  return (
      <div>
        <p>Statistics</p>
        <p>Good = {goodComents}</p>
        <p>Neutral = {neutralComents}</p>
        <p>Bad = {badComents}</p>
        <p>All = {total}</p>
        <p>Average = {(goodComents - badComents) / total}</p>
        <p>Positive = {goodComents / total * 100}%</p>
      </div>
  );
}

function App() {
  const [goodComents, setGood] = useState(0);
  const [neutralComents, setNeutral] = useState(0);
  const [badComents, setBad] = useState(0);

  let increaseValue = (setValue, currValue) => {
    return () => {
      setValue(currValue + 1);
    }
  }

  return (
      <div>
        <p>Give Feedback!</p>
        <button onClick={increaseValue(setGood, goodComents)}>Good</button>
        <button onClick={increaseValue(setNeutral, neutralComents)}>Neutral</button>
        <button onClick={increaseValue(setBad, badComents)}>Bad</button>

        <Statistics goodComents={goodComents}
                    neutralComents={neutralComents}
                    badComents={badComents}
        />
      </div>
  );
}

export default App
