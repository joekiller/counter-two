import styles from './CounterHome.module.css'
import React from "react";


const CounterHome = ({children}: {children: React.JSX.Element[]}) => {
  return (
    <div className={styles.home}>
      {children}
    </div>
  )
}

export default CounterHome