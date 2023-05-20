import {LinkAllIndex} from "./LinkAllIndex";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import {LinkSrcAndLicenses} from "./LinkSrcAndLicenses";
import {CountFooter} from "./CountFooter";
import React from "react";
import styles from './ItemFooter.module.css';

export const ItemFooter = () => {
  return (
    <div className={styles.itemFooter}>
      <h2>Helpful Links</h2>
      <div className="links">
        <LinkSrcAndLicenses />
        <LinkAllIndex/>
        <LinkPostLifeIndex />
      </div>
      <CountFooter />
    </div>
  )
}