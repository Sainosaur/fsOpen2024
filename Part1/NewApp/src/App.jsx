import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <>
      <th>{text}</th>
      <th>{value}</th>
    </>
  )
}

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
        <table>
          <tbody>
            <tr>
              <StatisticLine text = "Good" value = {good}/>
            </tr>
            <tr>
              <StatisticLine text = "Neutral" value = {neutral} />
            </tr>
            <tr>
              <StatisticLine text = "Bad" value = {bad}/>
            </tr>
            <tr>
              <StatisticLine text = "All" value = {good + bad + neutral}/>
            </tr>
            <tr>
              <StatisticLine text = "Average" value = { (good - bad) / (good + neutral + bad)}/>
            </tr>
            <tr>
            <StatisticLine text = "Positive" value = {good / (good + neutral + bad) * 100 + "%"}  />
            </tr>
          </tbody>
        </table>
      </div>
      )
  }
}
const Button = ({text, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
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
      <Button onClick={() => SetGood(good + 1)} text = "Good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text = "Neutral"/>
      <Button onClick={() => setBad(bad + 1)} text = "Bad"/>
    </div>
    <Statistics good = {good} bad = {bad} neutral={neutral}/>
    </>
  )
}

export default App