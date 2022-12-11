import {GetStaticProps, NextPage} from "next";
import React from "react";
import Processed, {BundledItemQuery, ItemParams, parseInputs} from "../../../components/Processed";
import path from "path";
import fsp from "fs/promises";
import BundledItem from "../../../components/BundledItem";

export {getStaticPaths} from "../../../components/Processed";

export const getStaticProps: GetStaticProps<ItemParams, BundledItemQuery> = async (context) => {
  const {category} = context.params!;
  const items: BundledItem[] = await JSON.parse(
    await fsp.readFile(
      [process.cwd(), 'data', `${category === 'all' ? 'all' : 'postlife-all'}-Q-K-C-S.json`].join(path.sep),
      "utf8"
    )
  )
  const {sets, total} = await parseInputs(items);
  return {
    // Passed to the page component as props
    props: {
      category, sets, total
    }
  }
}

const All: NextPage<ItemParams> = (props) => {
  return (
    <Processed {...props}/>
  )
}

export default All
