import React from 'react';
import classes from './GoalsList.module.scss'
import Card from "../../Wrappers/Card/Card";
import GoalItem from "../GoalItem/GoalItem";

function GoalsList({data, onRemove}) {

  let content = <ul>{data.map(goal => <GoalItem data={goal} key={goal.id} onRemove={onRemove}/>)}</ul>

  if(data.length < 1) {
    content = <h2 className={classes.title}>You have`t goals</h2>
  }

  return (
      <Card className={classes.listWrapper}>
        {content}
      </Card>
  );
}

export default GoalsList;