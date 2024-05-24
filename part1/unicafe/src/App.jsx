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
        <p style={{fontSize: "30px", fontWeight: "bold"}}>Statistics</p>

        <table>
          <tbody>
          <StatisticRow text={"Statistic"} value={"Value"}/>
          <StatisticRow text={"Good"} value={goodComents}/>
          <StatisticRow text={"Neutral"} value={neutralComents}/>
          <StatisticRow text={"Bad"} value={badComents}/>
          <StatisticRow text={"All"} value={total}/>
          <StatisticRow text={"Average"} value={(goodComents - badComents) / total}/>
          <StatisticRow text={"Positive"} value={(goodComents / total * 100) + "%"}/>
          </tbody>
        </table>
      </div>
  );
}


const Button = ({text, clickHandler}) => {
    return (
        <button onClick={clickHandler}>{text}</button>
    );
}


const StatisticRow = ({text, value}) => {
    return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
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
