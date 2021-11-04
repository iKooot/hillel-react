import {useState} from "react";

export function useInput (initialValue) {
  const INITIAL_VALUES = {
    value: initialValue,
    touched: false,
  }

  const [data, setData] = useState(INITIAL_VALUES)

  const onChange = ({target}) => {
    setData(prev => ({
      ...prev,
      value: target.value,
      touched: true,
    }))
  }

  const clear = () => setData(INITIAL_VALUES)

  return {
    bind: {
      value: data.value,
      onChange,
    },
    value: data.value,
    touched: data.touched,
    clear
  }
}