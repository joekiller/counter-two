import Category from "../../../components/Category";
import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Items from "../../../components/Items";
import {ItemLink} from "../../../components/ItemLink";
import {LinkSrcAndLicenses} from "../../../components/LinkSrcAndLicenses";
import {LinkPostLifeIndex} from "../../../components/LinkPostLifeIndex";
import {LinkAllIndex} from "../../../components/LinkAllIndex";
import {FinalFooter} from "../../../components/FinalFooter";
import {ParsedUrlQuery} from "querystring";


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
  category: Category
}

export const getStaticProps: GetStaticProps<CategoryParams, CategoryQuery> = async (context) => {
  const {category} = context.params!;
  return {
    // Passed to the page component as props
    props: {
      category
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

export function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>, withLinks: boolean): void {
  // Declare variables
  var filter, ul, li, a, i, txtValue;
  filter = event.target.value.toUpperCase();
  ul = document.getElementById("spellList");
  li = ul!.getElementsByTagName('li') || [];

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    let a;
    if (withLinks) {
      a = li[i].getElementsByTagName("a")[0];
    } else {
      a = li[i];
    }
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const SpellIndex: NextPage<CategoryParams> = ({ category }) => {
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
        <input type={"text"} id={"spellSearch"} onChange={(e) => handleSearchChange(e, false)} placeholder={"Search for names..."}/>
        <ul id="spellList">
          {Items.flatMap(item => item.groupings.map(grouping => <li key={`${item.name}${grouping}${item.category}`}><ItemLink indexCategory={category} grouping={grouping} name={item.name}/></li>))}
          <li>processed-Q-K-C-S</li>
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