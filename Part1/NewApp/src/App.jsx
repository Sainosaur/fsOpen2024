import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  switch (good + bad + neutral) {
    case 0:
      return (
        <div>
          <h2>Statistics</h2>
          <p>No feedback given</p>
        </div>
      )
    default:
      return (
        <div>
        <h2>Statistics:</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p> All {good + bad + neutral}</p>
        <p>Average { (good - bad) / (good + neutral + bad)}</p>
        <p>Positive = {good / (good + neutral + bad) * 100} %</p>
      </div>
      )
  }
}

const App = () => {
  const [good, SetGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div>
      <h1>Give Feedback</h1>
    </div>
    <div>
      <button onClick={() => SetGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
    </div>
    <Statistics good = {good} bad = {bad} neutral={neutral}/>
    </>
  )
}

export default App