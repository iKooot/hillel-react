import React from 'react';
import classes from './GoalsForm.module.scss'
import Card from "../../Wrappers/Card/Card";
import MyButton from "../../UI/MyButton/MyButton";

function GoalsForm() {
  return (
      <Card className={classes.formWrapper}>
        <h2 className={classes.title}>This is goals list</h2>
        <form className={classes.form}>
          <div>
            <label htmlFor="goal">Enter your goal</label>
            <input type="text" id="goal"/>
          </div>
          <MyButton>Add</MyButton>
        </form>
      </Card>
  );
}

export default GoalsForm;