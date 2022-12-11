import {GetStaticPaths, NextPage} from "next";
import Head from "next/head";
import React, {ChangeEvent, useCallback, useState} from "react";
import {ParsedUrlQuery} from "querystring";
import Category from "./Category";
import {FinalFooter} from "./FinalFooter";
import {handleSearchChange, options} from "../pages/[category]/render/index.html";
import {LinkSrcAndLicenses} from "./LinkSrcAndLicenses";
import {LinkPostLifeIndex} from "./LinkPostLifeIndex";
import {LinkAllIndex} from "./LinkAllIndex";


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
  const [displayTotal, setDisplayTotal] = useState(total);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value, false, {total, displayTotal, setDisplayTotal})
  }, [total, displayTotal, setDisplayTotal])
  const title = `All ${options(category, 'Spells', 'PostLife Spells')} Index`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description(category)} />
        <meta name="keywords" content={keywords(category)}/>
        <link rel="icon" type="image/png" href="/static/key-solid.svg" />
      </Head>

      <main className="spell-list">
        <h2>Estimated Total: {total}</h2>
        <input enterKeyHint={"search"} type={"search"} id={"spellSearch"} onChange={handleChange} placeholder={"Press enter to search for names..."}/>
        {displayTotal != total && <h3>Found: {displayTotal}</h3>}
        <ul id="spellList">
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
        <FinalFooter />
      </footer>
    </div>
  )
}

export default Processed

