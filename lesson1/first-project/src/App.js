import React, {useState} from 'react'

import GoalsForm from "./components/Goals/GoalsForm/GoalsForm";
import GoalsList from "./components/Goals/GoalsList/GoalsList";

function App() {
  const [goalArr, setGoalArr] = useState([])

  const addGoalHandler = goalValue => {
    setGoalArr(prev => [...prev, {title: goalValue, id: Math.round(Math.random()*100)}])
  }

  const removeGoalHandler = goalId => {
    console.log(goalId)
    setGoalArr(prev => prev.filter(el => el.id !== goalId))
  }

  return (
    <div className="container">
      <GoalsForm title="This is goals list" onAddGoal={addGoalHandler}/>
      <GoalsList data={goalArr} onRemove={removeGoalHandler}/>
    </div>
  );
}

export default App;
