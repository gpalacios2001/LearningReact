import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
    
}
const Statistics = (props) => {
  console.log(props.total)
  if (props.total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p></p>
        <p></p>
        No Feedback Given
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad} />
      <StatisticLine text="all" value = {props.total} />
      <StatisticLine text="avg" value = {props.avg} />
      <StatisticLine text="positive" value = {props.positive * 100} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    setAverage((updatedGood - bad)/(total + 1))
    setPositive(updatedGood/(total + 1))
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad) 
    setAverage((good - bad)/(total + 1))
    setPositive(good/(total + 1))
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad) 
    setAverage((good - updatedBad)/(total + 1))
    setPositive(good/(total + 1))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good = {good} neutral = {neutral} bad = {bad}
      total = {total} avg = {avg} positive = {positive}></Statistics>
    </div>
  )
}

export default App