import styles from './CounterMain.module.css'
import React from "react";


const CounterMain = ({children}: {children: React.JSX.Element[]}) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default CounterMain