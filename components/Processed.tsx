import {GetStaticPaths, NextPage} from "next";
import Head from "next/head";
import React, {ChangeEvent, useCallback, useState} from "react";
import {ParsedUrlQuery} from "querystring";
import Category from "./Category";
import {CountFooter} from "./CountFooter";
import {handleSearchChange, options} from "../pages/[category]/render/index.html";
import {LinkSrcAndLicenses} from "./LinkSrcAndLicenses";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import {LinkAllIndex} from "./LinkAllIndex";
import SearchForm from "./SearchForm";


export interface ProcessedParams {
  category: Category,
  sets: {name: string, total: number}[],
  total: number
}

export interface BundledItemQuery extends ParsedUrlQuery {
  category: Category
}

export const getStaticPaths: GetStaticPaths<BundledItemQuery> = async () => {
  return {
    paths: [
      {
        params: {
          category: 'all'
        }
      },
      {
        params: {
          category: 'allpostlife'
        }
      }],
    fallback: false
  }
}

function description(category: Category) {
  const fill = options(category, 'Spell', 'PostLife Spell');
  return `All ${fill} Combinations in TF2`
}

function keywords(category: Category) {
  const fill = options(category, 'spells', 'postlife spells');
  return `tf2 ${fill} index, tf2 ${fill} total, tf2 ${fill} count, counter, trading, team fortress 2`
}

const Processed: NextPage<ProcessedParams> = ({ category, sets, total }) => {
  const [loaded, setLoaded] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(total);
  const title = `All ${options(category, 'Spells', 'PostLife Spells')} Index`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description(category)} />
        <meta name="keywords" content={keywords(category)}/>
        <link rel="icon" type="image/png" href="/static/key-solid.svg" />
      </Head>

      <h2 style={{display: !loaded ? 'block' : 'none'}}>Loading...</h2>
      <main className="spell-list" style={{visibility: loaded ? 'visible' : 'hidden', display: loaded ? 'block': 'none'}}>
        <h2>Estimated Total: {total}</h2>
        <SearchForm
          loaded={loaded}
          handleLoaded={setLoaded}
          handleSearchChange={(s: string) => handleSearchChange({searchText : s, withLinks : false, stats : {total, displayTotal, setDisplayTotal}})}
          disableInstant={true}
        />
        <h3 style={{visibility: loaded ? 'visible' : 'hidden', display: displayTotal != total ? 'block' : 'none'}}>Found: {displayTotal}</h3>
        <ul id="spellList" style={{visibility: loaded ? 'visible' : 'hidden'}}>
          {sets.map((item, i) =>
            <li data-name={item.name} data-total={item.total} key={i}>
              {item.name}: {item.total}
            </li>)}
        </ul>
      </main>
      <footer>
        <h2>Helpful Links</h2>
        <div className="links">
          <LinkAllIndex/>
          <LinkPostLifeIndex />
          <LinkSrcAndLicenses />
        </div>
        <CountFooter />
      </footer>
    </div>
  )
}

export default Processed

