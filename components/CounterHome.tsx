import styles from './CounterHome.module.css'
import React from "react";
import {LinkAllIndex} from "./LinkAllIndex";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import {LinkSplackDiscord} from "./LinkSplackDiscord";


const CounterHome = () => {
  return (
    <div className={styles.home}>
      <h1>
        TF2 Spelled Item Counts
      </h1>

      <div>
        <h2><LinkAllIndex/></h2>
      </div>
      <div>
        <h2><LinkPostLifeIndex/></h2>
      </div>
      <div className="discord">
        <h3>Join <LinkSplackDiscord/></h3>
        <p>Splack Discord is the, &quot;<b>House Of Spells: A TF2 Spell Trading Community</b>&quot;</p>
        <p>Get the most up to date backpack.tf classifieds spelled item listings. The discord features: a bot that tells you the latest item price changes, description changes, owner changes and more! You can price check spelled items using the price check bot.</p>
      </div>
    </div>
  )
}

export default CounterHome