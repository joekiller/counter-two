import {LinkSrcAndLicenses} from "./LinkSrcAndLicenses";
import {LinkAllIndex} from "./LinkAllIndex";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import React from "react";
import styles from './HomeFooter.module.css';
import {VersionFooter} from "./VersionFooter";
import {LinkKeyCounter} from "./LinkKeyCounter";
import Link from "next/link";
import {LinkSplackDiscord} from "./LinkSplackDiscord";

export function HomeFooter() {
  return (
    <div>
      <div className={styles.homeFooter}>
        <h2>Helpful Links</h2>
        <div className="links">
          <Link href={{pathname: '/'}}>counter.tf</Link>
          <LinkAllIndex/>
          <LinkPostLifeIndex/>
          <LinkKeyCounter/>
          <LinkSrcAndLicenses/>
          <br/>
          <LinkSplackDiscord/>
          <a href="https://manic.tf/keyprice/">TF2 Key Price History</a>
          <a href="https://calculator.tf/">TF2 Currency Converter</a>
          <Link href={{pathname: '/privacy-policy'}}>Privacy Policy</Link>
        </div>
      </div>
      <VersionFooter />
    </div>
  )
}
