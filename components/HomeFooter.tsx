import {LinkSrcAndLicenses} from "./LinkSrcAndLicenses";
import {LinkAllIndex} from "./LinkAllIndex";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import React from "react";
import styles from './HomeFooter.module.css';
import {VersionFooter} from "./VersionFooter";

export function HomeFooter() {
  return (
    <div>
      <div className={styles.homeFooter}>
        <h2>Helpful Links</h2>
        <div className="links">
          <a href="https://manic.tf/keyprice/">TF2 Key Price History</a>
          <a href="https://calculator.tf/">TF2 Currency Converter</a>
          <LinkSrcAndLicenses/>
          <LinkAllIndex/>
          <LinkPostLifeIndex/>
        </div>
      </div>
      <VersionFooter />
    </div>
  )
}
