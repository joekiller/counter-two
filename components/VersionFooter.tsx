import SiteVersion from "./SiteVersion";
import SiteLastUpdate from "./SiteLastUpdate";
import React from "react";
import styles from './VersionFooter.module.css';

export const VersionFooter = () => {
  return (
    <div className={styles.versionFooter}>
      <SiteVersion/>
      <SiteLastUpdate/>
    </div>
  )
}
