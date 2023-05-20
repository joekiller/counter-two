import styles from './CounterMain.module.css'


const CounterMain = ({children}: {children: JSX.Element[]}) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default CounterMain