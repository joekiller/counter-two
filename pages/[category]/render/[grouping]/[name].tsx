import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import React, {useState, useCallback, ChangeEvent} from "react";
import {ParsedUrlQuery} from "querystring";
import Category from "../../../../components/Category";
import BundledItem from "../../../../components/BundledItem";
import {LinkSrcAndLicenses} from "../../../../components/LinkSrcAndLicenses";
import Grouping from "../../../../components/Grouping";
import {FinalFooter} from "../../../../components/FinalFooter";
import {LinkPostLifeIndex} from "../../../../components/LinkPostLifeIndex";
import {LinkAllIndex} from "../../../../components/LinkAllIndex";
import {handleSearchChange, options} from "../index.html";
import {deLinkName, linkName} from "../../../../components/ItemLink";
import fsp from "fs/promises";
import path from "path";


interface ItemParams {
  name: string,
  category: Category,
  sets: {name: string, total: number}[],
  total: number
}

export interface BundledItemQuery extends ParsedUrlQuery {
  name: string
  grouping: Grouping,
  category: Category
}

function bundleToItems(bundle: BundledItem): {
  params: {
    name: string,
    grouping: Grouping,
    category: Category
  }
}[] {
  const {name} = bundle;
  const categories: Category[] = bundle.category === 'allpostlife' ? ['allpostlife', 'all'] : ['all'];
  return categories.flatMap(category => bundle.groupings.map(grouping => ({params: {category, grouping, name: linkName(name)}})))
}

export const getStaticPaths: GetStaticPaths<BundledItemQuery> = async () => {
  const items: BundledItem[] = await JSON.parse(await fsp.readFile([process.cwd(), 'data', 'all-Q.json'].join(path.sep), "utf8"))
  const paths = [
    ...items.flatMap(item => bundleToItems(item))
  ];
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps<ItemParams, BundledItemQuery> = async (context) => {
  const items: BundledItem[] = await JSON.parse(await fsp.readFile([process.cwd(), 'data', 'all-Q.json'].join(path.sep), "utf8"));
  const {category, name: _name} = context.params!;
  const name = deLinkName(_name);
  const item = items[items.findIndex((v) => v.name.toLowerCase() === name)];
  const sets = Object.keys(item.combinations).map((c) => ({name: c, total: item.combinations[c].total})).sort((a,b) => a.total - b.total === 0 ? a.name.localeCompare(b.name) : a.total - b.total).map((item) =>({name: item.name, total: item.total}))
  const total = sets.reduce((p, c) => p + c.total, 0)
  return {
    // Passed to the page component as props
    props: {
      category, name: name, item, sets, total
    }
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

const Name: NextPage<ItemParams> = ({ category, name, sets, total }) => {
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
        <link rel="icon" type="image/png" href={`${process.env.BASE_PATH ? process.env.BASE_PATH : ''}/static/key-solid.svg`} />
      </Head>

      <main className="spell-list">
        <h1>{name}</h1>
        <h2>Estimated Total: {total}</h2>
        <input enterKeyHint={"search"} type={"search"} id={"spellSearch"} style={{backgroundImage: `url('${process.env.BASE_PATH ? process.env.BASE_PATH : ''}/static/searchicon.png')`}} onChange={handleChange} placeholder={"Press enter to search for names..."}/>
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

export default Name
