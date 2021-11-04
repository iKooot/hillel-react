import React, {useState} from 'react';
import classes from './GoalItem.module.scss'
import MyButton from "../../UI/MyButton/MyButton";

function GoalItem({data, onRemove}) {
  const [goalDone, setGoalDone] = useState(false)

  const removeGoalHandler = () => {
    onRemove(data.id)
  }
  const goalDoneHandler = () => {
    setGoalDone(prev => !prev)
  }

  return (
      <li className={classes.item}>
        <p className={goalDone ? classes.done : ''}>{data.title}</p>
        <MyButton onClick={goalDoneHandler}>
          {goalDone ? 'Not yet' : 'Done'}
        </MyButton>
        <MyButton onClick={removeGoalHandler} mod="black">&#x2716;</MyButton>
      </li>
  );
}

export default GoalItem;