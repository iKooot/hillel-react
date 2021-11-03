import React from 'react';
import classes from './MyButton.module.scss'

function MyButton({
                    type = "button",
                    className = "",
                    myProps = {},
                    children,
                  }) {
  return (
      <button type={type} {...myProps} className={classes.button}>
        {children}
      </button>
  );
}

export default MyButton;