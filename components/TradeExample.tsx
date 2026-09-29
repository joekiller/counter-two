import Image from 'next/image'
import React from "react";
import styles from './TradeExample.module.css'

const KEY = 'Mann Co. Supply Crate Key';
const REFINED = 'Refined Metal';

/**
 * Items given away in the example trade, in the order Steam lists them: two
 * Refined Metal, six keys, twenty six more Refined Metal and a final key. That
 * is 7 Mann Co. Supply Crate Key and 28 Refined Metal, which is what the
 * counter above reports once this line is pasted into it.
 */
const GIVEN = [
  ...Array<string>(2).fill(REFINED),
  ...Array<string>(6).fill(KEY),
  ...Array<string>(26).fill(REFINED),
  KEY,
];

/**
 * Live stand in for the old example screenshot: same panel, same colours, same
 * metrics, but as real text so a visitor can select the "given" line, paste it
 * into the counter and watch the totals fill in.
 *
 * Each item, comma included, is its own non wrapping span and the spans are
 * separated by ordinary spaces, so the list breaks between items the way Steam
 * renders it while still copying as one plain "Refined Metal, ..." string.
 */
const TradeExample = () => {
  return (
    <div className={styles.example}>
      <span className={`${styles.sign} ${styles.plus}`} aria-hidden="true"/>
      <div className={styles.received}>
        <Image className={styles.icon} src="/static/bazaar-bauble.png" alt="Unusual Bazaar Bauble" width={40} height={40}/>
        <span className={styles.unusual}>Unusual Bazaar Bauble</span>
      </div>

      <span className={`${styles.sign} ${styles.minus}`} aria-hidden="true"/>
      <p className={styles.given}>
        {GIVEN.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && ' '}
            <span className={styles.item}>{item}{index < GIVEN.length - 1 && ','}</span>
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

export default TradeExample
