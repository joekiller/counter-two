import styles from '../styles/Main.module.css'


const CounterMain = ({children}: {children: JSX.Element[]}) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default CounterMain