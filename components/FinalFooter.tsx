import styles from '../styles/FinalFooter.module.css'
import Link from "next/link";

export function FinalFooter() {
  return (
    <div className={styles.finalfooter}>
      <p>
        Copyright 2022 <Link href="/">counter.tf</Link>
      </p>
      <p>
        all counts are approximate
      </p>
      <p>
        last updated: Sat Apr 16 2022
      </p>
    </div>
  )
}
