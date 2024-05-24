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
        <StatisticLine text={"Good"} value={goodComents} />
        <StatisticLine text={"Neutral"} value={neutralComents} />
        <StatisticLine text={"Bad"} value={badComents} />
        <StatisticLine text={"All"} value={total} />
        <StatisticLine text={"Average"} value={(goodComents - badComents) / total} />
        <StatisticLine text={"Positive"} value={(goodComents / total * 100) + "%"} />
      </div>
  );
}


const Button = ({text, clickHandler}) => {
    return (
        <button onClick={clickHandler}>{text}</button>
    );
}


const StatisticLine = ({text, value}) => {
    return (
        <p>{text} = {value}</p>
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

        <Button text={"Good"} clickHandler={increaseValue(setGood, goodComents)} />
        <Button text={"Neutral"} clickHandler={increaseValue(setNeutral, neutralComents)} />
        <Button text={"Bad"} clickHandler={increaseValue(setBad, badComents)} />

        <Statistics goodComents={goodComents}
                    neutralComents={neutralComents}
                    badComents={badComents}
        />
      </div>
  );
}

export default App
