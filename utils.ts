import {GetStaticProps} from "next";
import {BundledItemQuery, ProcessedParams} from "./components/Processed";
import BundledItem, {GroupingStats} from "./components/BundledItem";
import fsp from "fs/promises";
import path from "path";
import Grouping from "./components/Grouping";

export async function parseInputs(items: BundledItem[]) {
  const sets = new Map<string, number>()
  items.forEach(item =>
    Object.keys(item.combinations).map((c) => {
      const current = sets.get(item.name);
      if(current) {
        sets.set(item.name, current + item.combinations[c].total)
      } else {
        sets.set(item.name, item.combinations[c].total)
      }
    })
  );
  const sortedSets = Array.from(sets).sort((a, b) => 0 === a[1] - b[1] ? a[0].localeCompare(b[0]) : a[1] - b[1]).map(v => ({name: v[0], total: v[1]}))
  const total = sortedSets.reduce((p, v) => p + v.total, 0)
  return {sets: sortedSets, total};
}

export function genGetStaticProps(target: string): GetStaticProps<ProcessedParams, BundledItemQuery> {
  return async (context) => {
    const {category} = context.params!;
    const items: BundledItem[] = await JSON.parse(
      await fsp.readFile(
        [process.cwd(), 'data', `${category === 'all' ? 'all' : 'postlife-all'}-${target}.json`].join(path.sep),
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
}

export function isInGrouping(grouping: Grouping, stats: GroupingStats) {
  switch (grouping) {
    case "all":
      return true;
    case "double":
      return stats.isDouble;
    case "single":
      return !stats.isDouble;
  }
}