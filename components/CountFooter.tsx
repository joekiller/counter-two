import styles from './CountFooter.module.css'
import Link from "next/link";
import React from "react";
import {copyright} from "./copyright";

const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export function CountFooter() {
  const updatedAt = process.env.NEXT_PUBLIC_COUNTS_UPDATED_AT ? new Date(Number.parseInt(process.env.NEXT_PUBLIC_COUNTS_UPDATED_AT)*1000).toLocaleDateString(undefined,options) : "-";
  return (
      <div className={styles.appxCountsFooter}>
        <p>
          {copyright()} <Link href="/">counter.tf</Link>
        </p>
        <Link href={{pathname: '/privacy-policy'}}>Privacy Policy</Link>
        <p>
          all counts are approximate
        </p>
        <p>
          counts last updated: {updatedAt}
        </p>
      </div>
  )
}
