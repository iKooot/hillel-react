import React, {useState, useEffect} from 'react';
import classes from './GoalsForm.module.scss'
import Card from "../../Wrappers/Card/Card";
import MyButton from "../../UI/MyButton/MyButton";
import {useInput} from '../../../tools/useInput'

function GoalsForm({title = 'Custom title', onAddGoal}) {
  const [formIsValid, setFormIsValid] = useState(false);
  const goalHandler = useInput('')

  const onSubmitHandler = e => {
    e.preventDefault()

    onAddGoal(goalHandler.value)

    goalHandler.clear()
  }

  useEffect(() => {
    setFormIsValid(
        goalHandler.value.length > 0 && goalHandler.value.length < 30
    )

  }, [goalHandler.value])

  return (
      <Card className={classes.formWrapper}>
        <h2 className={classes.title}>{title}</h2>
        <form
            onSubmit={onSubmitHandler}
            className={classes.form}>
          <div>
            <label htmlFor="goal">Enter your goal</label>
            {(!formIsValid && goalHandler.touched) && <span className={classes.error}>Oh no something wrong</span>}
            <input type="text" id="goal" {...goalHandler.bind}/>
          </div>
          <MyButton type="submit" myProps={{disabled: !formIsValid}}>Add</MyButton>
        </form>
      </Card>
  );
}

export default GoalsForm;