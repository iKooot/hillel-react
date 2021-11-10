import React from 'react';
import classes from './MyButton.module.scss'

function MyButton({
                    type = "button",
                    className = "",
                    myProps = {},
                    children,
                    mod = 'blue',
                    onClick = () => {},
                  }) {
  const cls = [classes.button, className,]

  if (mod === 'black') {
    cls.push(classes.black)
  } else if (mod === 'blue') {
    cls.push(classes.blue)
  }
  return (
      <button type={type} onClick={onClick} {...myProps} className={cls.join(' ')}>
        {children}
      </button>
  );
}

export default MyButton;