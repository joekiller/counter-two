import Category from "../../../components/Category";
import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {ItemLink} from "../../../components/ItemLink";
import {FinalFooter} from "../../../components/FinalFooter";
import {ParsedUrlQuery} from "querystring";
import BundledItem from "../../../components/BundledItem";
import fsp from "fs/promises";
import path from "path";
import Grouping from "../../../components/Grouping";
import Link from "next/link";


export interface CategoryQuery extends ParsedUrlQuery {
  category: Category;
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<CategoryQuery> = async () => {
  return {
    paths: [{ params: { category: 'all'}}, { params: { category: 'allpostlife'}}],
    fallback: false
  }
}

export interface CategoryParams {
  category: Category,
  summaryItems: {category: Category, grouping: Grouping, name: string, fullName: string, total: number}[]
}

export const getStaticProps: GetStaticProps<CategoryParams, CategoryQuery> = async (context) => {
  const {category} = context.params!;
  const items: BundledItem[] = await JSON.parse(await fsp.readFile([process.cwd(), 'data', 'all-Q.json'].join(path.sep), "utf8"));
  const summaryItems = items.filter((item) => category === 'all' ? true : item.category === 'allpostlife').flatMap(item => item.groupings.map(grouping => ({item, grouping, fullItemName: fullItemName(grouping, category, item.name)})))
    .sort((a,b) => a.fullItemName.localeCompare(b.fullItemName)).map(v => ({category, grouping: v.grouping, name: v.item.name, fullName: v.fullItemName, total: Object.entries(v.item.combinations).reduce((p, c) => p + c[1].total, 0)}));
  return {
    // Passed to the page component as props
    props: {
      category,
      summaryItems
    }
  }
}


export function options(category: Category, all: string, postlife: string) {
  switch (category) {
    case "all":
      return all;
    case "allpostlife":
      return postlife;
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

export function handleSearchChange(searchText: string, withLinks: boolean, stats?: {total: number, displayTotal: number, setDisplayTotal: React.Dispatch<React.SetStateAction<number>>}): void {
  const filter = searchText.toUpperCase();
  const included = (text: string) => (text.toUpperCase().indexOf(filter) > -1)
  const ul = document.getElementById("spellList");
  const li = ul!.getElementsByTagName('li') || [];
  let newTotal = 0;

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    let a;
    if (withLinks) {
      a = li[i].getElementsByTagName("a")[0];
    } else {
      a = li[i];
    }
    const txtValue = a.textContent || a.innerText;
    if (included(txtValue)) {
      if(a.dataset.total) {
        newTotal += parseInt(a.dataset.total);
      }
      a.style.display = "";
    } else {
      a.style.display = "none";
    }
  }
  if(stats && newTotal != stats.displayTotal) {
    stats.setDisplayTotal((_p) => newTotal)
  }
}

function fullItemName(indexGrouping: string, indexCategory: Category, itemName: string) {
  return `${indexGrouping} ${indexCategory === 'allpostlife' ? 'postlife spelled' : 'spelled'} ${itemName}`
}

const SpellIndex: NextPage<CategoryParams> = ({ category , summaryItems}) => {
  const title = `All ${options(category, 'Spells', 'PostLife Spells')} Index`
  return (
    <div>
      <Head>
        <title title={title}/>
        <meta name="description" content={description(category)} />
        <meta name="keywords" content={keywords(category)}/>
        <link rel="icon" type="image/png" href="/static/key-solid.svg" />
      </Head>

      <main className="spell-list">
        <input enterKeyHint={"search"} type={"search"} id={"spellSearch"} onChange={(e) => handleSearchChange(e.target.value, false)} placeholder={"Press enter to search for names..."}/>
        <ul id="spellList">
          {summaryItems.map(i =>
            <li data-category={i.category} data-grouping={i.grouping} data-name={i.name} data-fullname={i.fullName} data-total={i.total} key={`${i.name}${i.grouping}${i.category}`}>
              <ItemLink data-category={i.category} data-grouping={i.grouping} data-name={i.name} data-fullname={i.fullName} data-total={i.total}/>
            </li>)}
          <li><Link href={{pathname: `/${category}/render/processed-Q-K-C-S.html`}}><a>processed-Q-K-C-S</a></Link></li>
          <li>processed-K-C-S</li>
          <li>processed-Q-C-S</li>
          <li>processed-Q-K-S</li>
          <li>processed-Q-K-S</li>
          <li>processed-Q-K-S</li>
          <li>processed-C-S</li>
          <li>processed-Q-S</li>
          <li>processed-S</li>
          <li>processed-E</li>
        </ul>
      </main>
      <footer>
        <div className="break"/>
        <FinalFooter />
      </footer>
    </div>
  )
}

export default SpellIndex