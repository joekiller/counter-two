import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import React from "react";
import {ParsedUrlQuery} from "querystring";
import Category from "../../../../components/Category";
import BundledItem from "../../../../components/BundledItem";
import {LinkSrcAndLicenses} from "../../../../components/LinkSrcAndLicenses";
import Grouping from "../../../../components/Grouping";
import Items from "../../../../components/Items";
import {FinalFooter} from "../../../../components/FinalFooter";
import {LinkPostLifeIndex} from "../../../../components/LinkPostLifeIndex";
import {LinkAllIndex} from "../../../../components/LinkAllIndex";
import {handleSearchChange, options} from "../index.html";
import {deLinkName, linkName} from "../../../../components/ItemLink";


interface ItemParams {
  name: string,
  grouping: Grouping,
  category: Category,
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
  const paths = [
    ...Items.flatMap(item => bundleToItems(item))
  ];
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps<ItemParams, BundledItemQuery> = async (context) => {
  const {category, name, grouping} = context.params!;
  return {
    // Passed to the page component as props
    props: {
      category, name: deLinkName(name), grouping
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

const Name: NextPage<ItemParams> = ({ category, name, grouping }) => {
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
        <h1>{name}</h1>
        <h2>Estimated Total: 1</h2>
        <input type={"text"} id={"spellSearch"} onChange={(e) => handleSearchChange(e, false)} placeholder={"Search for names..."}/>
        <ul id="spellList">
          <li>Spectral Spectrum: 1</li>
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
